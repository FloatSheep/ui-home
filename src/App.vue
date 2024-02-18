<script setup>
import Avatar from "./components/Avatar.vue";
import Middle from "./components/Middle.vue";
import BottomCard from "./components/BottomCard.vue";
import Footer from './components/Footer.vue';
</script>

<template>
  <div
    class="min-h-screen bg-[#202124] flex flex-col items-center justify-center text-white p-4"
  >
    <Avatar />
    <Middle />
    <BottomCard />
    <Footer />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;
</style>
