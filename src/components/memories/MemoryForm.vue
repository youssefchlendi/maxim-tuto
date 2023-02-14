<template>
<form class="ion-padding" @submit.prevent="submitForm()">
		<ion-list>
			<ion-item>
				<ion-label position="floating">Title</ion-label>
				<ion-input v-model="memory.title" type="text" required></ion-input>
			</ion-item>
			<ion-item>
				<ion-thumbnail slot="start">
					<ion-img :src="memory.image"></ion-img>
				</ion-thumbnail>
				<ion-button type="button" fill="clear" @click="takePhoto">
					<ion-icon :icon="camera" slot="icon-only"></ion-icon>
					Take Photo
				</ion-button>
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

import { IonIcon, IonImg, IonThumbnail, IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export default {
	components: {
		IonList,
		IonItem,
		IonLabel,
		IonInput,
		IonTextarea,
		IonButton,
		IonThumbnail,
		IonImg,
		IonIcon
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
			},
			picture: null,
			camera
		}
	},
	methods: {
		submitForm() {
			this.$emit('save-memory', this.memory);
		},
		async takePhoto() {
			const photo = await Camera.getPhoto({
				resultType: CameraResultType.Uri,
				source: CameraSource.Camera,
				quality: 60
			});
			this.memory.image = photo.webPath;
			
		}
		
	},

}
</script>