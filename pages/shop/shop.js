// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    showActionSheet: false,
    cartItems: [],
    isAllChecked: false,
    totalPrice: 0,
    submitDisabled: true,
    isLoading: false,
    categories: [
      { id: 0, name: '热销推荐' },
      { id: 1, name: '招牌菜' },
      { id: 2, name: '主食' },
      { id: 3, name: '凉菜' },
      { id: 4, name: '汤羹' },
      { id: 5, name: '饮品' }
    ],
    menuData: {
      0: [
        { id: 1, name: '麻辣香锅', desc: '麻辣鲜香，回味无穷', price: 68, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spicy%20chinese%20mala%20xiang%20guo%20dish%20with%20vegetables%20and%20meat&image_size=square' },
        { id: 2, name: '酸菜鱼', desc: '酸爽可口，鱼肉鲜嫩', price: 88, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=chinese%20sour%20soup%20with%20fish%20fillet&image_size=square' },
        { id: 3, name: '宫保鸡丁', desc: '经典川菜，花生酥脆', price: 48, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=kung%20pao%20chicken%20with%20peanuts%20and%20vegetables&image_size=square' }
      ],
      1: [
        { id: 4, name: '秘制红烧肉', desc: '肥而不腻，入口即化', price: 68, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=chinese%20braised%20pork%20belly%20hong%20shao%20rou&image_size=square' },
        { id: 5, name: '北京烤鸭', desc: '皮脆肉嫩，传统名吃', price: 128, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=peking%20duck%20crispy%20skin%20chinese%20cuisine&image_size=square' },
        { id: 6, name: '清蒸鲈鱼', desc: '鲜嫩爽滑，原汁原味', price: 78, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=steamed%20sea%20bass%20with%20ginger%20and%20scallion&image_size=square' }
      ],
      2: [
        { id: 7, name: '扬州炒饭', desc: '粒粒分明，鲜香可口', price: 28, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=yangzhou%20fried%20rice%20with%20egg%20and%20vegetables&image_size=square' },
        { id: 8, name: '葱油拌面', desc: '香气扑鼻，筋道爽滑', price: 18, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=scallion%20oil%20noodles%20chinese%20style&image_size=square' },
        { id: 9, name: '蛋炒饭', desc: '简单美味，家常味道', price: 22, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=egg%20fried%20rice%20chinese%20style&image_size=square' }
      ],
      3: [
        { id: 10, name: '凉拌黄瓜', desc: '清爽开胃，夏日必备', price: 12, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=chinese%20cold%20cucumber%20salad%20with%20garlic&image_size=square' },
        { id: 11, name: '夫妻肺片', desc: '麻辣鲜香，经典凉菜', price: 32, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=sichuan%20beef%20tripe%20salad%20fuqi%20feipian&image_size=square' },
        { id: 12, name: '凉拌木耳', desc: '爽脆可口，营养丰富', price: 16, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cold%20black%20fungus%20salad%20chinese%20style&image_size=square' }
      ],
      4: [
        { id: 13, name: '酸辣汤', desc: '酸辣开胃，暖身驱寒', price: 22, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=sour%20and%20spicy%20chinese%20soup&image_size=square' },
        { id: 14, name: '菌菇汤', desc: '鲜香浓郁，营养健康', price: 32, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=mushroom%20soup%20chinese%20style&image_size=square' },
        { id: 15, name: '番茄蛋汤', desc: '家常味道，老少皆宜', price: 18, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=tomato%20egg%20soup%20chinese%20style&image_size=square' }
      ],
      5: [
        { id: 16, name: '酸梅汁', desc: '酸甜可口，解腻开胃', price: 12, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=sour%20plum%20juice%20drink%20chinese%20style&image_size=square' },
        { id: 17, name: '玉米汁', desc: '香甜浓郁，营养丰富', price: 15, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=corn%20juice%20drink%20smoothie&image_size=square' },
        { id: 18, name: '王老吉', desc: '清凉降火，老字号', price: 8, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=herbal%20tea%20drink%20chinese%20style&image_size=square' }
      ]
    }
  },

  onClickLeft() {
    wx.navigateBack();
  },

  showCartActionSheet() {
    this.setData({
      showActionSheet: true
    });
  },

  onActionSheetClose() {
    this.setData({
      showActionSheet: false
    });
  },

  onSidebarChange(event) {
    const key = event.detail;
    this.setData({
      activeKey: key
    });
    wx.pageScrollTo({
      selector: `#category-${key}`,
      duration: 300
    });
  },

  onScroll(event) {
    const scrollTop = event.detail.scrollTop;
    const categoryPositions = [0, 600, 1200, 1800, 2400, 3000];
    
    for (let i = categoryPositions.length - 1; i >= 0; i--) {
      if (scrollTop >= categoryPositions[i] - 200) {
        this.setData({
          activeKey: i
        });
        break;
      }
    }
  },

  addFood(event) {
    const food = event.currentTarget.dataset.food;
    const cartItems = this.data.cartItems;
    const existingItem = cartItems.find(item => item.id === food.id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        id: food.id,
        name: food.name,
        price: food.price,
        image: food.image,
        quantity: 1,
        checked: true
      });
    }
    
    this.updateCartStatus(cartItems);
    
    wx.showToast({
      title: `已添加 ${food.name}`,
      icon: 'success'
    });
  },

  toggleCartItem(event) {
    const id = parseInt(event.currentTarget.dataset.id);
    const cartItems = [...this.data.cartItems];
    const item = cartItems.find(item => item.id === id);
    if (item) {
      item.checked = !item.checked;
    }
    this.updateCartStatus(cartItems);
  },

  toggleAllChecked() {
    const isAllChecked = this.data.isAllChecked;
    const cartItems = [...this.data.cartItems];
    cartItems.forEach(item => {
      item.checked = !isAllChecked;
    });
    this.updateCartStatus(cartItems);
  },

  updateCartStatus(cartItems) {
    const isAllChecked = cartItems.length > 0 && cartItems.every(item => item.checked);
    const selectedItems = cartItems.filter(item => item.checked);
    const totalPrice = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const submitDisabled = selectedItems.length === 0;
    
    this.setData({
      cartItems: cartItems,
      isAllChecked: isAllChecked,
      totalPrice: totalPrice * 100,
      submitDisabled: submitDisabled
    });
  },

  increaseQty(event) {
    const id = parseInt(event.currentTarget.dataset.id);
    const cartItems = this.data.cartItems;
    const item = cartItems.find(item => item.id === id);
    if (item) {
      item.quantity++;
    }
    this.updateCartStatus(cartItems);
  },

  decreaseQty(event) {
    const id = parseInt(event.currentTarget.dataset.id);
    const cartItems = this.data.cartItems;
    const itemIndex = cartItems.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      if (cartItems[itemIndex].quantity > 1) {
        cartItems[itemIndex].quantity--;
      } else {
        cartItems.splice(itemIndex, 1);
      }
    }
    this.updateCartStatus(cartItems);
  },

  onSubmitOrder() {
    this.setData({
      isLoading: true
    });
    
    setTimeout(() => {
      this.setData({
        isLoading: false,
        showActionSheet: false
      });
      wx.showToast({
        title: '订单提交成功',
        icon: 'success'
      });
    }, 1500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})