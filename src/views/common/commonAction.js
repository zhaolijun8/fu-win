import commonRequest from "./commonRequest";

const commonAction = {}

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

