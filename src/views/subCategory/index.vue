<script setup>
import { findCategoryFilterAPI,findSubCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
//  import {getBannerAPI} from '@/apis/home'
//
import GoodsItem from '@/views/Home/components/GoodsItem.vue'

const disabled=ref(false)
  const categoryData = ref({})
  const route = useRoute()
  const getCategoryFilter = async (id = route.params.id) => {
    // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
    const res = await findCategoryFilterAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => {
    getCategoryFilter()
  })


  const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})

const getGoodList = async () => {
  const res = await findSubCategoryAPI(reqData.value)
  console.log(res)
  goodList.value = res.result.items
}

onMounted(() => getGoodList())
const tabChange=()=>{
 reqData.value.page=1,
 getGoodList()
}
const load=async()=>{
reqData.value.page++;
   const res= await getGoodList(reqData.value);
//  goodList.value=[...goodList.value,...res.value.result.items]
goodList.value.push(...res.value.result.items);
 if (res.value.result.items.length===0) {
  disabled.value=true
 }
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
          <GoodsItem v-for="goods in goodList" :good="goods" :key="goods.id"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
