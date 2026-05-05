Component({
  properties: {
    currentIndex: {
      type: Number,
      value: 0
    },
    list: {
      type: Array,
      value: []
    }
  },

  methods: {
    switchTab(e) {
      const { index, path } = e.currentTarget.dataset;
      if (this.properties.currentIndex !== index) {
        wx.switchTab({
          url: '/' + path
        });
      }
    }
  }
});