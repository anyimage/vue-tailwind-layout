<template>
    <div class="flex flex-col sm:flex-row">
        <div class="sm:max-w-xs flex-1">
            <slot name="sidebar"></slot>
        </div>

        <div class="flex flex-col flex-1">
            <div class="hidden sm:block w-full">
                <slot name="top-bar"></slot>
            </div>
            <div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        props: [],

        data() {
            return {};
        },

        mounted() {

        },
        methods: {}
    };
</script>
