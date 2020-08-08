<template>
  <div>
    <h2>這裡是產品頁</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">產品名稱</th>
          <th scope="col">產品價格</th>
          <th scope="col">產品連結</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in products" :key="item.id">
          <td scope="row">{{ i + 1 }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.price | thousands }}</td>
          <td>
            <!-- 使用屬性 -->
            <!-- <router-link :to="`/product/${item.id}`">連結</router-link> -->
            <!-- 使用方法 -->
            <button type="button" class="btn btn-primary" @click="goInfo(item)">連結</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    goInfo(item) {
      // console.log(this.$router);
      this.$router.push(`product/${item.id}`);
    },
  },
  created() {
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`;
    this.axios.get(api).then((res) => {
      // console.log(res.data.data); // eslint-disable-line
      this.products = res.data.data;
    });
  },
};
</script>
