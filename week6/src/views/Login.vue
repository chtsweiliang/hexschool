<template>
  <div class="container col-5 mt-5">
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="form-label-group mb-2">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          id="inputEmail"
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
      </div>
      <div class="form-label-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          id="inputPassword"
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <br />
      <button type="submit" class="btn btn-lg btn-primary btn-block mb-4">登入</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`;
      this.axios
        .post(api, this.user)
        .then((res) => {
          const { token } = res.data;
          const { expired } = res.data.expired;
          document.cookie = `token=${token};expires=${new Date(
            expired * 1000,
          )};`;
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          console.log(err); // eslint-disable-line
          this.$swal('', '登入失敗', 'warning');
          this.user.email = '';
          this.user.password = '';
        });
    },
  },
};
</script>
