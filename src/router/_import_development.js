module.exports = file => require('@/views/' + file + '.vue').default // vue-loader at least v13.0.0+
// require 用来加载代码，而 exports 和 module.exports 则用来导出代码
// module.exports = file1 => require('@/viewsPublicity/' + file1 + '.vue').default
