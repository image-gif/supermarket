// module.exports = {
//   plugins: {
//     autoprefixer: {},
//     "postcss-px-to-viewport": {
//       viewportWidth: 375, //视图的宽度，对应设计稿的宽度
//       viewportHeight: 667, //视图的高度，对应的是我们设计稿的高度
//       unitPrecision: 5, //指定'px'转换为视图单位值得小数位数
//       viewportUnit: 'vw', //指定需要转换成的视窗单位，这里使用vw
//       selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], //指定不需要转换的类(样式的类名)
//       minPixelValue: 1, //小于或等于'1px' 不转换为视窗单位
//       mediaQuery: false, //允许在媒体查询中转换 'px'
//       exclude: [/TabBar/, /CartBon/], //不进行单位转换的文件 （数据中内容为正则表达式，其中，exclude 中存放的元素必须为正则表达式）
//       landscape: false, //是否添加根据landscapeWidth生成的媒体查询条件 @media ()
//       landscapeUnit: 'vw', //横屏是使用的视窗单位
//       langscapeWidth: 1134, //横屏时使用的视窗宽度b
//     }
//   }
// }