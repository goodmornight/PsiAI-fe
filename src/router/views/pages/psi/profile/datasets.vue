<script>
/**
 * Projects
 */
import Search from '@components/psi/search'
import DatasetItem from '@components/psi/dataset-item'

export default {
  components: {
    DatasetItem,
    Search
  },
  props: {
    datasets: {
      type: Array,
      default: () => [],
    },
    stars: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      currentPage: 1,
      perPage: 5,
    }
  },
  computed: {
    rows () {
      return this.datasets.length
    },
    starRows () {
      return this.stars.length
    }
  }
}
</script>

<template>
  <div>
    <Search placeholder="搜索数据集..." />
    <b-tabs>
      <b-tab title="我的" active>
        <DatasetItem v-for="dataset in datasets" :key="dataset.title" :dataset="dataset" />
        <div class="row">
          <div class="col">
            <div
              class="dataTables_paginate paging_simple_numbers float-right"
            >
              <ul class="pagination pagination-rounded mb-0">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                ></b-pagination>
              </ul>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="收藏">
        <DatasetItem v-for="dataset in stars" :key="dataset.title" :dataset="dataset" />
        <div class="row">
          <div class="col">
            <div
              class="dataTables_paginate paging_simple_numbers float-right"
            >
              <ul class="pagination pagination-rounded mb-0">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="starRows"
                  :per-page="perPage"
                ></b-pagination>
              </ul>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>