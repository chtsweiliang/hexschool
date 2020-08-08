<template>
  <div>
    <h2>這裡是單一產品頁面</h2>
    <div class="container">
      <img :src="product.imageUrl" class="img-fluid" alt="" style="height: 300px">
      <h5>{{ product.title }}</h5>
      <p class="text-left">{{ product.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    // console.log(this.$route.params.id);
    // 注意這邊要使用 { id }，只使用 id 會出錯，airbnb
    const { id } = this.$route.params;
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
    this.axios.get(api).then((res) => {
      // console.log(res);
      this.product = res.data.data;
    });
  },
};
</script>
