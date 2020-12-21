<script>
import Users from '@components/psi/contributors'
/**
 * Project component
 */
export default {
  components: { Users },
  filters: {
    numFilter (value) {

      const k = 10
      let i = Math.floor(Math.log(value) / Math.log(k))
      console.log(i)
      if(i < 3){
        return value
      }else if(i === 3){
        return (value / Math.pow(k, i)) + 'k'
      }else{
        return (value / Math.pow(k, i)).toPrecision(3) + 'w'
      }

    },
  },
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      
    }
  },
  computed:{
    users () {
      return this.project.users.length > 5 ? this.project.users.slice(0, 5) : this.project.users
    }
    // formatVersion () {
    //   return "V" + this.project.version
    // }
  }
}
</script>

<template>

  <div class="proj-card">

    <div class="row align-items-center">

      <div class="col-auto">
        <img
          src="@assets/images/projects/project-1.jpg"
          class="thumbnail"
          alt="file-image"
        />
      </div>

      <div class="col pl-0">
        <div class="d-flex flex-row text-center align-items-center">
          <a href="javascript:void(0);" class="text-muted font-weight-bold title">
            {{ project.title }}
          </a>
          <i class="uil uil-globe font-size-14 ml-2"></i>
          <b-badge class="badge-soft-primary ml-2">{{ "V " + project.version }}</b-badge>
          <b-badge class="badge-soft-success ml-2">{{ project.frame }}</b-badge>
          <b-badge class="badge-soft-info ml-2">{{ project.pyVer }}</b-badge>         
        </div>
        <div class="info-text">
          <span>
            <i class="uil uil-thumbs-up font-size-14 ml-2"></i>
            {{ project.like | numFilter }}
          </span>
          <span>
            <i class="uil uil-star font-size-14 ml-2"></i>
            {{ project.star | numFilter }}
          </span>
          <span>
            <i class="uil  uil-eye font-size-14 ml-2"></i>
            {{ project.watch | numFilter }}
          </span>
        </div>
        <div>
          <span class="overflow-text">
            {{ project.desc }}
          </span>
          <b-badge v-for="tag in project.tags" :key="tag" variant="primary" class="ml-2">{{ tag }}</b-badge>
        </div>
      </div>

      <div class="col-auto d-flex flex-column other-info" style="width: 13%">
        <p class="mb-auto update-time">{{ project.updateTime | moment("from", "now") }}</p>
        <Users :users="users"/>
      </div>

    </div>

  </div> 
</template>
<style>
.proj-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  /*height: 6rem;*/
  border: 1px solid #f6f6f7;
  box-shadow: none;
  border-radius: 0.25rem;
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
</style>
