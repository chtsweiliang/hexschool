<template>
  <div>
    <h2>管理後台 Products 的頁面</h2>
    <div class="container">
      <div class="text-right mt-4">
        <button type="button" class="btn btn-primary">建立新的產品</button>
        <button type="button" class="btn btn-danger">登出</button>
      </div>
      <table class="table mt-4 table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">分類</th>
            <th scope="col">產品名稱</th>
            <th scope="col">原價</th>
            <th scope="col">售價</th>
            <th scope="col">是否啟用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in products" :key="i">
            <th scope="row">{{ i+1 }}</th>
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.origin_price | thousands }}</td>
            <td>{{ item.price | thousands }}</td>
            <td>
              <span v-if="item.enabled" class="text-success">啟用</span>
              <span v-else class="text-danger">未啟用</span>
            </td>
            <td>
              <div class="btn-group btn-group-sm" role="group">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                >編輯</button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                >刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      // token: '',
    };
  },
  props: ['token'],
  created() {
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products`;
    this.axios.get(api).then((res) => {
      console.log(res.data.data); // eslint-disable-line
      this.products = res.data.data;
    });
  },
};
</script>
