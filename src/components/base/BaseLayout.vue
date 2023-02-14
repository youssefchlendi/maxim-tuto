<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>{{ pageTitle }}</ion-title>
				
				<ion-buttons slot="start">
					<ion-back-button :default-href="pageDefaultBackLink">
					</ion-back-button>
				</ion-buttons>

				<ion-buttons slot="end">
					<slot name="actions-end" />
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<slot />
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from "@ionic/vue";
export default defineComponent({
	props: {
		pageTitle: {
			type: String,
			required: true
		},
		pageDefaultBackLink: {
			type: String,
			required: false
		}
	},
	components:{
			IonPage,
			IonHeader,
			IonToolbar,
			IonTitle,
			IonContent,
			IonButtons,
			IonBackButton
		},
	
})
</script>

<style scoped>

</style>