<template>
	<div id="app">
		<component-test/>
	</div>
</template>

<script>

export default {
	name: 'App',
	components: {
		componentTest: ()=> import('./components/ComponentTest.vue'),
	}
}
</script>

<style lang="scss">
// #app {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	// -webkit-font-smoothing: antialiased;
	// -moz-osx-font-smoothing: grayscale;
	// text-align: center;
	// color: #2c3e50;
	// margin-top: 60px;
// }
</style>
