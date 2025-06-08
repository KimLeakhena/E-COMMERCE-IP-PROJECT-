<template>
  <div class="w-48 h-auto mx-9 my-10">
    <img :src="image" class="w-full bg-cover rounded-xl" />
  </div>
</template>

<script setup>
defineProps({
  image: String,
});
</script>
