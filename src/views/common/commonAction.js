import commonRequest from "./commonRequest";
import moment from "moment";

const commonAction = {}

// 手机号验证
commonAction.validPhone = (value) => {
    if (!value) {
        this.$message.warning('请输入电话号码')
    } else {
        var reg = /^1[3|4|5|7|6|8][0-9]\d{8}$/
        var reg2 = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/
        if (reg2.test(value) || reg.test(value)) {
            return true
        }
        return false
    }
},
// 验证邮箱
commonAction.validEmail = (value) => {
    if (!value) {
        this.$message.warning('请正确填写邮箱')
    } else {
        if (value !== '') {
            var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if (reg.test(value)) {
                return true
            }
        }
        return false
    }
},
// base64解码
commonAction.base64Decode = (value) => {
    let Base64 = require('js-base64').Base64
    return Base64.decode(value)
},
// 根据字典key 获取字典value
commonAction.getDicValue = (dicKey, dicList) => {
    if (dicKey === null || dicKey === undefined || dicKey === '') {
        return ''
    }
    let key = dicKey
    for (let index = 0; index < dicList.length; index++) {
        if (key === dicList[index].value) {
            return dicList[index].label
        }
    }
},
//根据时间获取 日期（到天）
commonAction.getDay = (date) => {
    return moment(date).format("YYYY-MM-DD")
},
//根据输入值 获取百分比
commonAction.getPersent = (value) => {
    if (value === null || value==='' || value === undefined) {
        return ''
    } else {
        let persent = (value * 100).toFixed(2)
        return persent + '%'
    }
},
//根据输入值 获取保留位数
commonAction.getDouble = (value,dot) => {
    if (value === null || value==='' || value === undefined) {
        return ''
    } else {
        let doubleValue = value.toFixed(dot)
        return doubleValue
    }
}
// 获取目标日期离现在的时间
commonAction.getTimeBetweenNow = (date) => {
    if(date==undefined||date==null||date==''){
        return ''
    }
    let diff = ''
    let date2 = new Date()
    let date1 = new Date(date)

    let s2 = date2.getTime()
    let s1 = date1.getTime()
    var total = (s2 - s1)/1000

    var day = parseInt(total / (24*60*60));//计算bai整数天数
    if(day>0){
        diff = diff + day + '天'
        return diff
    }
    var afterDay = total - day*24*60*60;//取得算du出天数后剩余的秒数
    var hour = parseInt(afterDay/(60*60));//计算整数小时数
    if(hour>0){
        diff = diff + hour + '小时'
        return diff
    }
    var afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数
    var min = parseInt(afterHour/60);//计算整数分zhi
    if(min>0){
        diff = diff + min + '分钟'
        return diff
    }
    var afterMin = total - day*24*60*60 - hour*60*60 - min*60;//取得算出分后剩余的秒数
    if(afterMin>0){
        diff = diff + afterMin + '秒'
        return diff
    }
    diff = diff + '刚刚'
    return  diff
},
// 获取昨日的开始结束时间
commonAction.getDateTime = (date) => {
    return moment(date).format("YYYY-MM-DD HH:mm:ss")
},

/** 获取上一个月
* @date 格式为yyyy-mm-dd的日期，如：2014-01-25
*/
commonAction.getPreMonth = (date) => {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份  
    var month = arr[1]; //获取当前日期的月份  
    var day = arr[2]; //获取当前日期的日  
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数  
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}
 /** 获取下一个月 
    * @date 格式为yyyy-mm-dd的日期，如：2014-01-25 
    */
 commonAction.getNextMonth = (date) => {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份  
    var month = arr[1]; //获取当前日期的月份  
    var day = arr[2]; //获取当前日期的日  
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数  
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }

    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}
// 根据页面控制点 查询控制内容
commonAction.getControlContent = (projKey, controlType, controlPoint,controlAction,controlState) => {
    let params = {
        projKey: projKey,
        controlType: controlType,
        controlPoint: controlPoint,
        controlAction: controlAction,
        controlState: controlState,
        controlSource: 0,
    }
    let data = {
        params
    }
    commonRequest.findPermissionControl(data,(res) => {
        console.log(res)
        if (res.data!=undefined&&res.data!=null&& res.data.content!=undefined&&res.data.content!=null) {
            console.log(res.data.content)
            return res.data.content
        }else {
            return null
        }
    })
}


export default commonAction

