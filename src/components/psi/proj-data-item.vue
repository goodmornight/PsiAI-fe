<script>

/**
 * Project component
 */
export default {
  props: {
    // 名称
    title: {
      type: String,
      default: ''
    },
    // 图片地址
    imgUrl: {
      type: String,
      default: ''
    },
    // 简介
    desc: {
      type: String,
      default: ''
    },
    // 是否公开
    isPublic: {
      type: Boolean,
      default: true
    },
    // 版本
    version: {
      type: Number,
      default: 1
    },
    // 框架、类型
    detail1: {
      type: String,
      default: ''
    },
    // py版本、任务
    detail2: {
      type: String,
      default: ''
    },
    // 标签
    tags: {
      type: Array,
      default: []
    },
    // 参与用户
    users: {
      type: Array,
      default: []
    },
    // 最近更新时间
    updateTime: {
      type: Number,
      default: 1608174894608
    }
  },
  components: {  },
  data() {
    return {
      
    }
  },
}
</script>

<template>
  
</template>
