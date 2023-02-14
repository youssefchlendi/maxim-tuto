<template>
<form class="ion-padding" @submit.prevent="submitForm()">
		<ion-list>
			<ion-item>
				<ion-label position="floating">Title</ion-label>
				<ion-input v-model="memory.title" type="text" required></ion-input>
			</ion-item>
			<ion-item>
				<ion-label position="floating">Image URL</ion-label>
				<ion-input v-model="memory.image" type="url" required></ion-input>
			</ion-item>
			<ion-item>
				<ion-label position="floating">Description</ion-label>
				<ion-textarea v-model="memory.description" type="text" required></ion-textarea>
			</ion-item>
		</ion-list>
		<ion-button type="submit" expand="block" color="primary">{{initialMemory?.id?'Update Memory':'Add Memory'}}</ion-button>
	</form>
</template>

<script>

import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue";
export default {
	components: {
		IonList,
		IonItem,
		IonLabel,
		IonInput,
		IonTextarea,
		IonButton,
		// IonIcon
	},
	emits: ['save-memory'],
	props: {
		initialMemory: {
			type: Object,
			required: false
		}
	},
	data() {
		return {
			memory: {
				id: this.initialMemory?.id??"",
				title: this.initialMemory?.title??"",
				image: this.initialMemory?.image??"",
				description: this.initialMemory?.description??""
			}
		}
	},
	methods: {
		submitForm() {
			this.$emit('save-memory', this.memory);
		}
	}
}
</script>