import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartlist = ref([])
  const addcart = (goods) => {
    //
    const item = cartlist.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      item.count++
    } else {
      cartlist.value.push(goods)
    }
  }
  const delCart = (skuId) => {
    //删除购物车
    const i = cartlist.value.findIndex((item) => skuId === item.skuId)
    cartlist.value.splice(i, 1)
  }
  const AllCount = computed(() => cartlist.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4. 已选择商品价钱合计
  const AllPrice = computed(() => cartlist.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
  const singleCheck = (skuId, selected) => {
    const item = cartlist.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  const allCheck = (selected) => {
    // 把cartList中的每一项的selected都设置为当前的全选框状态
    cartlist.value.forEach(item => item.selected = selected)
  }
  const isAll = computed(() => cartlist.value.every((item) => item.selected))
  return {
    cartlist,
    addcart,
    delCart,
    AllCount,
    AllPrice,
    singleCheck,
    allCheck,
    isAll
  }
}, { persist: true })
