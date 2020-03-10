<template>
	<button class="kw_button" :class="{default: type, kw_btn_primary: type === 'primary', kw_btn_plain: plain}" v-on="$listeners"><slot/></button>
</template>

<script>
export default {
	name: "KwButton",
	props: {
		type: {
			type: String,
		},
		plain: Boolean,

	},
	data() {
		return {

		}
	},
	methods: {

	},
}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/globalVar.scss';
	.kw_button {
		height: 32px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 16px;
		line-height: 1;
		color: $mcaf;
		background-color: #fff;
		border: 1px solid $mcaf;
		border-radius: 4px;
		outline: none;
		padding: 0px 20px;
		box-sizing: border-box;
		white-space: nowrap;
		user-select: none;/*其中 user-select 的参数值 none 表示不能选中文本，而 text 则表示可以选择文本*/
		position: relative;
		cursor: pointer;
		-moz-user-select: none;/*火狐*/
		-webkit-user-select: none;/*webKit 浏览器*/
		-ms-user-select: none;/*IE10*/
		-khtml-user-select: none;/*低版本浏览器*/
		&:hover {
			color: transparentize($mc0a, 0.5);
			border-color: transparentize($mc0a, 0.5);
		}
		&:focus {outline: none;}
		&:active {
			appearance: none;
			outline: none;
			border-color: $mc0a;
			color: $mc0a;
		}
		&:disabled {
			color: lighten($mcaf, 8);
			border-color: lighten($mcaf , 8);
			pointer-events: none;
		}
	}
	.kw_btn_primary {
		background-color: $mc0a;
		color: #fff;
		border-color: $mc0a;
		&:hover {
			background-color: lighten($mc0a, 2);
			color: #fff;
			border-color: lighten($mc0a, 2);
		}
		&:active {
			background-color: darken($mc0a, 2);
			color: #fff;
			border-color: darken($mc0a, 2);
		}
		&:disabled {
			background-color: transparentize($mc0a, 0.7);
			color: transparentize(#fff, 0.1);;
			border-color: transparentize($mc0a, 0.7);
		}
	}

	.kw_btn_plain {
		background-color: #fff;
		color: $mc0a;
		border: 1px solid $mc0a;
		transition: all .2s;
		&:hover {
			background-color: transparentize($mc0a, 0.8);
			color: $mc0a;
			border-color: transparentize($mc0a, 0.2);
		}
		&:active {
			background-color: darken($mc0a, 2);
			color: #fff;
			border-color: darken($mc0a, 2);
		}
		&:disabled {
			color: transparentize($mc0a, 0.6);
			border-color: transparentize($mc0a, 0.6);
		}
	}
</style>
