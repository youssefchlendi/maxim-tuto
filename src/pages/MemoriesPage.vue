<template>
	<base-layout page-title="Memories">
		<memory-list :memories="memoryStore.memories"/>
	</base-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMemoryStore } from '@/store/memories.store';
import MemoryList from '@/components/memories/MemoryList.vue';
export default defineComponent({
	components: {
		MemoryList
	},
	setup(){
		const memoryStore = useMemoryStore();
		return { memoryStore }
	},
	data(){
		return {
		}
	}
})
</script>

<style scoped>

</style>