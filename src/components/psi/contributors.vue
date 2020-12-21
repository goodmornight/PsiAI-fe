<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="avatar-group">
    <img
      v-for="user in users"
      :key="user.userId"
      :src="user.imgUrl"
      class="avatar"
      alt="file-image"
    />
  </div>
</template>
<style>
.avatar-group {
  display: inline-block;
}
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: -0.5rem;
  box-shadow: 0 0.05rem 0.01rem rgba(75, 75, 90, 0.075);
}
</style>
