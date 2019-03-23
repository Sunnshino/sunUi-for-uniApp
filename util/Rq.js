/**
 * 
 * Tips:
 * 
 * Default request of get
 * Default showLoading of none
 * Default request method of example:
 * Default title of loading...
 * 
 * 
 * Example(async/await)
 * 
 * const info = Rq({
 *  url:'',
 *  data:{
 *  }
 * })
 * 
 * 
 * 
 */
const Rq = async({
  url,
  method,
  data,
  show,
  title
}) => {
  if (!show == undefined || show) {
    uni.showNavigationBarLoading()
    uni.showLoading({
      title: title || '加载中...'
    });
  }
  uni.showNavigationBarLoading();
  return await new Promise((resove, reject) => {
    let _header = '';
    (method == '' || method == undefined) ? method = 'GET': 'POST';
    method == 'GET' ? _header = '"content-type": "application/x-www-form-urlencoded"' : _header = '"content-type": "application/json"';
    uni.request({
      url,
      data,
      header: {
        _header
      },
      method,
      success(res) {
        uni.hideNavigationBarLoading()
        resove(res.data)
        uni.hideLoading()
      },
      fail(res) {
        uni.hideNavigationBarLoading()
        reject('fail')
        uni.hideLoading()
        uni.showLoading({
          title: '接口出错!'
        })
      }
    })
  })
}

module.exports = {
  Rq
}