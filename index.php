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

      </script>

      <!-- CSS for the slide show -->
      <style type="text/css">

      /*** set the width and height to match your images **/
      body{
        background: black;
      }
      .jumbotron{
        text-transform: uppercase;
      }
      #slideshow {
          position:relative;
          
      }
      #slideshow DIV {
          position:absolute;
          z-index:8;
          opacity:0.0;
          height: 400px;
          background-color: white;
          height:auto;
          width: auto;
          left:0;
          right:50%;
      }
      #slideshow DIV IMG {
          height: 400px;
          width: auto;
          display: block;
          border: 0;
          margin-bottom: 10px;
      }
      #slideshow DIV.active {
          z-index:10;
          opacity:1.0;
          text-align: center;
      }
      #slideshow DIV.last-active {
