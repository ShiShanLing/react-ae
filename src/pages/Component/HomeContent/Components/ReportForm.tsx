import styles from './ReportForm.module.css'
//表单处理
import { useForm, SubmitHandler } from "react-hook-form"
import EventIcon from '@material-ui/icons/Event';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, TextField, InputLabel, Input, IconButton, InputAdornment } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import { Form } from 'antd';

import React, { useState } from 'react';
import { IFormInput, TextFieldInfo, ActionTypeEnum, OtherOptionEnum, projectInfoList, medicineInfoList } from './data';
import { request } from 'http';
import { BorderOutlined, CheckSquareTwoTone } from '@ant-design/icons';
import { log } from 'console';



function ReportForm({ open, onCancel }: { open: boolean, onCancel: any }) {
    return (
        <div onClick={onCancel} className={styles.box} style={{ display: open ? 'block' : 'none' }}>
            <div onClick={(e) => { e.stopPropagation() }} className={styles.contentBox}>
                <FormDisabledDemo />
            </div>
        </div>
    )
}

export default ReportForm;


const FormDisabledDemo: React.FC = () => {

    const [actionType, setActionType] = useState("1");
    const { register,
        handleSubmit,
        watch,
        formState: { errors }, } = useForm<IFormInput>();
    handleSubmit(() => { })
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

    const validDateUnknown_test = "validDate";


    const UnknownInput = ({ key, setKey }) => {
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
                        {!tfAction.validDateUnknown ? <BorderOutlined style={{ fontSize: '18px', color: 'red' }} /> : <CheckSquareTwoTone twoToneColor='#f50057' style={{ fontSize: '18px' }} />}
                    </IconButton>
                    <FormLabel component="legend"
                        style={{ color: '#666', fontSize: 14, marginBottom: 0, marginLeft: -10, marginRight: 0, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}
                    >不详</FormLabel>
                </InputAdornment>
            ),
        }
    }


    const medicineTFList = medicineInfoList.map((value) => {
        if (value.id === 'validDate') {
            return (
                <TextField
                    {...register("validDate", { required: true })}
                    disabled={tfAction.validDateUnknown}
                    color="secondary"
                    id={value.id}
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        {value.label}
                    </div>}
                    type='date'
                    defaultValue=''
                    InputLabelProps={{ shrink: true }}
                    onChange={() => {
                        console.log("onChange----", register);
                        //
                        // handleSubmit(onSubmit)
                    }}
                    style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    style={{ marginTop: -2 }}
                                    onClick={() => {
                                        setTfAction({
                                            ...tfAction,
                                            validDateUnknown: !tfAction.validDateUnknown
                                        })
                                    }}
                                >
                                    {!tfAction.validDateUnknown ? <BorderOutlined style={{ fontSize: '18px', color: 'red' }} /> : <CheckSquareTwoTone twoToneColor='#f50057' style={{ fontSize: '18px' }} />}
                                </IconButton>
                                <FormLabel component="legend"
                                    style={{ color: '#666', fontSize: 14, marginBottom: 0, marginLeft: -10, marginRight: 0, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}
                                >不详</FormLabel>
                            </InputAdornment>
                        )
                    }}
                />
            )
        } else if (value.id === "eventID" || value.id === "eventProductName") {
            <TextField
                {...register(value.id,
                    { required: true })}
                required
                disabled={tfAction.validDateUnknown}
                style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                color="secondary"
                id={value.id}
                label={<div style={{ fontSize: 13, float: 'left' }}>
                    {value.label}
                </div>}
                defaultValue=""
            />
        } else {
            return <TextField
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
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                style={{ marginTop: -2 }}
                                onClick={() => {
                                    setTfAction({
                                        ...tfAction,
                                        validDateUnknown: !tfAction.validDateUnknown
                                    })
                                }}
                            >
                                {!tfAction.validDateUnknown ? <BorderOutlined style={{ fontSize: '18px', color: 'red' }} /> : <CheckSquareTwoTone twoToneColor='#f50057' style={{ fontSize: '18px' }} />}
                            </IconButton>
                            <FormLabel component="legend"
                                style={{ color: '#666', fontSize: 14, marginBottom: 0, marginLeft: -10, marginRight: 0, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}
                            >不详</FormLabel>
                        </InputAdornment>
                    ),
                }}

            />
        }
    })



    const medicineTFs = (() => {

        return (
            <>
                <TextField
                    {...register("eventID",
                        { required: true })}
                    required
                    style={{ ...{ width: "45%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"
                    id="eventID"
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        * 事件编号（系统内部编号）
                    </div>}
                    defaultValue=""
                />
                <TextField
                    {...register("eventProductName",
                        { required: true })}
                    style={{ ...{ width: "45%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"
                    id="eventProductName"
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        * 安全性信息是关于哪种葛兰素史克产品？
                    </div>}
                    defaultValue=""
                />

                {/* <FormControl
                required
                style={{ ...{ width: "45%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                color="secondary"
                >
                    <UnknownInput 
                     {...register('ChimAERa')}
                    label={undefined} 
                    value={undefined} 
                    type={undefined} 
                    id={undefined} 
                    isUnknown={undefined} 
                    unknownClick={undefined}/>
                </FormControl> */}

                <TextField
                    {...register("validDate", { required: true })}
                    disabled={tfAction[validDateUnknown_test + "Unknown"]}
                    color="secondary"
                    id="validDate"
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        * 有效日期
                    </div>}
                    type='date'
                    defaultValue=''
                    InputLabelProps={{ shrink: true }}
                    onChange={() => {
                        console.log("onChange----", register);
                        // handleSubmit(onSubmit)
                    }}
                    style={{ ...{ width: "45%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    style={{ marginTop: -2 }}
                                    onClick={() => {
                                        setTfAction({
                                            ...tfAction,
                                            [validDateUnknown_test + "Unknown" ]: !tfAction[validDateUnknown_test + "Unknown"]
                                        })
                                    }}
                                >
                                    {!tfAction[validDateUnknown_test + "Unknown"] ? <BorderOutlined style={{ fontSize: '18px', color: 'red' }} /> : <CheckSquareTwoTone twoToneColor='#f50057' style={{ fontSize: '18px' }} />}
                                </IconButton>
                                <FormLabel component="legend"
                                    style={{ color: '#666', fontSize: 14, marginBottom: 0, marginLeft: -10, marginRight: 0, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}
                                >不详</FormLabel>
                            </InputAdornment>
                        )
                    }}
                />



                <TextField
                    {...register("productSymptom",
                        { required: true })}
                    style={{ ...{ width: "45%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"
                    id="productSymptom"
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        * 该产品用于什么适应症（疾病）？"
                    </div>}
                    defaultValue=""
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}

                />

                {/* <FormControl
                    required
                    style={{ ...{ width: "45%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"

                >
                    <InputLabel>* 有效日期</InputLabel>
                    <Input
                        {...register('ChimAERa')}
                        id="productSymptom"
                        type="text"
                        value=""
                        onChange={()=>{
                            console.log("tfAction====", tfAction);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    style={{ marginTop: -2 }}
                                    onClick={() => { setTestIcon(!testIcon) }}
                                >
                                    {testIcon ? <BorderOutlined style={{ fontSize: '18px', color: 'red' }} /> : <CheckSquareTwoTone twoToneColor='#f50057' style={{ fontSize: '18px' }} />}
                                </IconButton>
                                <FormLabel component="legend"
                                    style={{ color: '#666', fontSize: 14, marginBottom: 0, marginLeft: -10, marginRight: 0, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}
                                >不详</FormLabel>
                            </InputAdornment>
                        }
                    />
                </FormControl> */}

                <TextField
                    {...register("useDose",
                        { required: true })}
                    style={{ ...{ width: "45%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"
                    id="useDose"
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        * 使用剂量（文字描述）
                    </div>}
                    defaultValue=""
                />
                <TextField
                    {...register("lotNumber",
                        { required: true })}
                    style={{ ...{ width: "45%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"
                    id="lotNumber"
                    label={<div style={{ fontSize: 13, float: 'left' }}>
                        * 批号
                    </div>}
                    defaultValue=""
                />
            </>
        )
        //
        //有效日期

    })
    const [testIcon, setTestIcon] = useState(true);

    return (
        <>
            <Form onSubmitCapture={handleSubmit(onSubmit)}>
                <div className={styles.title1}>GSK 不良事件报告表</div>
                <div className={styles.title2}>机构/项目信息</div>
                <FormControl className={styles.formControl} component="fieldset">
                    <div className={styles.actionTypeBox}>
                        <RadioGroup row aria-label="actionType" name="actionType" defaultValue={"1"}>
                            <FormLabel component="legend" style={{ color: '#666', fontSize: 14, marginBottom: 0, marginRight: 20, borderBottom: "0", width: 'auto', height: '40px', lineHeight: '40px' }}>*活动类型</FormLabel>
                            <FormControlLabel labelPlacement="end" value="1" style={{ height: 40 }} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>市场研究</div>} />
                            <FormControlLabel labelPlacement="end" value="2" style={{ height: 40 }} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>患者支持项目</div>} />
                            <FormControlLabel labelPlacement="end" value="3" style={{ height: 40 }} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>数字媒体</div>} />
                        </RadioGroup>
                    </div>
                </FormControl>

                <div className={styles.subContent}>
                    {projectTFList}
                </div>

                <div className={styles.title2} style={{ marginBottom: 0 }}>药物和安全性信息</div>
                <div className={styles.subContent} style={{ marginTop: 0 }}>
                    {medicineTFs()}
                </div>


                <input type="submit" value="Send Request" />
            </Form>

        </>
    );
};


const currentStyle = {
    tfStyle: { width: "53%", marginBottom: 10, paddingRight: 10 }
}




//抽出input试试





