<template>
	<view class="content">
		<div class="box pt1"></div>
		<div class="box pt2"></div>
		<div class="box pt3"></div>
		<div class="box pt4"></div>
		<div class="box pt5"></div>
		<div class="box pt6"></div>
		<div class="box pt7"></div>
		<div class="box pt8"></div>
		<div class="box pt9"></div>
		<div class="box pt10"></div>
		<div class="box pt11"></div>
		<div class="box pt12"></div>
		<div class="box pt13"></div>
		<div class="box pt14"></div>
		<div class="box pt15"></div>
		<div class="box pt16"></div>
		<div class="box pt17"></div>
		<div class="box pt18"></div>
		<div class="box pt19"></div>
		<div class="box pt20"></div>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	page {
		background-color: #eee;
	}
	.content {
		display: flex;
		flex-wrap: wrap;
	}

	.box {
		width: 48%;
		height: 200upx;
		margin-bottom: 7%;
		box-shadow: 0 1px 8px #666;
	}

	.box:nth-child(2n+0) {
		margin-left: 2%;
	}

	.pt1 {
		background-size: 50px 50px;
		background-color: #0ae;
		background-image: linear-gradient(rgba(255, 250, 255, .2) 50%, transparent 50%, transparent);
	}
	
	.pt2 {
		background-size: 50px 50px;
		background-color: #f90;
		background-image: linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
	}
	
	.pt3 {
		background-size: 50px 50px;
		background-color: white;
		background-image:
			linear-gradient(to top, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)),
			linear-gradient(to left, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5))
	}
	
	.pt4 {
		background-size: 50px 50px;
		background-color: #ac0;
		background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
	}
	
	.pt5 {
		background-size: 50px 50px;
		background-color: #c16;
		background-image: linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
	}
	
	.pt6 {
		background-color: #eee;
		background-size: 60px 60px;
		background-position: 0 0, 30px 30px;
		background-image:
			linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
			linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
	}
	
	.pt7 {
		background-color: #eee;
		background-size: 60px 60px;
		background-image:
			linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
			linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
	}
	
	
	.pt8 {
		background-color: #fff;
		background-size: 100% 1.2em;
		background-image:
			linear-gradient(to right, transparent 21px, #abced4 21px, #abced4 23px, transparent 23px),
			linear-gradient(#eee .05em, transparent .05em);
	}
	
	.pt9 {
		background:
			radial-gradient(circle, white 10%, transparent 10%),
			radial-gradient(circle, white 10%, black 10%) 50px 50px;
		background-size: 100px 100px;
	}
	
	.pt10 {
		background:
			radial-gradient(circle at 0% 2%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px),
			radial-gradient(circle at 100% 100%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), none;
		background-size: 20px 20px;
	}
	
	
	.pt11 {
		background-image: radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), radial-gradient(circle at 100% 100%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), none;
		background-position: 0 10px, 0 0%, 0 0;
		background-size: 20px 20px;
	}
	
	
	.pt12 {
		background-color: #330000;
		background-image:
			radial-gradient(#890000 4%, #5B0000 9%, rgba(102, 0, 0, 0) 9%),
			radial-gradient(#890000 4%, #5B0000 8%, rgba(102, 0, 0, 0) 10%),
			radial-gradient(rgba(153, 0, 0, 0.8) 20%, rgba(102, 0, 0, 0)), radial-gradient(rgba(153, 0, 0, 0.8) 20%, rgba(102, 0, 0, 0)),
			radial-gradient(#660000 35%, rgba(102, 0, 0, 0) 60%),
			radial-gradient(#660000 35%, rgba(102, 0, 0, 0) 60%),
			radial-gradient(rgba(76, 0, 0, 0.7), rgba(102, 0, 0, 0)),
			radial-gradient(rgba(76, 0, 0, 0.7), rgba(102, 0, 0, 0)),
			linear-gradient(45deg, rgba(102, 0, 0, 0) 49%, #000000 50%, rgba(102, 0, 0, 0) 70%),
			linear-gradient(135deg, rgba(102, 0, 0, 0) 49%, #000000 50%, rgba(102, 0, 0, 0) 70%);
		background-position: 0 0px, 50px 50px, 50px 0px, 0 50px, 50px 0px, 100px 50px, 0 0px, 50px 50px, 0 0px, 0 0;
		background-size: 100px 100px;
	}
	
	.pt13 {
		background-color: white;
		background-image:
			radial-gradient(midnightblue 9px, transparent 10px),
			repeating-radial-gradient(midnightblue 0px, midnightblue 4px, transparent 5px, transparent 20px, midnightblue 21px, midnightblue 25px, transparent 26px, transparent 50px);
		background-position: 0 0;
		background-size: 30px 30px, 90px 90px;
	}
	
	.pt14 {
		background-color: #282828;
		background-image:
			radial-gradient(black 15%, transparent 16%),
			radial-gradient(black 15%, transparent 16%),
			radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%),
			radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%);
		background-position: 0 0px, 8px 8px, 0 1px, 8px 9px;
		background-size: 16px 16px;
	}
	
	.pt15 {
		background-color: #BB0033;
		background-image:
			radial-gradient(closest-side circle at 60% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
			radial-gradient(closest-side circle at 40% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
			radial-gradient(closest-side circle at 40% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
			radial-gradient(closest-side circle at 60% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
			radial-gradient(closest-side circle at 50% 35%, #DD3355 30%, rgba(221, 51, 85, 0) 31%),
			radial-gradient(closest-side circle at 60% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
			radial-gradient(closest-side circle at 40% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
			radial-gradient(closest-side circle at 40% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
			radial-gradient(closest-side circle at 60% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
			radial-gradient(closest-side circle at 50% 35%, #DD3355 30%, rgba(221, 51, 85, 0) 31%);
		background-position: 0 0%, 0 0%, 0 0%, 0 0%, 0 0%, 50px 50px, 50px 50px, 50px 50px, 50px 50px, 50px 50px;
		background-size: 100px 100px;
	}
	
	.pt16 {
		background-image:
			repeating-linear-gradient(120deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .1) 1px, transparent 1px, transparent 60px),
			repeating-linear-gradient(60deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .1) 1px, transparent 1px, transparent 60px),
			linear-gradient(60deg, rgba(0, 0, 0, .1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, .1)),
			linear-gradient(120deg, rgba(0, 0, 0, .1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, .1));
		background-size: 70px 120px;
	}
	
	.pt17 {
		background-image:
			radial-gradient(circle at 100% 50%, transparent 20%, rgba(255, 255, 255, 0.3) 21%, rgba(255, 255, 255, 0.3) 34%, transparent 35%, transparent),
			radial-gradient(circle at 0% 50%, transparent 20%, rgba(255, 255, 255, 0.3) 21%, rgba(255, 255, 255, 0.3) 34%, transparent 35%, transparent);
		background-color: slategray;
		background-size: 75px 100px;
		background-position: 0 0%, 0 -50px;
	}
	
	.pt18 {
		background-color: #63773F;
		background-image:
			radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54, 78, 39, 0) 12%, rgba(54, 78, 39, 0)),
			radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210, 202, 171, 0) 12%, rgba(210, 202, 171, 0)),
			radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54, 78, 39, 0) 12%, rgba(54, 78, 39, 0)),
			radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210, 202, 171, 0) 12%, rgba(210, 202, 171, 0)),
			radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210, 202, 171, 0) 17%),
			radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54, 78, 39, 0) 17%),
			radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210, 202, 171, 0) 17%),
			radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54, 78, 39, 0) 17%);
		background-position: 50px 0px, 50px 0px, 0 50px, 0 50px, 0 0%, 0 0%, 50px 50px, 50px 50px;
		background-size: 100px 100px;
	}
	
	.pt19 {
		background-color: #C8D3A7;
		background-image:
			radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%),
			radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%);
		background-position: 0 0px, 55px 55px;
		background-size: 110px 110px;
	}
	
	.pt20 {
		background-color: #DDEEFF;
		background-image:
			radial-gradient(closest-side, transparent 98%, rgba(0, 0, 0, 0.3) 99%),
			radial-gradient(closest-side, transparent 98%, rgba(0, 0, 0, 0.3) 99%);
		background-position: 0 0px, 40px 40px;
		background-size: 80px 80px;
	}
</style>
