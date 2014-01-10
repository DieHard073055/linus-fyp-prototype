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
          var $next =  $active.next().length ? $active.next()
              : $('#slideshow DIV:first');

          // uncomment below to pull the divs randomly
          // var $sibs  = $active.siblings();
          // var rndNum = Math.floor(Math.random() * $sibs.length );
          // var $next  = $( $sibs[ rndNum ] );


          $active.addClass('last-active');

          $next.css({opacity: 0.0})
              .addClass('active')
              .animate({opacity: 1.0}, 1000, function() {
                  $active.removeClass('active last-active');
              });
      }

      $(function() {
          setInterval( "slideSwitch()", 5000 );
      });

