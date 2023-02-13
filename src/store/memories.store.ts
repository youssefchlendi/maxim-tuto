import { Memory } from '@/models/memory.model'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemoryStore = defineStore('memories',() => {

	const memories = ref<Memory[]>([{
		id: "m1",
		title: "A trip into the mountains",
		description: "It was a really nice trip!",
		image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
	},
	{
		id: "m2",
		title: "Surfing the sea side",
		description: "I love it!",
		image: "https://newquayactivitycentre.co.uk/wp-content/uploads/2017/08/featured-faq-surfing.jpg"
	},
	{
		id: "m3",
		title: "Good eating",
		description: "Eating can be sometimes fun!",
		image: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/woman-eating-sweets.jpg?quality=82&strip=1"
	}]);

	const getOneMemory = ( id: string ): Memory | null => {
		return memories.value.findIndex( (memory) => memory.id === id ) == -1 ? null : memories.value.find( (memory) => memory.id === id ) as Memory;
	}

	return {
		memories,
		getOneMemory
	}

})