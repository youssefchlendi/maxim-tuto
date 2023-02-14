<template>
	<base-layout :page-title="memory?memory.title:'Loading...'" page-default-back-link="/memories">
		<h2 v-if="!memory">
			Could not find memory for id: {{memoryId}}
		</h2>
		<div v-if="memory">
			<memory-overview :memory="memory" />
		</div>
	</base-layout>
</template>

<script lang="ts">
import { useMemoryStore } from '@/store/memories.store';
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router';
import { Memory } from '@/models/memory.model';
import MemoryOverview from '@/components/memories/MemoryOverview.vue';
export default defineComponent({
	components:{
		MemoryOverview
		},
	setup () {
		const store = useMemoryStore();
		const memoryId = ref(useRoute().params.id as string);

		const memory = ref<Memory|null>(store.getOneMemory(memoryId.value??""));
		
		
		return {
			store,
			memory,
			memoryId
		}
	}
})
</script>

<style scoped>

</style>