<script>
import Layout from '@layouts/main'

import ContainerItem from '@components/psi/container-item'
import Search from '@components/psi/search'

import UserCard from './user-card'
import { projects, datasets, notes, containers } from './data'
import Projects from './projects'
import Datasets from './datasets'
import Notes from './notes'

/**
 * Profile component
 */
export default {
	components: {
		Layout,
		UserCard,
		ContainerItem,
		Search,
		Projects,
		Datasets,
		Notes
	},
	data() {
		return {
			projectData: projects,
			datasetData: datasets,
			noteData: notes,
			containerData: containers,
			title: 'Profile',
		}
	},
}
</script>

<template>
	<Layout>
		<div class="row mt-4">
			<div class="col-lg-3">
				<UserCard />
			</div>

			<div class="col-lg-9">
				<div class="card">
					<div class="card-body">
						<b-tabs class="navtab-bg" pills justified>

							<b-tab title="项目" active>
								<Projects :projects="projectData" :stars="projectData" />
							</b-tab>

							<b-tab title="数据">
								<Datasets :datasets="datasetData" :stars="datasetData" />
							</b-tab>

							<b-tab title="笔记">
								<Notes :notes="noteData" :stars="noteData" />
							</b-tab>

							<b-tab title="容器">

								<Search placeholder="搜索容器..." />

                <b-tabs>
									<b-tab title="我的" active>
										<ContainerItem v-for="container in containerData" :key="container.title" :container="container" />
									</b-tab>
									<b-tab title="与我共享">
										<ContainerItem v-for="container in containerData" :key="container.title" :container="container" />
									</b-tab>
								</b-tabs>

							</b-tab>

						</b-tabs>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<style  lang="scss">
.navtab-bg li > a {
	background-color: transparent;
}
</style>