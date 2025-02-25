import { defineStore } from "pinia";
import { getCategoryAPI } from '@/apis/layout'
import { ref } from "vue";
export const useCategoryStore = defineStore('category', () => {
  const CategoryList = ref(0)
  const getCategory = async () => {
    const res = await getCategoryAPI()
    CategoryList.value = res.result
  }

  return { CategoryList, getCategory }
})
