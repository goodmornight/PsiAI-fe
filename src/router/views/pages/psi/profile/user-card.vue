<script>
import { authComputed } from '@state/helpers'

import { user } from './data'

export default {
	data () {
		return {
			user: user,
		}
	},
	computed: {
    ...authComputed,
    fromApp () {
    	const vm = this
    	let app = vm.user.from
    	switch (app) {
    		case 'wechat':
    			return {
    				class: 'badge-soft-success',
    				text:'微信'
    			}
    		case 'github':
    			return {
    				class: 'badge-soft-primary',
    				text:'github'
    			}
    		default:
    			return {
    				class: 'badge-soft-secondary',
    				text:'未'
    			}
    	}
    },
    profileCompeted () {
    	return this.user.profileCompeted * 100
    }
  }
}
</script>
<template>
	<div class="card">
		<div class="card-body">
			<div class="text-center mt-3">
				<img
					:src="user.avatar"
					alt
					class="avatar-lg rounded-circle"
				/>
				<h5 class="mt-2 mb-0">{{ user.username }}</h5>
				<b-badge class="mb-4"
					:class="fromApp.class"
	      >{{ fromApp.text }}认证</b-badge>

				<div v-if="profileCompeted !== 100" class="progress mb-4" style="height: 14px;">
					<div
						class="progress-bar bg-success"
						role="progressbar"
						:style="{
							width: profileCompeted + '%',
						}"
						:aria-valuenow="profileCompeted"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<span class="font-size-12 font-weight-bold">
							已完成
							<span class="font-size-11">{{ profileCompeted + '%' }}</span>
						</span>
					</div>
				</div>

				<button type="button" class="btn btn-primary btn-sm mr-1"
					>关注</button
				>
				<button type="button" class="btn btn-white btn-sm ml-1">编辑</button>
			</div>

			<div class="mt-5 pt-2 border-top">
				<h4 class="mb-3 font-size-15">简介</h4>
				<p class="text-muted mb-4">
					{{ user.detail }}
				</p>
			</div>
			<div v-if="user.email || user.blog" class="mt-3 pt-2 border-top">
				<h4 class="mb-3 font-size-15">联系方式</h4>
				<div v-if="user.email" class="row mb-2 text-muted">
					<div class="col-3 pl-3 font-weight-bold">邮箱</div>
					<div class="col-9">{{ user.email }}</div>
				</div>
				<div v-if="user.blog" class="row mb-2 text-muted">
					<div class="col-3 pl-3 font-weight-bold">博客</div>
					<div class="col-9"><a :href="user.blog">{{ user.blog }}</a></div>
				</div>
			</div>
			<div class="mt-3 pt-2 border-top">
				<h4 class="mb-3 font-size-15">技能</h4>
				<label class="badge badge-soft-primary">UI design</label>
				<label class="badge badge-soft-primary ml-1">UX</label>
				<label class="badge badge-soft-primary ml-1">Sketch</label>
				<label class="badge badge-soft-primary ml-1">Photoshop</label>
				<label class="badge badge-soft-primary ml-1">Frontend</label>
			</div>
		</div>
	</div>
</template>