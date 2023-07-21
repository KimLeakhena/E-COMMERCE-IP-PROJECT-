<template>
    <HeaderNavbar/>
    <slot/>
    <Footers/>
</template>
<script setup>
import HeaderNavbar from '../components/HeaderNavbar.vue';
import Footers from '../components/Footers.vue';

</script>
