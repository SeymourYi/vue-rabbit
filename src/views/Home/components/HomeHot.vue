<script setup>
import HomePanel from './HomePanel.vue'
import { findHotAPI } from '@/apis/home'
import { ref,onMounted } from 'vue'
const HotList = ref([])
const getHotList = async () => {
  const res = await findHotAPI()
  HotList.value = res.result
  console.log('=======re=============================');
  console.log(HotList);
  console.log('======re==============================');
}
onMounted(() => {
  getHotList()
})



</script>

<template>
  <HomePanel>
    <template #main>
      <ul class="goods-list">
        <li v-for="item in HotList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img v-img-lazy="item.picture"    alt="" />
            <p class="name">{{ item.title }}</p>
            <p >{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
