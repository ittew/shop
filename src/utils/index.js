function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

export function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join("/");
  const t2 = [hour, minute, second].map(formatNumber).join(":");

  return `${t1} ${t2}`;
}

//-------------------------------------------------------------------------请求的封装

const host = "http://www.sbnws.cn/api";
const token = "mole eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MzI3OTYsIm9wZW5JZCI6IjExMTExMSIsInVzZXJOYW1lIjoic2hlbnFpYW53IiwidHJ1ZU5hbWUiOiLnlLPojJzmlociLCJzdWIiOiIzMjc5NiIsImlhdCI6MTU5MTI2NDk1NiwiZXhwIjoxNTkxODY5NzU2fQ.eNBFm9n8oVWQjInay1LfQSgwKHx90uLJreXHLTg03kwyMu0DSiQBHpCduOrow063QcRQi5_adizSXnJDppe76Q";
export { host };
/**
 * 获取url字符串
 */
export function getQuery() {
  /* 获取当前路由栈数组 */
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const options = currentPage.options
  return options
}
//请求封装
export function request(url, method, data, header = {}) {
  wx.showLoading({
    title: "加载中" //数据请求前loading
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, //仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: {
        "content-type": "application/json", // 默认值
        "auth": token //读取token
      },
      success: function(res) {
        wx.hideLoading();
        resolve(res.data);
      },
      fail: function(error) {
        wx.hideLoading();
        reject(false);
      },
      complete: function() {
        wx.hideLoading();
      }
    });
  });
}
export function get(url, data) {
  return request(url, "GET", data);
}
export function post(url, data) {
  return request(url, "POST", data);
}

//-------------------------------------------------------------------------请求的封装

//----------------------------------------------用户是否登录 未登录跳转到登录页面 -------------------------

export function toLogin() {
  const userInfo = wx.getStorageSync("userInfo");
  if (!userInfo) {
    wx.navigateTo({
      url: "/pages/login/main"
    });
  } else {
    return true;
  }
}

export function login() {
  const userInfo = wx.getStorageSync("userInfo");
  if (userInfo) {
    return userInfo;
  }
}

//----------------------------------------------用户是否登录 未登录跳转到登录页面 -------------------------

export function getStorageOpenid() {
  const openId = wx.getStorageSync("openId");
  if (openId) {
    return openId;
  } else {
    return "";
  }
}

export function getOpenid() {
  wx.login({
    success: res => {
      console.log(res, '获取code')
      if (res.code) {
        //发起网络请求
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            "appid": "wx628f9b3de0b9a734",
            "secret": "3533011bcf789453702c40aa57d20de6",
            "js_code": res.code,
            "grant_type": "authorization_code"
          },
          success: function (data) {
            console.log(data, '获取openid')
            var openid = data.data.openid;
            wx.setStorageSync("openid", openid);
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    },
    fail: (err) => {},
    complete: () => {}
  })
}
