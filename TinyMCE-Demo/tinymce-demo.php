<?php

/**
 * Plugin Name: TinyMCE-Demo
 * Plugin Uri: https://column-demo
 * Description: 
 * Author: SeJan ahmed BayZid
 * Version: 1.0
 * License: 
 * Text Domain: tinymce-demo
 * Domain path: /languages
 */

/** 
 *  textdomain 
 */
function tmced_textdomain(){

    load_plugin_textdomain('tinymce-demo', false, dirname(__FILE__) . '/languages');
}
add_action('plugin_loaded', 'tmced_textdomain');

function tmcd_mce_external_plugins( $plugins )
{
    $plugins['tmcd_plugin'] = plugins_url( 'assets/', __FILE__) . "js/tinymce.js";
    return $plugins;
}

function tmcd_mce_buttons($buttons){
    $buttons[] = 'tmcd_button_one';
    $buttons[] = 'tmcd_button_two';
    $buttons[] = 'tmcd_listbox_one';
    $buttons[] = 'tmcd_menu_one';
    $buttons[] = 'tmcd_form_one';
    return $buttons;
}

function tmcd_admin_assets()
{
    add_filter('mce_external_plugins', 'tmcd_mce_external_plugins');
    add_filter('mce_buttons', 'tmcd_mce_buttons');
}
add_action('admin_init', 'tmcd_admin_assets');
