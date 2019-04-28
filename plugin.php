<?php
/**
 * Plugin Name: Sticky Container
 * Plugin URI: https://www.github.com/naxulanth/gutenberg-sticky-container
 * Description: Add column blocks with a sticky element.
 * Author: Underline Designs, Deniz Gülnar
 * Author URI: https://www.github.com/naxulanth https://www.underlinedesigns.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

/*add_filter('block_categories', function($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'ud-blocks',
                'title' => 'Underline Designs',
            ),
        )
    );
}, 10, 2);*/

//load scripts
add_action('wp_enqueue_scripts', 'ud_enqueue_scripts');
function ud_enqueue_scripts() {
    wp_enqueue_script( 'theia-sticky-sidebar.min', plugins_url( '/js/theia-sticky-sidebar.min.js', __FILE__ ), array( 'jquery' ), '' );
    wp_enqueue_script( 'ud-block-scripts', plugins_url( '/js/scripts.js', __FILE__ ), array( 'jquery' ), '' );
}
