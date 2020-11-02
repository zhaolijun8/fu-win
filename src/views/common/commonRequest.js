import E from "../../utils";

export default {
    // 查询社区控制点
    findPermissionControl(params, callback){
        E.handleRequest(E.api().post('/permission/control/findOne', params)).then(callback)
    },
    // 查询社区控制点
    findPermissionControls(params, callback){
        E.handleRequest(E.api().post('/permission/control/findPage', params)).then(callback)
    },

    //------------------登录
    login(params, callback) {
        E.handleRequest(E.api().post('admin/login', params)).then(callback)
    }
}

