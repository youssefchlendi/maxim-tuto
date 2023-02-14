<template>
	<ion-item-sliding>

		<ion-item>
			<ion-thumbnail slot="start" :router-link="`/memories/${memory.id}`">
				<ion-img :src="memory.image" />
			</ion-thumbnail>
			<ion-label :router-link="`/memories/${memory.id}`">{{ memory.title }}</ion-label>
		</ion-item>
			<ion-item-options>
				<ion-item-option @click="$emit('update-memory',memory.id)" color="warning">Update <ion-icon :icon="pencil" /></ion-item-option>
				<ion-item-option @click="deleteMemory(memory.id)" color="danger">Delete <ion-icon :icon="trash" /></ion-item-option>
			</ion-item-options>
	</ion-item-sliding>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonItem, IonImg, IonThumbnail, IonLabel, IonItemSliding,IonItemOption,IonItemOptions, actionSheetController, IonIcon } from "@ionic/vue";
import { Memory } from '@/models/memory.model';
import { trash, pencil, close } from 'ionicons/icons';
export default defineComponent({
	components: {
		IonItem,
		IonImg,
		IonThumbnail,
		IonLabel,
		IonItemSliding,
		IonItemOptions,
		IonItemOption,
		IonIcon
	},
	props: {
		memory: {
			type: Object as () => Memory,
			required: true
		}
	},
	data() {
		return {
			trash,
			pencil
		}
	},
	methods: {
		async deleteMemory(id: string) {
			const actionSheet = await actionSheetController.create({
				header: 'Are you sure?',
				buttons: [
					{
						text: 'Delete',
						role: 'destructive',
						cssClass: 'text-danger',
						icon: trash,
						handler: () => {
							this.$emit('delete-memory', id);
						}
					},
					{
						cssClass: 'secondary',
						text: 'Cancel',
						icon: close,
						role: 'cancel'
					}
				]
			});
			await actionSheet.present();
		}
	},
	emits: ['delete-memory', 'update-memory']
})
</script>

<style scoped>

</style>