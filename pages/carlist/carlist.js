//logs.js
var app = getApp();
var car_list = require("../../utils/car_list");
console.log(car_list.list);
Page({
    data: {
        list: car_list.list
    },
    upper: function(e) { //顶部
        console.log(e)
    },
    lower: function(e) { //底部
        console.log(e);

    },
    scroll: function(e) {
        console.log(e)
    },
    onLoad: function() {
        console.log('onLoad');
        var _this = this;
        
    }
});