<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import ProjItem from '@components/psi/proj-item'
import DatasetItem from '@components/psi/dataset-item'
import ContainerItem from '@components/psi/container-item'

import UserCard from './user-card'
// import Activities from './activities'
// import Messages from './messages'
// import Projects from './projects'
import Tasks from './tasks'
import Files from './files'
import { activities, messageData, projectData, tasks } from './data-profile'
import { projects, datasets, containers } from './data'

/**
 * Profile component
 */
export default {
	page: {
		title: 'Profile',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout,
		UserCard,
		// Activities,
		// Messages,
		// Projects,
		Tasks,
		Files,
		ProjItem,
		DatasetItem,
		ContainerItem
	},
	data() {
		return {
			activities: activities,
			messageData: messageData,
			// projectData: projectData,
			projectData: projects,
			datasetData: datasets,
			containerData: containers,
			tasks: tasks,
			title: 'Profile',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Pages',
					href: '/',
				},
				{
					text: 'Profile',
					active: true,
				},
			],
		}
	},
}
</script>

<template>
	<Layout>
		<!-- <PageHeader :title="title" :items="items" /> -->
		<div class="row mt-4">
			<div class="col-lg-3">
				<UserCard />
			</div>

			<div class="col-lg-9">
				<div class="card">
					<div class="card-body">
						<b-tabs class="navtab-bg" pills justified>
							<b-tab title="项目" active>
								<!-- <div v-if="projectData"> -->
									<ProjItem v-for="proj in projectData" :key="proj.title" :project="proj" />
								<!-- </div> -->
								
								<!-- <Activities :activities="activities" /> -->
							</b-tab>
							<b-tab title="数据">
								<DatasetItem v-for="dataset in datasetData" :key="dataset.title" :dataset="dataset" />
								<!-- <Messages :messages="messageData" /> -->
							</b-tab>
							<b-tab title="笔记">
								<Files />
								<!-- <Projects :projects="projectData" /> -->
							</b-tab>
							<b-tab title="容器">
								<!-- <Tasks :tasks="tasks" /> -->
								<ContainerItem v-for="container in containerData" :key="container.title" :container="container" />
							</b-tab>
							<!-- <b-tab title="Files">
								<Files />
							</b-tab> -->
						</b-tabs>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
