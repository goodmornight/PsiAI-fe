<script>

/**
 * Project component
 */
export default {
  props: {
    project: {
      type: Object,
      default: {}
    }
    // // 名称
    // title: {
    //   type: String,
    //   default: ''
    // },
    // // 图片地址
    // imgUrl: {
    //   type: String,
    //   default: ''
    // },
    // // 简介
    // desc: {
    //   type: String,
    //   default: ''
    // },
    // // 是否公开
    // isPublic: {
    //   type: Boolean,
    //   default: true
    // },
    // // 版本
    // version: {
    //   type: Number,
    //   default: 1
    // },
    // // 框架、类型
    // detail1: {
    //   type: String,
    //   default: ''
    // },
    // // py版本、任务
    // detail2: {
    //   type: String,
    //   default: ''
    // },
    // // 标签
    // tags: {
    //   type: Array,
    //   default: []
    // },
    // // 参与用户
    // users: {
    //   type: Array,
    //   default: []
    // },
    // // 最近更新时间
    // updateTime: {
    //   type: Number,
    //   default: 1608174894608
    // }
  },
  components: {  },
  data() {
    return {
      
    }
  },
  computed:{
    // formatVersion () {
    //   return "V" + this.project.version
    // }
  }
}
</script>

<template>

  <div>
    <!-- <div v-for="proj in projects" :key="proj.title"> -->
      <div class="card mb-2 shadow-none border">
        <div class="p-1 px-2">
          <div class="row align-items-center">
            <div class="col-auto">
              <img
                src="@assets/images/projects/project-1.jpg"
                class="avatar-md rounded"
                alt="file-image"
              />
            </div>
            <div class="col pl-0">
              <a href="javascript:void(0);" class="text-muted font-weight-bold"
                >{{ project.title }}</a
              >
              <i class="uil uil-globe font-size-14"></i>
              <b-badge class="badge-soft-primary ml-2">{{ "V " + project.version }}</b-badge>
              <b-badge class="badge-soft-success ml-2">{{ project.frame }}</b-badge>
              <b-badge class="badge-soft-info ml-2">{{ project.pyVer }}</b-badge>
              <!-- <b-badge variant="primary" ></b-badge> -->
              <p>
                {{ project.desc }}
                <b-badge v-for="tag in project.tags" :key="tag" variant="primary" class="ml-2">{{ tag }}</b-badge>
              </p>
            </div>
            <div class="col-auto">
              {{ project.updateTime | moment("from", "now") }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="proj-item">
        <div class="img-con">
          <b-img-lazy src="https://picsum.photos/150/150/?image=41" fluid class="rounded" alt="Fluid image"></b-img-lazy>
        </div>
        <div class="info-con">
          <div class="title-con">{{ proj.title }}</div>
          <div class="social-con"></div>
          <div class="detail-con"></div>
          <div class="contributors"></div>
        </div>
      </div> -->
    </div>
  <!-- </div> -->
  
</template>
<style>
.proj-item {
  display: flex;
  flex-direction: row;
  color: #4b4b5a;
  background-color: #fff;
  box-shadow: 0 0.05rem 0.01rem rgba(75, 75, 90, 0.075);
}
.info-con {
  display: flex;
  flex-direction: column;
}
</style>
