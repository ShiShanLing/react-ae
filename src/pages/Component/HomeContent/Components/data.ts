
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
export interface TextFieldInfo {
    id: "actionType" | "infoReceiveDate" | "orgName" | "reporterNo" |
    "orgAddress" | "itemNumber" | "WISECode" | "orgTel" | "ChimAERa" | 
    "orgEmail" | "orgLtdContact" | "orgSignatureDate" | "eventID" | 
    "eventProductName" | "validDate" | "productSymptom" | "useDose" | 
    "lotNumber" | "option1" | "option2" | "securityInfoDes" |  "patientDateBirth" | 
    "patientName" | "othersInfo" | "multiplePatientDes" | "reporterNation" | 
    "reporterType" | "reporterName" | "reporterAddress" | "reporterPhone" | 
    "reporterEmail" | "patientsNum"
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
    true = "是",
    false = "否",
    unknown = "不详"
}
export interface IFormInput {
    //机构项目信息的表单
    actionType: { value: string }
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
    patientsNum:string
    

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
    patientDateBirth: string
    patientName:string
    othersInfo: string
    multiplePatientDes: string
    //发布者信息
    reporterNation: string
    reporterType: string
    reporterName: string
    reporterAddress: string
    reporterPhone: string
    reporterEmail: string
    //患者信息
}
//机构项目信息
//使用for循环创建输入组件
export const projectInfoList: TextFieldInfo[] = [
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
export const medicineInfoList: TextFieldInfo[] = [
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
//患者信息
export const patientInfoList : TextFieldInfo[] = [
    {
        id: "patientDateBirth",
        width: "30%",
        label: "* 年龄/出生年份",
        defaultValue: "",
    },
    {
        id: "patientName",
        width: "30%",
        label: "* 姓名首字母",
        defaultValue: "",
    },
    {
        id: "othersInfo",
        width: "30%",
        label: "* 其他 (患者编号等)",
        defaultValue: "",
    },

]
//报告者信息
export const reporterInfoList : TextFieldInfo[] = [
    {
        id: "reporterType",
        width: "100%",
        label: "其他 (详细说明)",
        defaultValue: "",
    },
    {
        id: "reporterName",
        width: "23%",
        label: "* 报告者姓名",
        defaultValue: "",
    },
    {
        id: "reporterAddress",
        width: "23%",
        label: "* 报告者地址",
        defaultValue: "", 
    },
    {
        id: "reporterPhone",
        width: "23%",
        label: "* 报告者电话",
        defaultValue: "", 
    },
    {
        id: "reporterEmail",
        width: "23%",
        label: "* 报告者邮箱",
        defaultValue: "", 
    }
]



//单选项数据
export const SingleSelectorDatas = {
    //活动类型
    actionType: [{ value: "0", label: "市场研究" }, { value: "1", label: "患者支持项目" }, { value: "2", label: "数字媒体" }],
    //* 报告者是否认为事件可能与产品的使用有关？
    isAE: [{ value: "true", label: "是" }, { value: "false", label: "否" }, { value: "unknown", label: "不详" }],
    //* 使用该产品时患者是否处于妊娠期？
    isFestation: [{ value: "true", label: "是" }, { value: "false", label: "否" }, { value: "unknown", label: "不详" }],
    //* 性别
    gender: [{ value: "1", label: "男" }, { value: "0", label: "女" }, { value: "unknown", label: "不详" }],
    //* 一个/多个患者
    patientsNum: [{ value: "0", label: "一个" }, { value: "1", label: "多个" }],
    //* 报告者是否同意以上内容？
    isAgree: [{ value: "1", label: "是（请回答以下问题）" }, { value: "0", label: "否（无需回答以下问题）" }],
    //* 报告者是否同意个人信息用于与葛兰素史克安全团队取得联系，以进一步讨论？
    isToCommunicate: [{ value: "1", label: "是" }, { value: "0", label: "否" }],
    //* 报告者类型 
    reporterType: [{ value: "0", label: "客户" }, { value: "1", label: "医生" }, { value: "2", label: "护士" }, { value: "3", label: "药剂师" }, { value: "4", label: "其他（详细说明）" }],
}