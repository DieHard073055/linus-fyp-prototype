<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="includes/bootstrap-responsive.min.css"/>
    <script src='https://cdn.firebase.com/v0/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <!-- Java Script for the slide show -->
    <script type="text/javascript">

      /*** 
          Simple jQuery Slideshow Script
          Released by Jon Raasch (jonraasch.com) under FreeBSD license: free to use or modify, not responsible for anything, etc.  Please link out to me if you like it :)
      ***/

      function slideSwitch() {
          var $active = $('#slideshow DIV.active');

          if ( $active.length == 0 ) $active = $('#slideshow DIV:last');

          // use this to pull the divs in the order they appear in the markup
