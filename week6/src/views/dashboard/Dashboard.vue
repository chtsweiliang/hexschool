<template>
  <div>
    <h2>這裡是管理頁面</h2>
    <div id="nav">
      <router-link to="/admin">後台首頁</router-link> |
      <router-link to="/admin/products">後台產品列表</router-link>｜
      <router-link to="/admin/coupons">優惠券列表</router-link> |
      <router-link to="/">回到前台首頁</router-link>
    </div>
    <router-view :token="token" v-if="checkSuccess" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      // 取得 token 的 cookies
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      // 預設帶入 token
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`;
      this.axios
        .post(api, {
          api_token: this.token,
        })
        .then((res) => {
          console.log(res); // eslint-disable-line
          this.checkSuccess = true;
        })
        .catch((err) => {
          console.log(err.response); // eslint-disable-line
          // 如果沒有token就會回到登入頁面
          this.$router.push('/login');
        });
    },
  },
};
</script>
