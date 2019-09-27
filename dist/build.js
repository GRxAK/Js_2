!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e){Vue.component("notification",{props:["error","level"],computed:{errorModel(){return this.error.message?this.error.message:this.error},top(){return`${20*(this.level+1)}px`}},template:'\n    <div class="notification notification--error" :style="{top: top}">\n       {{ errorModel }}\n    </div>\n  '}),Vue.component("search",{props:["value"],computed:{searchModel:{get(){return this.value},set(t){this.$emit("input",t)}}},template:'\n    <div class="search">\n      <form class="goods-search-from" @submit.prevent>\n        <input type="text" class="goods-search" v-model.trim="searchModel" />\n      </form>\n    </div>\n  '}),Vue.component("cart-item",{props:["good"],methods:{remove(){this.$emit("remove",this.good)}},template:'\n    <div class="cart-item">\n      <p>{{ good.product_name }}</p>\n      <p>{{ good.price }}</p>\n      <button class="cart-button" @click="remove">Убрать</button>\n    </div>\n  '}),Vue.component("cart",{props:["goods"],data:()=>({isVisibleCart:!1}),methods:{toggleCartVisibility(){this.isVisibleCart=!this.isVisibleCart},removeTo(t){this.$emit("remove",t)}},template:'\n    <div class="cart">\n      <button class="cart-button" @click="toggleCartVisibility">Корзина</button>\n      <transition name="fade">\n        <div class="cart-container" v-if="isVisibleCart">\n        <cart-item v-for="good in goods" @remove="removeTo"\n        :good="good" :key="good.id_product"></cart-item>\n        </div>\n      </transition>\n    </div>\n  '}),Vue.component("goods-item",{props:["good"],methods:{add(){this.$emit("add",this.good)}},template:'\n    <div class="goods-item">\n        <h3>{{ good.product_name }}</h3>\n        <p>{{ good.price }}</p>\n        <button @click="add">Добавить в корзину</button>\n    </div>\n  '}),Vue.component("goods-list",{props:["goods"],computed:{isGoodsNotEmpty(){return this.goods.length>0}},methods:{addTo(t){this.$emit("add",t)}},template:'\n    <div class="goods-list" v-if="isGoodsNotEmpty">\n      <goods-item v-for="good in goods" @add="addTo"\n          :good="good" :key="good.id_product"></goods-item>\n    </div>\n    <div class="goods-empty" v-else>\n       Нет данных\n    </div>\n  '});new Vue({el:"#app",data:{goods:[],searchLine:"",goodsInCart:[],errors:[]},computed:{filteredGoods(){const t=new RegExp(this.searchLine,"i");return this.goods.filter(e=>t.test(e.product_name))}},mounted(){this.makeGETRequest("/catalogData").then(t=>{this.goods=t}).catch(t=>this.addError(t)),this.cartGoods()},methods:{cartGoods(){this.makeGETRequest("/catalogCart").then(t=>{this.goodsInCart=t}).catch(t=>this.addError(t))},addToCart(t){this.makePOSTRequest("/addToCart",t),this.addStatsCard("add",t),this.cartGoods()},removeToCart(t){this.makePOSTRequest("/removeToCart",t),this.addStatsCard("remove",t),this.cartGoods()},addStatsCard(t,e){let o={};"add"==t?o={action:"add",product:e,time:new Date}:"remove"==t&&(o={action:"remove",product:e,time:new Date}),console.log(o),this.makePOSTRequest("/addStatsCart",o)},addError(t){this.errors.push(t),setTimeout(()=>{const e=this.errors.indexOf(t);e>-1&&this.errors.splice(e,1)},3e3)},makePOSTRequest:(t,e)=>new Promise((o,r)=>{const n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");n.onreadystatechange=function(){if(4===n.readyState){const t=JSON.parse(n.responseText);200!==n.status&&r(t),o(t)}},n.onerror=function(t){r(t)},n.open("POST",t),n.setRequestHeader("Content-type","application/json; charset=UTF-8"),n.send(JSON.stringify(e))}),makeGETRequest:t=>new Promise((e,o)=>{const r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.onreadystatechange=function(){if(4===r.readyState)try{const t=JSON.parse(r.responseText);200!==r.status&&o(t),e(t)}catch(t){o(t)}},r.onerror=function(t){o(t)},r.open("GET",t),r.send()})}})}]);