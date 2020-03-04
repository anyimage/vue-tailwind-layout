<template>
    <div data-sidebar-menu="true">
        <slot></slot>
    </div>
</template>
<script>
    export default {

        props: [],

        data() {
            return {};
        },

        mounted() {

            this.$on( 'submenuOpen', ( i ) => {
                console.log( i );
            } );
        },
        methods: {}
    };
</script>
<style>
    [data-sidebar-menu] > :last-child > a
    {
        @apply border-none;
    }
</style>
