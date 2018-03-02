var timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rate: 0,
    left: 0,
    scrollLeft: 0,
    money: 0,
    ruleArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let ruleArray = []
    for (let i = 0; i <= 20; i++) {
      ruleArray.push(i)
    }

    let rate = 20;
    let left = rate / 100 * 750 - 65;
    left < 0 && (left = 0);
    left > 590 && (left = 590);
    this.setData({
      rate,
      left,
      scrollLeft: 6,
      ruleArray
    })

  },

  handleScroll(e) {
    let _this = this;
    let scrollLeft = e.detail.scrollLeft;
    scrollLeft = scrollLeft > 1200 ? 1200 : scrollLeft < 6 ? 0 : scrollLeft
    this.setData({
      money: this.getMoney(scrollLeft)
    })
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      const remainder = e.detail.scrollLeft % 6;
      if (remainder !== 0) {
        let scrollLeft;
        if (3 - remainder > 0) {
          scrollLeft = e.detail.scrollLeft - remainder;
        } else {
          scrollLeft = e.detail.scrollLeft + 6 - remainder;
        }
        _this.setData({
          scrollLeft
        })
      }
      if (e.detail.scrollLeft > 1200) {
        _this.setData({
          scrollLeft: 1200
        })
      }
      if (e.detail.scrollLeft < 6) {
        _this.setData({
          scrollLeft: 6
        })
      }
    }, 200);
  },
  getMoney(scrollLeft) {
    return Math.floor(scrollLeft / 6) * 1000
  }


})