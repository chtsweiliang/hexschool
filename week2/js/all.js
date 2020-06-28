var obj = {
  data: {
    products: [],
  },
  getData: function () {
    var uuid = '0b72368a-0360-43da-afbe-d5cd4fbf874f';
    var apiPath = 'https://course-ec-api.hexschool.io/';
    var vm = this;
    var url = `${apiPath}api/${uuid}/ec/products`;

    axios.get(url)
      .then(function (response) {
        vm.data.products = response.data.data;
        vm.render();
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  render: function () {
    const vm = this;
    var list = document.querySelector('#row-list');
    var products = vm.data.products;
    var str = '';
    products.forEach(function (item) {
      str += `
      <div class="col-4" v-for="item in res">
        <div class="card">
          <div class="card-img-top">
          <a href="#"><img src="${item.imageUrl[0]}" alt="Card image cap"/></a>  
          </div>
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${ item.content}</p>
            <p class="card-price">
              <span class="on-sale">${item.price}</span>
              <span class="original-price">${item.origin_price}</span>
            </p>
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>`;

    });
    list.innerHTML = str;
  }
}

obj.getData();

