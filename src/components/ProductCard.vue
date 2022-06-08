<script setup>
import StarRating from 'vue-star-rating'
import WatchButton from './WatchButton.vue'

defineProps({
  id: String,
  img: Object,
  description: String,
  rating: Number,
  price: String,
  additional: String
})
</script>

<template>
  <div :data-test="id">
    <a
      href
      class="block p-4 text-gray-800 transition duration-200 border-transparent rounded-lg outline-none cursor-pointer border-1 hover:border-blue-300 focus:border-blue-300 hover:ring-2 focus:ring-2 ring-blue-200 w-259px"
    >
      <img data-test="product-image" class="mb-2" :src="img.src" :alt="img.alt" />
      <p data-test="product-description" class="leading-relaxed tracking-wide text-gray-800">{{ description }}</p>
      <p data-test="product-price" class="text-2xl font-bold leading-loose text-gray-1000">{{ price }}</p>
      <p data-test="product-additional" class="text-sm leading-relaxed text-gray-500">{{ additional }}</p>
      <p class="flex items-center text-sm justify-between">
        <StarRating
          inactive-color="transparent"
          active-color="#FB8200"
          border-color="#FB8200"
          text-class="text-xs font-bold text-gray-600"
          :border-width="1"
          read-only
          :star-size="8"
          :padding="3"
          :increment="0.01"
          :rating="rating"
          class="pt-2 text-sm"
        />

        <watch-button enabled=""/>
      </p>
    </a>
  </div>
</template>
