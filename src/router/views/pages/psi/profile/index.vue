<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import ProjItem from '@components/psi/proj-item'

import UserCard from './user-card'
import Activities from './activities'
import Messages from './messages'
// import Projects from './projects'
import Tasks from './tasks'
import Files from './files'
import { activities, messageData, projectData, tasks } from './data-profile'
import { projects } from './data'

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
		Activities,
		Messages,
		// Projects,
		Tasks,
		Files,
		ProjItem
	},
	data() {
		return {
			activities: activities,
			messageData: messageData,
			// projectData: projectData,
			projectData: projects,
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
								<ProjItem v-for="proj in projectData" :key="proj.title" :project="proj" />
								<!-- <Activities :activities="activities" /> -->
							</b-tab>
							<b-tab title="数据">
								<Messages :messages="messageData" />
							</b-tab>
							<b-tab title="笔记">
								<Files />
								<!-- <Projects :projects="projectData" /> -->
							</b-tab>
							<b-tab title="容器">
								<Tasks :tasks="tasks" />
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
