<?php
/**
 * Template Name: Portfolio
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$templates = array( 'pages/portfolio.html.twig' );

$context = Timber::get_context();
$context['page'] = new TimberPost();

Timber::render( $templates, $context );