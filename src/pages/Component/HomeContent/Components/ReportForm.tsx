import styles from './ReportForm.module.css'
//表单处理
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import EventIcon from '@material-ui/icons/Event';
import pickers, { KeyboardDatePicker , MuiPickersUtilsProvider} from '@material-ui/pickers'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, TextField, InputLabel, Input, IconButton, InputAdornment } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import { Form } from 'antd';
import DateFnsUtils from '@date-io/date-fns';
import React, { useState } from 'react';
import {
    IFormInput,
    SingleSelectorDatas,
    ActionTypeEnum,
    OtherOptionEnum,
    projectInfoList,
    medicineInfoList,
    patientInfoList,
    reporterInfoList
    
} from './data';
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
        lotNumberUnknown: false,
        //患者信息-------
        //患者出生年份不详
        patientDateBirthUnknown: false,
        //患者姓名首字母
        patientNameUnknown: false,
        //其他 (患者编号)
        othersInfoUnknown: false,
        //报告者信息
        //报告者类型
        reporterType:"",
        //报告者姓名
        reporterName:"",
        //报告者地址
        reporterAddress:"",
        //报告者电话
        reporterPhone:"",
        //报告者邮箱
        reporterEmail:"",

    })

    let selectedDate

    /*   

    */
    //单项选择器需要记录值
    const [selectDic, setSelectDic] = useState({
        actionType: "2",
        isAE: "unknown",
        isFestation: "unknown",
        gender: 'unknown',
        patientsNum: '0',
        //报告者是否同意以上内容？
        isAgree: '1',
        isToCommunicate: '0',
        reporterType: '1'
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

            //     <MuiPickersUtilsProvider utils={DateFnsUtils}>
            //          <KeyboardDatePicker
            //     {...register("validDate", { required: !tfAction.validDateUnknown })}
            //     margin="normal"
            //     id="date-picker-dialog"
            //     label="Date picker dialog"
            //     format="MM/dd/yyyy"
            //     defaultValue={selectedDate}
            //     value={selectedDate}
            //     // onChange={handleDateChange}
            //     KeyboardButtonProps={{
            //       'aria-label': 'change date',
            //     }}
            //   />
            //     </MuiPickersUtilsProvider>
               <TextField></TextField>

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
    //患者信息填写
    const patientInfoTFList = patientInfoList.map((value) => {
        return (
            <TextField
                {...register(value.id,
                    { required: !tfAction[value.id + "Unknown"] })}
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
        );
    })
    //报告者信息填写
    const reporterInfoTFList = reporterInfoList.map((value)=>{
        
        return (
            <TextField
                {...register(value.id,
                    { required: (value.id == 'reporterType' ? false : true)})}
                style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                color="secondary"
                id={value.id}
                onChange={(e)=>{
                    setTfAction({
                        ...tfAction,
                        [value.id]:e.target.value
                    })
                }}
                label={<div style={{ fontSize: 13, float: 'left' }}>
                    {value.label}
                </div>}
                value={tfAction[value.id]}
                defaultValue={tfAction[value.id]}
            />
        );
    })

    return (
        <>
            <Form onSubmitCapture={handleSubmit(onSubmit)}>
                <div className={styles.title1}>GSK 不良事件报告表</div>
                {/* ----------机构/项目信息---------- */}
                <div className={styles.title2}>机构/项目信息</div>


                <div className={styles.subContent}>
                    <SingleSelector
                        {...register('actionType')}
                        title='*活动类型'
                        defaultValue={selectDic.actionType}
                        name='actionType'
                        onChange={(e) => {
                            setSelectDic({
                                ...selectDic,
                                actionType: e.target.value
                            })
                            console.log("selectDic===", selectDic);

                        }}
                        itemDatas={SingleSelectorDatas.actionType} />
                    {projectTFList}
                </div>
                {/* ----------药物和安全性信息---------- */}
                <div className={styles.title2} style={{ marginBottom: 0 }}>药物和安全性信息</div>
                <div className={styles.subContent} style={{ marginTop: 0 }}>
                    {medicineTFList}
                    <SingleSelector
                        // {...register('actionType')}
                        title='* 报告者是否认为事件可能与产品的使用有关？'
                        defaultValue={selectDic.isAE}
                        name='isAE'
                        onChange={(e) => {
                            setSelectDic({
                                ...selectDic,
                                isAE: e.target.value
                            })
                            console.log("selectDic===", selectDic);

                        }}
                        itemDatas={SingleSelectorDatas.isAE} />

                    <SingleSelector
                        // {...register('actionType')}
                        title='* 使用该产品时患者是否处于妊娠期？'
                        defaultValue={selectDic.isFestation}
                        name='isFestation'
                        onChange={(e) => {
                            setSelectDic({
                                ...selectDic,
                                isFestation: e.target.value
                            })
                            console.log("selectDic===", selectDic);

                        }}
                        itemDatas={SingleSelectorDatas.isFestation} />
                    <TextField
                        required
                        {...register('securityInfoDes')}
                        style={{ ...{ width: "100%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                        color="secondary"
                        id={"detailedDescription"}
                        label={<div style={{ fontSize: 13, float: 'left' }}>
                            {"* 详细说明该研究中心所反映的安全信息 (逐字逐句) "}
                        </div>}
                        defaultValue=""
                        placeholder='* 例如，患者服用的其他药物、相关病史、事件结果、使用产品/药物采取的措施、患者是否住院？'
                    />
                </div>


                {/* ----------患者信息：使用该产品的患者（个人）或团体的相关信息（可以是报告者或其他人）---------- */}
                <div className={styles.title2} style={{ marginBottom: 0 }}>
                    患者信息：使用该产品的患者（个人）或团体的相关信息（可以是报告者或其他人）
                </div>
                <div className={styles.subContent} style={{ marginTop: 0 }}>
                    {patientInfoTFList}
                    <SingleSelector
                        // {...register('actionType')}
                        title='* 性别'
                        defaultValue={selectDic.gender}
                        name='gender'
                        onChange={(e) => {
                            setSelectDic({
                                ...selectDic,
                                gender: e.target.value
                            })
                            console.log("selectDic===", selectDic);

                        }}
                        itemDatas={SingleSelectorDatas.gender} />

                    <SingleSelector
                        // {...register('actionType')}
                        title='* 一个/多个患者'
                        defaultValue={selectDic.patientsNum}
                        name='patientsNum'
                        onChange={(e) => {
                            setSelectDic({
                                ...selectDic,
                                patientsNum: e.target.value
                            })
                            console.log("selectDic===", selectDic);

                        }}
                        itemDatas={SingleSelectorDatas.patientsNum} />
                    <TextField
                        {...register('patientsNum')}
                        style={{ ...{ width: "100%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                        color="secondary"
                        id={"patientsNum"}
                        label={<div style={{ fontSize: 13, float: 'left' }}>
                            {"如果是多个,说明有几个 (如果知道的话)"}
                        </div>}
                        defaultValue=""
                        placeholder=''
                    />
                </div>


                {/* ----------报告者信息：报告者的相关信息，例如上报安全信息的客户或者专业医学人士---------- */}
                <div className={styles.title2} style={{ marginBottom: 0 }}>
                    报告者信息：报告者的相关信息，例如上报安全信息的客户或者专业医学人士
                </div>
                <div className={styles.subContent} style={{ marginTop: 0 }}>
                    <TextField
                        {...register('patientsNum')}
                        style={{ ...{ width: "100%" }, ...{ marginBottom: 10, paddingRight: 10 } }}
                        color="secondary"
                        id={"patientsNum"}
                        label={<div style={{ fontSize: 13, float: 'left' }}>
                            {"报告者居住地在哪个国家"}
                        </div>}
                        defaultValue=""
                        placeholder=''
                    />
                    <div style={{fontSize:'12px', lineHeight:"12px", textAlign:'left'}}>
                        为遵守监测和报告不良事件的法律义务，GSK中国将记录报告者提供的详细信息，包括姓名、联系方式、健康信息、具体问询内容以及GSK的答复。此个人信息仅用于处理报告者的问询、投诉或不良事件报告。GSK集团子公司、为GSK提供服务的第三方以及监管机构（其中一些可能位于中国境外）可能会访问这些个人信息。报告者有权访问、更正或删除这些个人信息。
                    </div>
                    <SingleSelector
                        title='* 报告者是否同意以上内容？'
                        defaultValue={selectDic.isAgree}
                        name='isAgree'
                        onChange={(e) => {
                            setSelectDic({
                                ...selectDic,
                                isAgree: e.target.value,
                                isToCommunicate: (e.target.value == "0" ? "0":"1"),
                                reporterType: (e.target.value == "0" ? "4":"0"),
                            })
                            
                            setTfAction({
                                ...tfAction,
                                reporterType:(e.target.value == "0" ? "NA":""),
                                //报告者姓名
                                reporterName:(e.target.value == "0" ? "NA":""),
                                //报告者地址
                                reporterAddress:(e.target.value == "0" ? "NA":""),
                                //报告者电话
                                reporterPhone:(e.target.value == "0" ? "NA":""),
                                //报告者邮箱
                                reporterEmail:(e.target.value == "0" ? "NA":""),
                            })

                        }}
                        itemDatas={SingleSelectorDatas.isAgree} />
                        <SingleSelector
                        title='* 报告者是否同意个人信息用于与葛兰素史克安全团队取得联系，以进一步讨论？'
                        defaultValue={selectDic.isToCommunicate}
                        name='isToCommunicate'
                        onChange={(e) => {
                            setSelectDic({
                                ...selectDic,
                                isToCommunicate: e.target.value,

                            })
                            console.log("selectDic===", selectDic);
                            //这里需要处理下方的输入框.

                        }}
                        itemDatas={SingleSelectorDatas.isToCommunicate} />
                        <div style={{fontSize:'12px', lineHeight:"12px", textAlign:'left'}}>
                        如果报告者选择“否”，只填需写以下报告者的类型；如果报告者选择“是”，需填写报告者的类型，且请提供以下联系方式。
                        </div>
                        <SingleSelector
                        // {...register('actionType')}
                        title='* 报告者类型'
                        defaultValue={selectDic.reporterType}
                        name='reporterType'
                        onChange={(e) => {
                            setSelectDic({
                                ...selectDic,
                                reporterType: e.target.value
                            })

                        }}
                        itemDatas={SingleSelectorDatas.reporterType} />
                        {reporterInfoTFList}
                </div>

                <input  type="submit" value="确认" />
            </Form>

        </>
    );
};


interface SelectorItem {
    value: string
    label: string
}
//单选框
function SingleSelector({ title, name, itemDatas, defaultValue, onChange }: { title: string, name: string, itemDatas: SelectorItem[], defaultValue: string, onChange: any }) {

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





