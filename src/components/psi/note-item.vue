<script>
/**
 * Note component
 */
import { authComputed } from '@state/helpers'
export default {
  components: {  },
  filters: {
    numFilter (value) {

      const k = 10
      let i = Math.floor(Math.log(value) / Math.log(k))

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

    note: {
      type: Object,
      default: () => {}
    }

  },
  data () {
    return {
      
    }
  },
  computed: {
    ...authComputed,
    username () {
      return this.note.username === this.currentUser.username ? '我' : this.note.username
    },
    noteType () {
      if (this.note.type === 'proj') {
        return '项目'
      } else if (this.note.type === 'dataset') {
        return '数据集'
      }else {
        return null
      }
    }
  }
}
</script>

<template>

  <div class="note-list-item">

    <div class="row">
      <div class="col">
        <span>{{ username }}</span>
        <span class="time-text ml-2">{{ note.updateTime | moment("from", "now") }}</span>
      </div>
      <div class="col">
        <button type="button" aria-label="Close" class="close ml-auto mb-1">×</button>
      </div>
    </div>

    <div class="overflow-text">
      {{ note.detail }}
    </div>

    <div>
      <span>
        <i class="uil uil-comment font-size-14"></i>
        {{ note.comment | numFilter }}
      </span>
      <span class=" ml-2">
        <i class="uil uil-star font-size-14"></i>
        {{ note.star | numFilter }}
      </span>
      <b-badge v-if="noteType" class="badge-soft-info ml-2"
        :class="{
          'badge-soft-success': `${ note.type }` === 'proj',
          'badge-soft-warning': `${ note.type }` === 'dataset',
        }"
      >{{ noteType }}</b-badge>
      <a class="text-muted ml-2" href="#">{{ note.title }}</a>
    </div>
    <div v-if="note.isInvalid" class="overlay"></div>
  </div> 
</template>
<style>

.note-list-item {
  position: relative;
  border: 1px solid #f6f6f7;
  box-shadow: none;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}

.detail-text {
  color: #b45f06;
}

.time-text {
  color: #5d9048;
}

.overflow-text {
  overflow:hidden;
  text-overflow:ellipsis;
  /*white-space:nowrap;*/
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
