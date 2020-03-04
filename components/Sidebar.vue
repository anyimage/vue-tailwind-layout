<template>
    <div class="bg-gray-800 text-gray-400 sm:min-h-screen flex flex-col justify-between">
        <div>
            <div class="h-16 flex justify-between items-center">
                <div class="pl-6">
                    <slot name="logo"></slot>
                </div>
                <div @click="showMenu=!showMenu" class="sm:hidden text-5xl pr-4">
                    <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" fill="#fff"></path></svg>
                </div>
            </div>

            <transition name="x" :duration="200" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div v-show="showMenu" class="sm:hidden"
                >
                    <slot name="menu"
                    ></slot>
                </div>
            </transition>
        </div>
        <div v-show="showMenu" class="sm:hidden">
            <div class="flex items-end">
                <div class="w-full p-6">
                    <slot name="bottom"></slot>
                </div>
            </div>
        </div>
        <div class="hidden sm:flex flex-col flex-1 justify-between">
            <slot name="menu"></slot>
            <div class="flex items-end">
                <div class="w-full p-6">
                    <slot name="bottom"></slot>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import Vue from 'vue';

    export default {

        props: [],

        data() {
            return {
                showMenu: false
            };
        },

        mounted() {
        },
        methods: {}
    };
</script>
