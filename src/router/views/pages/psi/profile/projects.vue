<script>
/**
 * Projects
 */
import Search from '@components/psi/search'
import ProjItem from '@components/psi/proj-item'

export default {
	components: {
		ProjItem,
		Search
	},
	props: {
		projects: {
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
			return this.projects.length
		},
		starRows () {
			return this.stars.length
		}
	}
}
</script>

<template>
	<div>
		<Search placeholder="搜索项目..." />
    <b-tabs>
			<b-tab title="我的" active>
				<ProjItem v-for="proj in projects" :key="proj.title" :project="proj" />
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
				<ProjItem v-for="proj in stars" :key="proj.title" :project="proj" />
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