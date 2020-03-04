<template>
    <div>
        <a :href="href"
           @mouseover="hovered=true"
           @mouseleave="hovered=false"
           @click="handleClick"
           class="block hover:text-gray-300 px-8 py-5 border-b border-1 transition duration-200 ease-in-out"
           :class="aClass">

            <div class="flex items-center justify-between">
                <div class="w-4 mr-4 flex items-center justify-center">
                    <i v-if="icon" class="fa transition duration-200 ease-in-out" :class=iconClass></i>
                </div>
                <div class="flex-1">
                    <slot></slot>
                </div>
                <div class="w-4 ml-4 flex items-center justify-center ">
                    <i class="fa fa-chevron-left" v-show="submenuClosed"></i>
                    <i class="fa fa-chevron-down" v-show="submenuOpen"></i>
                </div>
            </div>
        </a>

        <transition name="x" :duration="100" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
            <slot name="submenu" v-if="submenuOpen"></slot>
        </transition>
    </div>
</template>
<script>
    import Vue from "vue";

    export default {

        props: {
            isSubmenuItem: {
                type: Boolean,
                default: false
            },
            href: {
                default: '#'
            },
            icon: {
                default: false
            },
            active: {
                type: Boolean
            }
        },

        data() {
            return {
                submenuIsOpen: this.active,
                hovered: false,
            };
        },
        computed: {
            hasSubmenu() {
                return this.$slots.submenu && (this.$slots.submenu.length > 0);
            },
            submenuClosed() {
                if ( !this.hasSubmenu ) return false;
                return !this.submenuIsOpen;
            },
            submenuOpen() {
                if ( !this.hasSubmenu ) return false;
                return this.submenuIsOpen;
            },
            aClass() {
                if ( this.hovered || this.active || this.submenuOpen || this.isSubmenuItem )
                    return 'bg-gray-850 text-gray-300 border-gray-800';
                return 'border-gray-850';
            },
            iconClass() {
                let cls = 'fa-' + this.icon;
                if ( this.active || this.hovered ) {
                    cls += ' text-gray-300';
                } else {
                    cls += ' text-gray-600';
                }
                return cls;
            }
        },

        mounted() {
            window.sidebarEventBus = window.sidebarEventBus ? window.sidebarEventBus : new Vue();
            window.sidebarEventBus.$on( 'submenuOpen', ( i ) => {
                if ( i !== this ) {
                    this.submenuIsOpen = false;
                }
            } );
        },
        methods: {
            handleClick( message, event ) {
                if ( this.hasSubmenu ) {
                    this.submenuIsOpen = !this.submenuIsOpen;
                    if ( this.submenuIsOpen ) {
                        window.sidebarEventBus.$emit( 'submenuOpen', this );
                    }
                    if ( event ) {
                        event.preventDefault();
                    }
                }
            }
        }
    };
</script>
<!--suppress CssInvalidAtRule -->
<style scoped>
    .bg-gray-850, .xnav-active
    {
        background-color: #252e3e;
    }

    .border-gray-850
    {
        border-color: #252e3e;
    }

    @screen sm
    {
        .sm\:a-border-none a
        {
            @apply border-none;
        }
    }
</style>
