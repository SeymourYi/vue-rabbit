<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>

  <homeProduct />
  <HomeNew title="新鲜好物"  subtitle="新鲜出炉 品质靠谱"/>
  <HomeHot  title="人气推荐"  subtitle="人气推荐 好多商品" />
</template>
