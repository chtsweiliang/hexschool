<template>
  <div>
    <h2>首頁</h2>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">關於我們</router-link>|
      <router-link to="/products">產品列表</router-link>|
      <router-link to="/cart">購物車</router-link>|
      <router-link to="/admin/products/">後台產品</router-link>
    </div>
    <router-view />
  </div>
</template>
