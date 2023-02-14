<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
	<memory-form @save-memory="saveMemory"/>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MemoryForm from '@/components/memories/MemoryForm.vue';
import { Memory } from '@/models/memory.model';
import { useMemoryStore } from '@/store/memories.store';
import { useRouter } from 'vue-router';
export default defineComponent({
	components: {
		MemoryForm
	},	
	setup () {
		const store = useMemoryStore();
		const router = useRouter();	
		const saveMemory = (memory: Memory) => {
			store.addMemory(memory);
			router.replace('/memories');
		}	

		return {
			saveMemory
		}
	}
})
</script>

<style scoped>

</style>