
import { Popconfirm, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';



export interface DataType {
    ch_type: string;
    name: string;
    content: string;
    created_at: string;
    isAe: string;
    key:number
  }

export const columns:ColumnsType<DataType> = [
    {
        title: '渠道',
        dataIndex: 'ch_type',
        key: 'ch_type',
        width:70
    },
    {
        title: '应用',
        dataIndex: 'name',
        key: 'name',
        width:70,
        align:'center'
        
        
    },
    {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        align:'center'
    },
    {
        title: '日期',
        dataIndex: 'created_at',
        key: 'created_at',
        width:200,
        align:'center'
    },
    {
        title: 'AI',
        dataIndex: 'isAe',
        key: 'isAe',
        width:70,
        align:'center'
    },
    {
        title: '关于AE?',
        dataIndex: 'isAe',
        key: 'isAe',
        width:80,
        align:'center',
     

    },

];







//需要进行二次改造
const dataSource = [
    {
        "id": 187,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "为什么吃了芬必得，我的血压升高了",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-11T10:48:00.259464+08:00",
        "identify_by": null
    },
    {
        "id": 184,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "肚子好痛，刚刚服用了你们的药就出现这情况",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-11T10:39:04.960896+08:00",
        "identify_by": null
    },
    {
        "id": 183,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "肚子好痛，刚刚服用了你们的药",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-11T10:38:33.636433+08:00",
        "identify_by": null
    },
    {
        "id": 182,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "小朋友不小心注射了安在时成人剂型，有影响吗",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-11T10:37:20.562383+08:00",
        "identify_by": null
    },
    {
        "id": 181,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "这牙膏用了之后，没有缓解",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-11T10:35:39.300272+08:00",
        "identify_by": null
    },
    {
        "id": 178,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "这个药不小心被家里小宝宝误服了，怎么办，有影响吗",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-11T10:32:51.588894+08:00",
        "identify_by": null
    },
    {
        "id": 176,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "昨天不小心多吃了两粒药，有影响吗",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-11T10:29:18.503430+08:00",
        "identify_by": null
    },
    {
        "id": 174,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "这药吃起来怎么味道怪怪的",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T21:13:33.993480+08:00",
        "identify_by": null
    },
    {
        "id": 173,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "用药后头疼",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T17:50:51.138315+08:00",
        "identify_by": null
    },
    {
        "id": 172,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "[ćľčŻ]ćĺć¨čä˝żç¨äşxxčŻđ ďźäťĺ¤Šč§ĺžčä¸čćî",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T17:14:04.332601+08:00",
        "identify_by": null
    },
    {
        "id": 171,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "吃过药后，头有点晕",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T17:04:38.091444+08:00",
        "identify_by": null
    },
    {
        "id": 170,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "今天吃了饭后，肚子疼",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T15:39:41.989932+08:00",
        "identify_by": null
    },
    {
        "id": 169,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "判断我说的话是不是AE",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T14:28:47.990953+08:00",
        "identify_by": null
    },
    {
        "id": 168,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "我肚子疼，怎么联系医生",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T14:27:26.075141+08:00",
        "identify_by": null
    },
    {
        "id": 167,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "用药后身体不舒服",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T14:19:52.806450+08:00",
        "identify_by": null
    },
    {
        "id": 166,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "最近吃完药睡眠变差了",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T14:18:27.763090+08:00",
        "identify_by": null
    },
    {
        "id": 165,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "天空没有留下翅膀的痕迹而我已经飞过/::D",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T14:17:00.882931+08:00",
        "identify_by": null
    },
    {
        "id": 164,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "油炸食品吃多了",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T14:16:29.153487+08:00",
        "identify_by": null
    },
    {
        "id": 163,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "我肚子疼",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T14:16:12.687242+08:00",
        "identify_by": null
    },
    {
        "id": 162,
        "app": {
            "id": 12,
            "name": "压力测试号",
            "sub_tag": "公众号",
            "ch_type": "01",
            "note": "年鹏程测试账号"
        },
        "ae_submit_content": null,
        "content": "[测试] 去哪里找医生",
        "result": "9",
        "note": "",
        "identify_at": null,
        "ai_score": "",
        "created_at": "2020-09-10T14:15:54.509878+08:00",
        "identify_by": null
    }
];

export function getDataSource() {

    let  tempArray:DataType[] = [];
    dataSource.forEach((value) => {
       let newData:DataType = {
           ch_type: "微信",
           name: value.app.name,
           content: value.content,
           created_at: formatDate(new Date(value.created_at)),
           isAe: "AE",
           key:value.id,
           
       };
       tempArray.push(newData);
   })
   return tempArray;
}

export const formatDate = (date: Date, format = 'yyyy-MM-dd HH:mm:ss'): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const formatMap: { [key: string]: any } = {
      yyyy: year.toString(),
      MM: month.toString().padStart(2, '0'),
      dd: day.toString().padStart(2, '0'),
      HH: hour.toString().padStart(2, '0'),
      mm: minute.toString().padStart(2, '0'),
      ss: second.toString().padStart(2, '0')
    }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => formatMap[match])
  }
  