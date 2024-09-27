<template>
    <div class="bg-gray-900 text-white p-4 flex justify-between items-center md:px-8 relative">
        <div class="text-2xl font-bold cursor-pointer">
            <h1>Logo</h1>
        </div>

        <ul class="md:flex gap-5 items-center absolute md:static bg-gray-900 w-full md:w-auto pb-10 md:pb-0 px-6 md:px-0 top-14 left-0 transition-all duration-300 ease-in-out"
            :class="[open ? 'left-0' : 'left-[-100%]']">
            <li v-for="tag in tags" :key="tag.name" class="py-2 md:py-0  ">
                <router-link :to="tag.path" class="hover:text-green-400">{{ tag.name }}</router-link>
            </li>
        </ul>

        <span class="text-white text-2xl cursor-pointer md:hidden" @click="menuOpen">
            <MenuIcon class="w-6 h-6" />
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { MenuIcon } from '@heroicons/vue/solid';

const tags = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' }
];

const open = ref(false);

const menuOpen = () => {
    open.value = !open.value;
};
</script>

<style scoped>
ul {
    transition: left 0.3s ease;
}
</style>