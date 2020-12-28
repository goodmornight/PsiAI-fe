<script>
import Users from '@components/psi/contributors'
/**
 * Container component
 */
export default {
  components: { Users },
  props: {

    container: {
      type: Object,
      default: () => {}
    }

  },
  data() {
    return {
      
    }
  },
  computed:{
    // 使用者，最多显示 5 位
    users () {
      return this.container.users.length > 5 ? this.container.users.slice(0, 5) : this.container.users
    },

  }
}
</script>

<template>
  <div class="container-list-item">
    <div class="container-info">
      <a href="javascript:void(0);" class="text-muted font-weight-bold title">
        {{ container.title }}
      </a>
      <b-badge class="badge-soft-info ml-2">{{ container.type }}</b-badge>
      <span>{{ container.detail }}</span>
      <span>创建于 {{ container.createdTime | moment("YY/MM/DD HH:mm:ss") }}</span>
      <span>累计运行 {{ (container.updateTime - container.createdTime) | duration('humanize') }}</span>
      <span>运行中 {{ container.runningDuration | duration('humanize') }}</span>
    </div>
    <div class="container-other-info">
      <span>项目 <a href="">{{ container.project }}</a></span>
      <span>工作分支 {{ container.branch }}</span>
      <Users :users="users"/>
    </div>
  </div> 
</template>
<style>
.container-list-item {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  /*height: 6rem;*/
  border: 1px solid #f6f6f7;
  box-shadow: none;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}

.thumbnail {
  object-fit: cover;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 0.3rem;
}

.title {
  font-size: 1rem;
}

.info-text {
  font-size: 0.8rem;
}

.overflow-text {
  overflow:hidden;
  text-overflow:ellipsis;
  /*white-space:nowrap;*/
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.other-info {
  height: 5rem;
  text-align: right;
}

.update-time {
  color: green;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2;
  border-radius: 0.3rem;
}
</style>
