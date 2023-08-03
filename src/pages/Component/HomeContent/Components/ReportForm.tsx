import styles from './ReportForm.module.css'
//表单处理
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import EventIcon from '@material-ui/icons/Event';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, TextField, InputLabel, Input, IconButton, InputAdornment } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import { Form } from 'antd';

import React, { useState } from 'react';
import { IFormInput, SingleSelectorDatas, ActionTypeEnum, OtherOptionEnum, projectInfoList, medicineInfoList } from './data';
import { request } from 'http';
import { BorderOutlined, CheckSquareTwoTone } from '@ant-design/icons';
import { log } from 'console';

function ReportForm({ open, onCancel }: { open: boolean, onCancel: any }) {
    return (
        <div onClick={onCancel} className={styles.box} style={{ display: open ? 'block' : 'none' }}>
            <div onClick={(e) => { e.stopPropagation() }} className={styles.contentBox}>
                <FormContent />
            </div>
        </div>
    )
}

export default ReportForm;


const FormContent: React.FC = () => {



    const { register,
        handleSubmit,
        watch,
        formState: { errors }, } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("onSubmit==", data)
    }
    //自定义输入框需要记录值
    // const [values, setValues] = React.useState({
    //     //安全信息接收日期
    //     infoGetDate: '2022/09/08',
    //     //有效日期
    //     validDate: '',
    //     //疾病类型
    //     diseaseType: '',
    //     //使用剂量
    //     DOSAGER: '',
    //     //批号
    //     lotNumber: ''
    // });
    //自定义输入框事件处理
    const [tfAction, setTfAction] = React.useState({
        //是否展示安全信息接收日期选择日历
        isShowCalendar: false,
        //是否展示有效日期选择日历
        isShowValidDateCalendar: false,
        //有效日期不详?
        validDateUnknown: false,
        //疾病类型不详?
        diseaseTypeUnknown: false,
        //使用剂量不详?
        DOSAGERUnknown: false,
        //批号不详?
        lotNumberUnknown: false
    })
    //单项选择器需要记录值
    const [selectDic, setSelectDic] = useState({
        actionType:"2",
        isAE:"unknown",
        isFestation:"unknown",
        gender:'unknown',
        patientsNum:'0',
        isAgree:'1',
        isToCommunicate:'1',
        reporterType:'1'
    })
    //机构/项目信息 输入框数组
    const projectTFList = projectInfoList.map((value) => {
        if (value.id === "infoReceiveDate") {
            return <TextField
                {...register("infoReceiveDate",
                    { required: true })}
                color="secondary"
                id={value.id}
                label={value.label}
                type="date"
                defaultValue=""
                style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        } else {
            return <TextField
                {...register(value.id,
                    { required: true })}
                required
                style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                color="secondary"
                id={value.id}
                label={<div style={{ fontSize: 13, float: 'left' }}>{value.label}</div>}
                defaultValue={value.defaultValue}
            />
        }
    })
    //不详按钮
    const UnknownInput = (key: string) => {
        return {
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        style={{ marginTop: -2 }}
                        onClick={() => {
                            setTfAction({
                                ...tfAction,
                                [key]: !tfAction[key]
                            })
                        }}
                    >
                        {!tfAction[key] ? <BorderOutlined style={{ fontSize: '18px', color: 'red' }} /> : <CheckSquareTwoTone twoToneColor='#f50057' style={{ fontSize: '18px' }} />}
                    </IconButton>
                    <FormLabel component="legend"
                        style={{ color: '#666', fontSize: 14, marginBottom: 0, marginLeft: -10, marginRight: 0, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}
                    >不详</FormLabel>
                </InputAdornment>
            ),
        }
    }
    //构思
    /*
    1.测量体重,脑袋构想开始减肥.
    2.控制饮食,米饭从两碗变为一碗.
    3.动画变更为运动(跑步+骑行+游泳)
    4.时间变更100天+
    5.控制到目标范围.
    6.下一目标.
    */
    //药物和安全性信息输入框数组
    const medicineTFList = medicineInfoList.map((value) => {
        if (value.id === 'validDate') {
            return (
                <TextField
                    
                    {...register("validDate", { required:!tfAction.validDateUnknown })}
                    disabled={tfAction.validDateUnknown}
                    color="secondary"
                    id={value.id}
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        {value.label}
                    </div>}
                    type='date'
                    defaultValue=''
                    InputLabelProps={{ shrink: true }}
                    style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    InputProps={UnknownInput("validDateUnknown")}
                />
            )
        } else if (value.id === "eventID" || value.id === "eventProductName") {
            return (
                <TextField
                    {...register(value.id,
                        { required: true })}
                    required
                    style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"
                    id={value.id}
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        {value.label}
                    </div>}
                    defaultValue=""
                />
            )
        } else {
            return (
                <TextField
                    {...register(value.id,
                        { required: !tfAction[value.id + "Unknown"] })}
                    required
                    disabled={tfAction[value.id + "Unknown"]}
                    style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"
                    id={value.id}
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        {value.label}
                    </div>}
                    defaultValue=""

                    InputProps={UnknownInput(value.id + "Unknown")}

                />
            )
        }
    })
    return (
        <>
            <Form onSubmitCapture={handleSubmit(onSubmit)}>
                <div className={styles.title1}>GSK 不良事件报告表</div>
                <div className={styles.title2}>机构/项目信息</div>
                <SingleSelector 
                {...register('actionType')}
                title='*活动类型'
                defaultValue={selectDic.actionType} 
                name='actionType' 
                onChange={(e)=>{
                    setSelectDic({
                        ...selectDic,
                        actionType:e.target.value
                    })
                    console.log("selectDic===", selectDic);
                    
                }}
                
                itemDatas={SingleSelectorDatas.actionType}/>
                {/* <FormControl  className={styles.formControl}  >
                    <div className={styles.actionTypeBox}>
                        <RadioGroup {...register('actionType')}  row aria-label="actionType" name="actionType" defaultValue={"1"}>
                            <FormLabel component="legend" style={{ color: '#666', fontSize: 14, marginBottom: 0, marginRight: 20, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}>
                                *活动类型
                            </FormLabel>
                            <FormControlLabel labelPlacement="end" value="1" style={{ height: 40 }} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>市场研究</div>} />
                            <FormControlLabel labelPlacement="end" value="2" style={{ height: 40 }} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>患者支持项目</div>} />
                            <FormControlLabel labelPlacement="end" value="3" style={{ height: 40 }} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>数字媒体</div>} />
                        </RadioGroup>
                    </div>
                </FormControl> */}
                {/* <SingleSelector title='*活动类型' name='actionType' itemDatas={singleSelectorDatas.actionType}/> */}
        
                
                <div className={styles.subContent}>
                    {projectTFList}
                </div>

                <div className={styles.title2} style={{ marginBottom: 0 }}>药物和安全性信息</div>
                <div className={styles.subContent} style={{ marginTop: 0 }}>
                    {medicineTFList}
                </div>


                <input type="submit" value="Send Request" />
            </Form>

        </>
    );
};


interface SelectorItem {
    value: string
    label: string
}

function SingleSelector({ title, name, itemDatas, defaultValue, onChange }: { title: string, name: string, itemDatas: SelectorItem[], defaultValue:string, onChange:any }) {

    const items = itemDatas.map((value) => {
        return (
            <FormControlLabel
                labelPlacement="end"
                value={value.value}
                style={{ height: 40 }}
                control={<Radio />}
                label={<div style={{ color: '#666', fontSize: 14 }}>{value.label}</div>} />
        )
    })
    return (
        <FormControl className={styles.formControl}>
            <div className={styles.actionTypeBox}>
                <RadioGroup row aria-label={name} name={name} value={defaultValue} onChange={onChange}>
                    <FormLabel component="legend" style={{ color: '#666', fontSize: 14, marginBottom: 0, marginRight: 20, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}>
                        {title}
                    </FormLabel>
                    {items}
                </RadioGroup>
            </div>
        </FormControl>
    )
}



//抽出input试试





