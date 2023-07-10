import styles from './ReportForm.module.css'
//表单处理
import { useForm, SubmitHandler } from "react-hook-form"
import EventIcon from '@material-ui/icons/Event';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, TextField, InputLabel, Input, IconButton, InputAdornment } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Form } from 'antd';

import React, { useState } from 'react';


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


const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


interface TextFieldInfo {
    id: string;
    label: string;
    defaultValue: string;
    width: string;
}


const FormDisabledDemo: React.FC = () => {
    const [actionType, setActionType] = useState("1");
    
    //自定义输入框需要记录值
    const [values, setValues] = React.useState({
        //安全信息接收日期
        infoGetDate: '2022/09/08',
        //有效日期
        validDate: '',
        //疾病类型
        diseaseType: '',
        //使用剂量
        DOSAGER: '',
        //批号
        lotNumber: ''
    });
    //自定义输入框事件处理
    const [tfAction, setTfAction] = React.useState({
        //是否展示安全信息接收日期选择日历
        isShowCalendar1:false,
        //是否展示有效日期选择日历
        isShowValidDateCalendar:false,
        //有效日期不详?
        validDateUnknown:false,
        //疾病类型不详?
        diseaseTypeUnknown:false,
        //使用剂量不详?
        DOSAGERUnknown:false,
        //批号不详?
        lotNumberUnknown:false

    })

//机构项目信息
//使用for循环创建输入组件
    const projectInfo: TextFieldInfo[] = [
        {
            id: "1",
            label: "* 该机构是什么时候接收到安全性信息的（年/月/日）？",
            defaultValue: "2020/9/11",
            width: "57%"
        },
        {
            id: "2",

            width: "33%",
            label: "* 项目名称/机构编号",
            defaultValue: "压力测试号",
        },
        {
            id: "3",
            width: "30%",
            label: "* 报告者识别号",
            defaultValue: "yuanqiao",
        },
        {
            id: "4",
            width: "30%",
            label: "* 机构名称和地址",
            defaultValue: "NA",
        },
        {
            id: "5",
            width: "30%",
            label: "* 项目编号/活动识别号",
            defaultValue: "NA",
        },
        {
            id: "6",
            width: "30%",
            label: "* WISE编码（针对市场研究项目）",
            defaultValue: "NA",
        },
        {
            id: "7",
            width: "30%",
            label: "* 机构电话",
            defaultValue: "NA",
        },
        {
            id: "8",
            width: "30%",
            label: "* ChimAERa编码（针对患者支持项目）",
            defaultValue: "NA",
        },
        {
            id: "9",
            width: "30%",
            label: "* 机构电邮",
            defaultValue: "NA",
        },
        {
            id: "10",
            width: "30%",
            label: "* 机构联系人姓名",
            defaultValue: "NA",
        },
        {
            id: "11",
            width: "30%",
            label: "* 机构联系人签名和日期",
            defaultValue: "NA",
        },


    ];

    const projectTFs = projectInfo.map((value) => {
        if (value.id === "1") {
            return <TextField
            onClick={()=>{
                console.log("----你点击了输入框");
            }}
            
            required
            color="secondary"
            id={value.id}
            label={value.label}
            type="date"
            defaultValue="2022-05-24"
            style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        } else {
            return (
                <TextField
                    required
                    style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                    color="secondary"
                    id={value.id}
                    label={<div style={{ fontSize: 13, float: 'left' }}>{value.label}</div>}
                    defaultValue={value.defaultValue}
                />
            )
        }
    })

    //药物和安全性信息
    const medicineInfos: TextFieldInfo[] = [
        {
            id: "12",
            width: "45%",
            label: "* 事件编号（系统内部编号）",
            defaultValue: "",
        },
        {
            id: "13",
            width: "45%",
            label: "* 安全性信息是关于哪种葛兰素史克产品？",
            defaultValue: "",
        },
        {
            id: "14",
            width: "45%",
            label: "* 有效日期",
            defaultValue: "",
        },
        {
            id: "15",
            width: "45%",
            label: "* 该产品用于什么适应症（疾病）？",
            defaultValue: "",
        },
        {
            id: "16",
            width: "45%",
            label: "* 使用剂量（文字描述）",
            defaultValue: "",
        },
        {
            id: "17",
            width: "45%",
            label: "* 批号",
            defaultValue: "",
        },

    ]
    const medicineTFs = medicineInfos.map((value) => {
        //
        //有效日期
        if (value.id === "14"){
            return <TextField
            required
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
        }

        return (
            <TextField
                required
                style={{ ...{ width: value.width }, ...{ marginBottom: 10, paddingRight: 10 } }}
                color="secondary"
                id={value.id}
                onChange={}
                label={<div style={{ fontSize: 13, float: 'left' }}>{value.label}</div>}
                defaultValue={value.defaultValue}
            />
        )

    })

    return (
        <>
            <Form >
                <div className={styles.title1}>GSK 不良事件报告表</div>
                <div className={styles.title2}>机构/项目信息</div>
                <FormControl className={styles.formControl} component="fieldset">
                    <div className={styles.actionTypeBox}>
                        <RadioGroup row aria-label="actionType" name="actionType" defaultValue={"1"}>
                            <FormLabel component="legend" style={{ color: '#666',fontSize: 14,marginBottom:0, marginRight: 20, borderBottom:"0", width:'auto', height:'40px', lineHeight:'40px'}}>*活动类型</FormLabel>
                            <FormControlLabel labelPlacement="end" value="1" style={{height:40}} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>市场研究</div>} />
                            <FormControlLabel labelPlacement="end" value="2" style={{height:40}} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>患者支持项目</div>} />
                            <FormControlLabel labelPlacement="end" value="3" style={{height:40}} control={<Radio />} label={<div style={{ color: '#666', fontSize: 14 }}>数字媒体</div>} />
                        </RadioGroup>
                    </div>
                </FormControl>

                <div className={styles.subContent}>
                    {projectTFs}
                </div>

                <div className={styles.title2} style={{ marginBottom: 0 }}>药物和安全性信息</div>
                <div className={styles.subContent} style={{ marginTop: 0 }}>
                    {medicineTFs}
                </div>
            </Form>

        </>
    );
};


const currentStyle = {
    tfStyle: { width: "53%", marginBottom: 10, paddingRight: 10 }
}


