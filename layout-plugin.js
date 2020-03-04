import Vue from "vue";

const LayoutPlugin = {};
LayoutPlugin.install = function ( Vue, options ) {

    Vue.component( 'app-layout', require( './components/ApplicationShell' ).default );
    Vue.component( 'sidebar', require( './components/Sidebar' ).default );
    Vue.component( 'top-bar', require( './components/TopBar' ).default );
    Vue.component( 'sidebar-menu', require( './components/SidebarMenu' ).default );
    Vue.component( 'sidebar-menu-item', require( './components/SidebarMenuItem' ).default );

};

export default LayoutPlugin;
