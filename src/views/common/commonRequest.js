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
    //登录
    login(params, callback) {
        E.handleRequest(E.api().post('admin/login', params)).then(callback)
    },
    //token登录
    tokenLogin(params, callback) {
        E.handleRequest(E.api().post('admin/tokenLogin', params)).then(callback)
    },
    //注册
    registered(params, callback) {
        E.handleRequest(E.api().post('admin/registered', params)).then(callback)
    },
    //------------------权限
    //项目权限
    queryDetailByCondition(params, callback) {
        E.handleRequest(E.api().post('permission/project/queryDetailByCondition', params)).then(callback)
    },
    //根据URL获取项目信息
    queryProjectByUrl(params, callback) {
        E.handleRequest(E.api().post('permission/project/queryProjectByUrl', params)).then(callback)
    },

    //------------------信号源
    //获取权限信号源
    querySignalUsersPermit(params, callback) {
        E.handleRequest(E.api().post('signal/querySignalUsersPermit', params)).then(callback)
    },

    //------------------订单
    //获取信号源交易订单
    queryUserSignalOrder(params, callback) {
        E.handleRequest(E.api().post('orderSignal/queryUserSignalOrder', params)).then(callback)
    },

    //------------------报表
    //获取权限信号源 交易汇总信息
    querySignalOrderSumPermit(params, callback) {
        E.handleRequest(E.api().post('report/order/querySignalOrderSumPermit', params)).then(callback)
    },
    //根据日期 获取交易流水 并汇总
    getOrderSumGroupBetween(params, callback) {
        E.handleRequest(E.api().post('report/order/getOrderSumGroupBetween', params)).then(callback)
    },
    //根据条件 获取交易流水
    queryOrderFlow(params, callback) {
        E.handleRequest(E.api().post('report/order/queryOrderFlow', params)).then(callback)
    }

}

