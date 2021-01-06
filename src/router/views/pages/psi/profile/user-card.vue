<script>
import { authComputed } from '@state/helpers'

import { user } from './data'

export default {
	data () {
		return {
			user: user,
      isEdit: false,
      isFollow: false,
      detail: user.detail
		}
	},
	computed: {
    ...authComputed,
    isSelf () {
      return this.currentUser.username === this.user.username
    },
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
  },
  methods: {
    editInfo () {
      this.isEdit = true
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
				<h5 class="mt-2 mb-0">{{ user.nickname }}</h5>
        <h5 class="text-muted font-weight-normal mt-0 mb-2">
          ({{ user.username }})
        </h5>
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
        <div v-if="isSelf">
          <button v-if="!isEdit" type="button" class="btn btn-white btn-sm" :disable="isEdit" @click="editInfo">
            编辑
          </button>
        </div>
        <div v-else>
          <button v-if="isFollow" type="button" class="btn btn-white btn-sm">取消关注</button>
          <button v-else type="button" class="btn btn-primary btn-sm">关注</button>
        </div>
			</div>

			<div class="mt-5 pt-2 border-top">
				<h4 class="mb-3 font-size-15">简介</h4>

        <!-- <textarea placeholder="请输入个人简介（不超过150字）"></textarea> -->
        <div v-if="isEdit" class="custom-textarea">
          <b-form-textarea
            v-model="detail"
            rows="4"
            maxlength="150"
            no-resize
            class="pb-4"
          ></b-form-textarea>
          <span class="custom-textarea-tip-text d-none d-xl-block">{{ detail.length + '/150'}}</span>
        </div>
        
				<p v-else class="text-muted mb-4">
					{{ user.detail || (isSelf ? '你' : '这个人') + '的简介空空如也...' }}
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
<style>
.custom-textarea {
  position: relative;
}
.custom-textarea-tip-text {
  position:absolute;
  bottom: 0.5rem;
  right: 1rem;
  color: #6c757d;
  /*float: right;*/
}
</style>