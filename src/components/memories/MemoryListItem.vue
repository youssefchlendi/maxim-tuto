<template>
	<ion-item :router-link="`/memories/${memory.id}`">
		<ion-thumbnail slot="start">
			<ion-img :src="memory.image" />
		</ion-thumbnail>
		<ion-label>{{ memory.title }}</ion-label>
	</ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
import { Memory } from '@/models/memory.model';
export default defineComponent({
	components: {
		IonItem,
		IonImg,
		IonThumbnail,
		IonLabel
	},
	props: {
		memory: {
			type: Object as () => Memory,
			required: true
		}
	},
})
</script>

<style scoped>

</style>