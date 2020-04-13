const DOMAIN = 'https://www.lbahcl.top/api'
//const DOMAIN = 'http://192.168.1.108:32111/api'

const Account = {
  home: DOMAIN + '/home', //首页数据
  banner: DOMAIN + '/banner' //轮播图
}

module.exports = {
  ...Account,
}