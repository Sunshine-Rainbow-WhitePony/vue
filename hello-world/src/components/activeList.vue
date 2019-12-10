<template>
	<div id="ActiveShow">
		<header>
			<div class="head-signal"></div>
			<div class="head-con">
				<a href="javascript:history.back(-1)" class="head-return">
					<img src="../images/back_btn.png" alt />
				</a>
				<span class="head-title">活动列表</span>
				<a href="javascript:void(0);" class="head-right">
					<span>我的活动</span>
				</a>
			</div>
		</header>
		<div class="filter-popup" v-show="filterShow">
			<div class="window">
				<p class="p-title">筛选条件</p>
				<div class="item">
					<p class="item-title">活动状态</p>
					<ul>
						<li filter="tab=2">待开始</li>
						<li filter="tab=1">进行中</li>
						<li filter="tab=3">已结束</li>
					</ul>
				</div>
				<div class="item">
					<p class="item-title">活动进行时间</p>
					<ul>
						<li filter="runType=1">今天</li>
						<li filter="runType=2">本周</li>
						<li filter="runType=3">本月</li>
					</ul>
				</div>
				<div class="item">
					<p class="item-title">活动类型</p>
					<ul id="tagList"></ul>
				</div>
				<div class="item">
					<p class="item-title">活动形式</p>
					<ul>
						<li filter="adcode=0">线上</li>
						<li filter="adcode=1">线下</li>
					</ul>
				</div>
				<div class="btns">
					<div class="btn btn-reset">重置</div>
					<div class="btn btn-filter" @click="filterShow = false">筛选</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="search-area">
				<div class="search-inp">
					<img src="../images/icon-search.png" />
					<input type="text" placeholder="搜索感兴趣的活动名称" />
				</div>
			</div>
			<div class="tab-menu">
				<ul class="clearfix classOne">
					<li class="time-sort active">
						<span>开始时间</span>
						<i></i>
					</li>
					<li>
						<span>热度</span>
						<i></i>
					</li>
				</ul>
				<div class="more-filter" @click="filterShow = true"></div>
			</div>
			<div class="active-list mescroll" id="mescroll">
				<!-- <div id="active" v-for="value in activeList">
					<div class="active-block" :data-id="value.id">
						<div class="fm">
							<img :src="value.coverSrc" alt="" />
							<div class="isIcreated" v-show="value.isSelfBuilt">
								<img src="../images/a-Icreate.png" />
							</div>
							<div v-if="value.status === 1" class="act-stu">进行中</div>
							<div v-else-if="value.status === 2" class="act-stu end">已结束</div>
							<div v-else-if="value.status === 0" class="act-stu no-start">待开始</div>
							<div v-else-if="value.status === -1" class="act-stu end">已下架</div>
							<div v-if="value.isJoin" class="isSign">已报名</div>
						</div>
						<div class="info">
							<p class="name">{{value.title}}</p>
							<p class="address">{{value.addres}}</p>
							<p class="time">{{value.startTime value.endTime}}</p>
							<div class="row">
								<p class="act-type">{{value.tagName}}</p>
								<p class="orgName">{{value.organizer}}</p>
							</div>
							<div class="row">
								<div class="data">
									<ul>
										<li>
											<img src="../images/icon-view-act.png" />
											<span>{{value.pageView}}</span>
										</li>
										<li>
											<img src="../images/icon-sign-act.png" />
											<span>{{value.joinNumber}}</span>
										</li>
										<li>
											<img src="../images/icon-comment-act.png" />
											<span>{{value.commentCount}}</span>
										</li>
									</ul>
								</div>
								<div v-show="value.point" class="score">
									<div class="start clearfix">
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div class="half-start"></div>
									</div>
									<span>{{value.point}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="no-data" v-show="isNoData">
					<img src="../images/no-data.png" />
					<p>快去参加活动吧</p>
				</div> -->
			</div>
		</div>
		<div class="creatActBtn" style="display: none;">
			<img src="../images/add-white.png" />
		</div>
	</div>
</template>

<script>
	import '../css/global.css';
	import '../css/init.less';
	import '../commonJs/responsive.js';

	export default {
		// name: "ActiveShow",
		data() {
			return{
				filterShow: false,
			}
		},
	}
</script>