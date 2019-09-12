const BASE_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: '',
    isVisibleCart: '',
    visibleGood: ''
  },
  mounted() {
    this.makeGETRequest(`${BASE_URL}/catalogData.json`).then((goods) => {
      this.goods = goods;
      this.filteredGoods = goods;
    }).catch(err => console.error(err));
  },
  methods: {
    makeGETRequest(url) {
      return new Promise((resolve, reject) => {
        const xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            if (xhr.status !== 200) reject(response);
            resolve(response);
          }
        };

        xhr.onerror = function (e) {
          reject(e);
        };

        xhr.open('GET', url);
        xhr.send();
      });
    },
    filterGoods(value) {
      const regexp = new RegExp(value, 'i');
      this.filteredGoods = this.goods.filter((good) => {
      return regexp.test(good.product_name);
      });
    }
  }
});