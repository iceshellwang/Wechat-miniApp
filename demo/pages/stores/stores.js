var id;
Page({
data: 
  {stores:[{
      img: "http://m.360buyimg.com/pop/jfs/t25645/334/232037163/264511/2b41b7c9/5b696834N4d143d9b.png",
      name: '青花椒砂锅鱼',
      aid:'123',
      price: '30',
      kind: '中国菜',
      grade: '4.8',
      sold: '3200',
      latitude: "23.13270746000000",
      longitude: "113.26529471377000"
      
    }, {
        img: "https://ali.xinshipu.cn/20110601/original/1306897384353.jpg",
      name: '麻辣诱惑',
      aid:'145',
      price: '70',
      kind: '中国菜',
      grade: '4.5',
      sold: '3500',
        latitude: "39.1333900000",
        longitude: "117.1804400000"
    }, {
        img: "https://pbs.twimg.com/profile_images/1034554469697167361/CzZ-IrSa_400x400.jpg ",
        name: 'KFC',
        aid:'169',
        price: '58',
        kind: '中国菜',
        grade: '4.2',
        sold: '6700',
        latitude:"39.1266670000", 
        longitude:"117.2012670000"


    }, {
        img: "http://www.51pptmoban.com/d/file/2013/12/12/bc3a1ee29785d7589c3357138aa47140.jpg",
      name: '麦当劳',
      aid:'178',
      price: '48',
      kind: '西式快餐',
      grade: '3.4',
      sold: '4600',
      latitude: "39.0577500000",
      longitude: "117.2310600000"
    
    }, {
        img: "https://pic2.zhimg.com/v2-fa88f870dbadb358a5ae2c189a4f7a9f_1200x500.jpg",
      name: '兰州牛肉面',
      aid:'347',
      price: '25',
      kind: '中国菜',
      grade: '3.7',
      sold: '6500',
        latitude: "39.1414910000",
        longitude: "117.1620100000"
    }, {
        img: "http://www.shaxianjm.com/uploads/allimg/170119/1-1F119130Ub02.jpg",
      name: '沙县小吃',
      aid:'413',
      price: '28',
      kind: '中国菜',
        grade: '3.4',
        sold: '1400',
        latitude: "39.1374400000",
        longitude: "117.0093800000"
    }, {
        img: "https://upload.wikimedia.org/wikipedia/zh/thumb/9/99/Pizza_Hut.svg/1200px-Pizza_Hut.svg.png",
      name: '必胜客',
      aid:'659',
      price: '128',
      kind: '西式快餐',
      grade: '3.1',
      sold: '1400',
      latitude: "39.2240900000",
      longitude: "117.1277200000"
     }]},

/**
   * 生命周期函数--监听页面加载
   */
onLoad: function () {

},
goToDetails:function(e) {
  var aid = e.currentTarget.dataset.aid;
  var name = e.currentTarget.dataset.name;
  var price = e.currentTarget.dataset.price;
  var kind = e.currentTarget.dataset.kind;
  var sold = e.currentTarget.dataset.sold;
  var grade = e.currentTarget.dataset.grade;
  var longitude  =e.currentTarget.dataset.longitude;
  var latitude = e.currentTarget.dataset.latitude;

  
  wx.navigateTo({
    url: '../details/details?aid=' + aid + "&name=" + name + "&price=" + price + "&kind=" + kind + "&sold=" + sold + "&grade=" + grade + "&longitude=" + longitude + "&latitude=" + latitude,
  })

},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function onReady() {
  // TODO: onReady
},


/**
 * 生命周期函数--监听页面显示
 */
onShow: function onShow() {
  // TODO: onShow
},


/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function onHide() {
  // TODO: onHide
},


/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function onUnload() {
  // TODO: onUnload
},


/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function onPullDownRefresh() {
  // TODO: onPullDownRefresh
}
});
//# sourceMappingURL=showShop.js.map
