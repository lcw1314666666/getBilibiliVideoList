const axios = require('axios');

//外站接口
const api = 'https://api.bilibili.com/x/space/arc/search?mid=432044872';


//axios通过提供对应HTTP请求方法，实现GET/POST/PUT 等对应的请求发送
// 这里调用对/products接口的GET方法，获取产品
axios.get(api)
    .then(function (response) {
        //这里获得整个请求响应对象
        console.log(response.data.data.list.vlist);
        //获取商品数据只需要调用:  response.data
    })
    .catch(function (error) {
        console.log('error');
    })
    .then(function () {
    });
