<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */


$context = Timber::get_context();
$timber_post = Timber::query_post();

$context['post'] = $timber_post;


if ($timber_post->post_type == 'case') {

    $args = array(
        'post_type' => 'case', // Get post type project
        'posts_per_page' => -1, // Get all posts
        // 'orderby' => array(
        //     'date' => 'DESC' // Order by post date
        // )
    );
    $query = Timber::get_posts($args);
    $curr_id = $context['post']->id;
    $curr_index = 0;
    $first_index = 0;
    $second_index = 0;
    $projects = array();
    if (sizeof($query) > 0) {
        for ($i=0; $i < sizeof($query); $i++) { 
            if ($query[$i]->id == $curr_id) {
                $curr_index = $i;
                break;
            }
        }
        $next_index = ($curr_index + 1) % sizeof($query);
        $context['next_post'] = $query[$next_index];
    }
}

$templates = array( 'posts/'. $timber_post->post_type .'.html.twig', 'posts/post.html.twig' );

Timber::render( $templates, $context );