Vue.component('loading', VueLoading);

new Vue({
  el: '#app',
  data: {
    api: 'https://course-ec-api.hexschool.io/api/',
    uuid: '0b72368a-0360-43da-afbe-d5cd4fbf874f',
    products: [],
    quantity: 0,
    errorMsg: '',
    isLoading: false,
  },
  created() {
    this.getProducts();
    this.getQuantity();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${this.api}${this.uuid}/ec/products?page=${page}`;
      axios.get(url)
        .then(res => {
          this.products = res.data.data;
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
        })
    },
    addCart(id) {
      this.isLoading = true;
      const url = `${this.api}${this.uuid}/ec/shopping`;
      const cart = {
        product: id,
        quantity: '1'
      };
      axios.post(url, cart)
        .then(res => {
          this.isLoading = false;
          $(this.$refs.cartModal).modal('show');

          setTimeout(() => {
            $(this.$refs.cartModal).modal('hide');
            this.getQuantity();
          }, 1000);
        })
        .catch(error => {
          this.errorMsg = error.response.data.errors[0];
          this.isLoading = false;
          $(this.$refs.errorModal).modal('show');

          setTimeout(() => {
            $(this.$refs.errorModal).modal('hide');
          }, 1000);
        })
    },
    getQuantity() {
      const url = `${this.api}${this.uuid}/ec/shopping`;
      axios.get(url)
        .then(res => {
          const vm = this;
          vm.quantity = 0;
          let totalNum = 0;
          if (res.data.data.length) {
            res.data.data.forEach(function (item) {
              totalNum = totalNum + item.quantity;
            });
            vm.quantity = totalNum;
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

})