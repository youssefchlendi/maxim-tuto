<template>
	<ion-list>
		<memory-list-item v-for="memory in memories" :key="memory.id" :memory="memory" />
	</ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonList } from "@ionic/vue";
import MemoryListItem from '@/components/memories/MemoryListItem.vue';
import { Memory } from '@/models/memory.model';
export default defineComponent({
	components: {
		IonList,
		MemoryListItem
	},
	props: {
		memories: {
			type: Array<Memory>,
			required: true
		}
	},
})
</script>

<style scoped>

</style>