<template>
	<base-layout page-title="Update a Memory" page-default-back-link="/memories">
		<memory-form :initial-memory="initialMemory" @save-memory="saveMemory" />
	</base-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MemoryForm from '@/components/memories/MemoryForm.vue';
import { Memory } from '@/models/memory.model';
import { useMemoryStore } from '@/store/memories.store';
import { useRoute, useRouter } from 'vue-router';
import { toastController } from '@ionic/vue';

export default defineComponent({
	components: {
		MemoryForm
	},
	setup() {
		const store = useMemoryStore();
		const router = useRouter();
		const route = useRoute();

		const initialMemory = store.getOneMemory(route.params.id as string);

		const saveMemory = (memory: Memory) => {
			store.updateMemory(memory);
			router.replace('/memories');
			toastController.create({
				message: 'Memory updated',
				duration: 2000,
				color: 'success'
			}).then(toast => {
				toast.present();
			});
		}

		return {
			saveMemory,
			initialMemory
		}
	}
})
</script>

<style scoped>

</style>