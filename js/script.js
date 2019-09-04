'use strict'
class GoodsItem {
  constructor(title = 'No name', price = 'No price', img = '#') {
    this.title = title;
    this.price = price;
    this.img = img;
  }
  render() {
    return `<div class="goods-item"><img src="${this.img}" alt="${this.title}"></img><h3>${this.title}</h3><p>${this.price}</p><button type="button">Добавить</button></div>`;
  }
}

class GoodsList {
  constructor(container = '.container') {
    this.container = container;
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      {
        title: 'Shirt', price: 150
      },
      {
        title: 'Socks', price: 50
      },
      {
        title: 'Jacket', price: 350
      },
      {
        title: 'Shoes', price: 250
      },
      {
        price: 350
      }
    ];
  }
  render() {
    document.querySelector(this.container).innerHTML = this.goods.reduce((acc, item) => {
      const good = new GoodsItem(item.title, item.price, item.img);
      return acc += good.render();
    }, '');
  }
  //сумма товаров
  sumPrice() {
    let sum = 0;
    this.goods.forEach(element => {
      if (element.price !== undefined) {
        sum += element.price
      }
    });
    return sum;
  }
}

class GoodsBasket {
  // windowBasket() { открытие/закрытие окна корзины }
  // renderBasket() { отрисовка содержимого корзины }
}

class GoodsItemBasket {
  // addGoods() { добавлени товара в корзину и проверка на кол-во }
  // removeGoods() { удалить товар или уменьшить кол-во }
}

const list = new GoodsList('.goods-list');
list.fetchGoods();
list.render();