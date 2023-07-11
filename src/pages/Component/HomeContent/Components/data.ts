

export interface TextFieldInfo {
    id: "actionType"|"infoReceiveDate"|"orgName"|"reporterNo"|
    "orgAddress"|"itemNumber"|"WISECode"|"orgTel"|"ChimAERa"|"orgEmail"|
    "orgLtdContact"|"orgSignatureDate"|"eventID"|"eventProductName"|"validDate"|
    "productSymptom"|"useDose"|"lotNumber"|"option1"|"option2"|"securityInfoDes"
    label: string;
    defaultValue: string;
    width: string;
}

export enum ActionTypeEnum {
    study = "市场研究",
    support = "患者支持项目",
    digitalMedia = "数字媒体",
}

export enum OtherOptionEnum {
    T = "是",
    F = "否",
    other = "不详"
}
export interface IFormInput {
    //机构项目信息的表单
    actionType: ActionTypeEnum
    infoReceiveDate: string
    orgName: string
    reporterNo: string
    orgAddress: string
    itemNumber: string
    WISECode: string
    orgTel: string
    ChimAERa: string
    orgEmail: string
    orgLtdContact: string
    orgSignatureDate: string

    //药物和安全性信息的表单
    eventID: string
    eventProductName: string
    validDate: string
    productSymptom: string//产品适应的症状
    useDose: string//使用剂量
    lotNumber: string//批号
    option1: OtherOptionEnum
    option2: OtherOptionEnum
    securityInfoDes: string
    //患者信息
}


//机构项目信息
//使用for循环创建输入组件
export const projectInfoList:TextFieldInfo[] = [
    {
        id: "infoReceiveDate",
        label: "* 该机构是什么时候接收到安全性信息的（年/月/日）？",
        defaultValue: "2020/9/11",
        width: "57%"
    },
    {
        id: "orgName",
        width: "33%",
        label: "* 项目名称/机构编号",
        defaultValue: "压力测试号",
    },
    {
        id: "reporterNo",
        width: "30%",
        label: "* 报告者识别号",
        defaultValue: "yuanqiao",
    },
    {
        id: "orgAddress",
        width: "30%",
        label: "* 机构名称和地址",
        defaultValue: "NA",
    },
    {
        id: "itemNumber",
        width: "30%",
        label: "* 项目编号/活动识别号",
        defaultValue: "NA",
    },
    {
        id: "WISECode",
        width: "30%",
        label: "* WISE编码（针对市场研究项目）",
        defaultValue: "NA",
    },
    {
        id: "orgTel",
        width: "30%",
        label: "* 机构电话",
        defaultValue: "NA",
    },
    {
        id: "ChimAERa",
        width: "30%",
        label: "* ChimAERa编码（针对患者支持项目）",
        defaultValue: "NA",
    },
    {
        id: "orgEmail",
        width: "30%",
        label: "* 机构电邮",
        defaultValue: "NA",
    },
    {
        id: "orgLtdContact",
        width: "30%",
        label: "* 机构联系人姓名",
        defaultValue: "NA",
    },
    {
        id: "orgSignatureDate",
        width: "30%",
        label: "* 机构联系人签名和日期",
        defaultValue: "NA",
    },



]

//药物和安全性信息

export const medicineInfoList = [
    {
        id: "eventID",
        width: "45%",
        label: "* 事件编号（系统内部编号）",
        defaultValue: "",
    },
    {
        id: "eventProductName",
        width: "45%",
        label: "* 安全性信息是关于哪种葛兰素史克产品？",
        defaultValue: "",
    },
    {
        id: "validDate",
        width: "45%",
        label: "* 有效日期",
        defaultValue: "",
    },
    {
        id: "productSymptom",
        width: "45%",
        label: "* 该产品用于什么适应症（疾病）？",
        defaultValue: "",
    },
    {
        id: "useDose",
        width: "45%",
        label: "* 使用剂量（文字描述）",
        defaultValue: "",
    },
    {
        id: "lotNumber",
        width: "45%",
        label: "* 批号",
        defaultValue: "",
    },
]
