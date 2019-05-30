<?php
// Register post types

// Register Custom Post Type Case
function create_case_cpt() {

	$labels = array(
		'name' => _x( 'Cases', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'Case', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'Cases', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'Case', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'Case Archives', 'textdomain' ),
		'attributes' => __( 'Case Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Case:', 'textdomain' ),
		'all_items' => __( 'All Cases', 'textdomain' ),
		'add_new_item' => __( 'Add New Case', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New Case', 'textdomain' ),
		'edit_item' => __( 'Edit Case', 'textdomain' ),
		'update_item' => __( 'Update Case', 'textdomain' ),
		'view_item' => __( 'View Case', 'textdomain' ),
		'view_items' => __( 'View Cases', 'textdomain' ),
		'search_items' => __( 'Search Case', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into Case', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Case', 'textdomain' ),
		'items_list' => __( 'Cases list', 'textdomain' ),
		'items_list_navigation' => __( 'Cases list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter Cases list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'Case', 'textdomain' ),
		'description' => __( '', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-admin-post',
		'supports' => array('title'),
		'taxonomies' => array(),
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => true,
		'hierarchical' => false,
		'exclude_from_search' => false,
		'show_in_rest' => true,
		'publicly_queryable' => true,
		'capability_type' => 'post',
	);
	register_post_type( 'case', $args );

}
create_case_cpt();

// Register Custom Post Type News
function create_news_cpt() {

	$labels = array(
		'name' => _x( 'News', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'News', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'News', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'News', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'News Archives', 'textdomain' ),
		'attributes' => __( 'News Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent News:', 'textdomain' ),
		'all_items' => __( 'All News', 'textdomain' ),
		'add_new_item' => __( 'Add New News', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New News', 'textdomain' ),
		'edit_item' => __( 'Edit News', 'textdomain' ),
		'update_item' => __( 'Update News', 'textdomain' ),
		'view_item' => __( 'View News', 'textdomain' ),
		'view_items' => __( 'View News', 'textdomain' ),
		'search_items' => __( 'Search News', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into News', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this News', 'textdomain' ),
		'items_list' => __( 'News list', 'textdomain' ),
		'items_list_navigation' => __( 'News list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter News list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'News', 'textdomain' ),
		'description' => __( '', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-admin-post',
		'supports' => array('title'),
		'taxonomies' => array(),
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => true,
		'hierarchical' => false,
		'exclude_from_search' => false,
		'show_in_rest' => true,
		'publicly_queryable' => true,
		'capability_type' => 'post',
	);
	register_post_type( 'news', $args );

}
create_news_cpt();