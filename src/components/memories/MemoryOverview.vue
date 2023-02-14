<template>
<ion-img :src="memory.image" />
<h2 class="ion-text-center">{{ memory.title }}</h2>
<p class="ion-text-center">{{ memory.description }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
	IonImg,
} from "@ionic/vue";
export default defineComponent({
	components: {
		IonImg,
	},
	setup () {

		return {}
	},
	props: {
		memory: {
			type: Object,
			required: true
		}
	},
})
</script>

<style scoped>

</style>