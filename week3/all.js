new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1586934917210,
        unit: '箱',
        category: '荔枝',
        title: '陳家果園玉荷包禮盒',
        origin_price: 800,
        price: 600,
        description: '陳家果園玉荷包禮盒',
        content: '玉荷包禮盒5台斤裝',
        is_enabled: 1,
        imageUrl: 'https://images.unsplash.com/photo-1591600986686-bf5f872d2e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        options: {
          id: 1,
          stars: 5,
          comments: [{
            name: '小明',
            avator: 'img url...',
            comment: '漂亮阿姨的餃子最好吃了'
          }]
        },
      },
      {
        id: 1196934917910,
        unit: '箱',
        category: '芭樂',
        title: '陳家果園珍珠芭樂',
        origin_price: 600,
        price: 350,
        description: '無毒珍珠芭樂5台斤(小箱)',
        content: '無毒珍珠芭樂5台斤(小箱)',
        is_enabled: 0,
        imageUrl: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        options: {
          id: 2,
          stars: 5,
          comments: [{
            name: '小美',
            avator: 'img url...',
            comment: '漂亮小姐的餃子最好吃了'
          }]
        },
      },
    ],
    tempProduct: {
      imageUrl: [],
    },
    tempComment: {

    },
  },

  methods: {
    openModal(type, item) {
      switch (type) {
        case 'create':
          this.tempProduct = {
            imageUrl: [],
          };
          $('#productModal').modal('show');
          break;
        case 'edit':
          this.tempProduct = Object.assign({}, item);
          $('#productModal').modal('show');
          break;
        case 'delete':
          this.tempProduct = Object.assign({}, item);
          $('#delProductModal').modal('show');
          break;
        case 'comment':
          this.tempComment = Object.assign({}, item);
          $('#commetProductModal').modal('show');
          break;
        default:
          break;
      }
    },
    updateProduct() {
      let i;
      if (this.tempProduct.id) {
        this.products.forEach((item, index) => {
          if (item.id == this.tempProduct.id) {
            i = index;
          }
        });
        this.$set(this.products, i, this.tempProduct);
      } else {
        if (this.tempProduct.title) {
          const id = (new Date()).getTime();//取 unix 時間
          this.tempProduct.id = id;
          this.products.push(this.tempProduct);
        }
      }
      this.tempProduct = {};
      $('#productModal').modal('hide');
    },
    delProduct() {
      if (this.tempProduct.id) {
        this.products.forEach((item, i) => {
          if (item.id === this.tempProduct.id) {
            this.products.splice(i, 1);
            this.tempProduct = {};
          }
        });
      }
      $('#delProductModal').modal('hide');
    },
    delComment() {
      if (this.tempComment.id) {
        this.products.forEach((item, i) => {
          if (item.options.id === this.tempComment.id) {
            this.products[i].options = {};
            this.tempComment = {};
          }
        });
      }
      $('#commetProductModal').modal('hide');
    }
  },
});