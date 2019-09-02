'use strict'

const goods = [
    { title: 'Shirt', price: 150, img: '#' },
    { title: 'Socks', price: 50, img: '#' },
    { title: 'Jacket', price: 350, img: '#' },
    { title: 'Shoes', price: 250, img: '#' },
  ];
  
  const renderGoodsItem = (title, price, img) => `<div class="goods-item"><img src="${img}" alt="${title}"></img><h3>${title}</h3><p>${price}</p><button type="button">Добавить</button></div>`;
  
  const renderGoodsList = (list = goods) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    goodsList.forEach(element => document.querySelector('.goods-list').innerHTML += element);
  }
  
  document.addEventListener("DOMContentLoaded", () => renderGoodsList(goods));
  