<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import Search from '@components/psi/search'

/**
 * Projects Index
 */
export default {
  page: {
    title: 'Projects',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, Search },
  data() {
    return {
    }
  },
}
</script>

<template>
  <Layout>
    <div class="row mt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-3 col-6">
                <img
                  src="@assets/images/cal.png"
                  class="mr-4 align-self-center img-fluid"
                  alt="cal"
                />
              </div>
              <div class="col-xl-10 col-lg-9">
                <div class="mt-4 mt-lg-0">
                  <h3 class="mt-0 mb-1 font-weight-bold">项目</h3>
                  <p class="text-muted mb-2">
                    项目集成Git版本管理，用户可一键式部署在线开发环境，快速运行项目。<a href="">了解更多</a>
                  </p>
                  <button
                    id="btn-new-event"
                    class="btn btn-primary mt-2"
                  >
                    <i class="uil-plus-circle"></i>
                    创建项目
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-12 -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col">
        <Search placeholder="搜索项目..." />
      </div>
      <div class="col">
      </div>
    </div>
  </Layout>
</template>
