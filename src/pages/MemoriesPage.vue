<template>
	<base-layout page-title="Memories">
	<template v-slot:actions-end>
		<ion-button router-link="/memories/add">
			<ion-icon slot="icon-only" :icon="add" />
		</ion-button>
	</template>

		<memory-list v-if="memoryStore.memories.length>0" @delete-memory="deleteMemory" @update-memory="updateMemory" :memories="memoryStore.memories" />
		<ion-card v-else>
				<ion-card-header>
					<ion-card-title>No Memories Found</ion-card-title>
				</ion-card-header>
				<ion-card-content>
					<p>Click the button in the top bar to add a new memory.</p>
				</ion-card-content>
		</ion-card>
	</base-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMemoryStore } from '@/store/memories.store';
import MemoryList from '@/components/memories/MemoryList.vue';
import { add } from 'ionicons/icons';
import { IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  } from '@ionic/vue';
export default defineComponent({
	components: {
		MemoryList,
		IonButton,
		IonIcon,
		IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
	},
	setup() {
		const memoryStore = useMemoryStore();
		return { memoryStore, add }
	},
	methods: {
		deleteMemory(id: string) {
			this.memoryStore.deleteMemory(id);
		},
		updateMemory(id: string) {
			this.$router.push(`/memories/edit/${id}`);
		}
	}
})
</script>

<style scoped>

</style>