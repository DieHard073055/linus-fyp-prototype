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
          z-index:9;
      }
      
      /*pic names*/
      #slideshow p{
        font-size: 48px;
        font-weight: bold;
        text-align: center;
        color: #303030;'
        opacity: 0.5;
        background-color: white;
        text-transform: capitalize;
      }

      #slideshow div img p{
          
      }

      .food-section{
        position: absolute;
        width: auto;
        height: auto;
        right:0;
        left:50%;
        top: 0px;
        background-color: black;
      }
      .food-section h1{ /*food ready*/
        text-transform: uppercase;
        color: white;
        padding-left: 10px;
      }
      .food-section #messagesDiv2{ /*whole box*/
          padding: 10px;
          padding-left: 0px;
          background-color: #80CCE6;
          margin-left: 10px;
      }
      .food-section h4{
          text-transform: uppercase;          
          padding: 15px;
          padding-bottom: 5px;
          padding-right: 5px;
          margin-bottom: 0;
          margin-left: 0;
          background-color: #00A3cc;
          color:white;
      }
      .food-section p{
          text-transform: capitalize;
          font-weight: bold;
          padding-left: 30px;
          padding-top: 0;
          margin-top: 0;
      }
      .food-section p:after{
          content: "...DONE!";
          color: green;
      }
      .food-section blockquote{
        margin-bottom: 10px;

      }

      

      </style>
  </head>
  <body>
  <h1 class="jumbotron">Spring Food Court - Sample Page</h1>
    <!-- IMage Gallery Stuff -->
    <div id="slideshow">
      <div class="active">
          <a href="http://4.bp.blogspot.com/-bAO4ySU69sU/UFxpTj_FN7I/AAAAAAAAAGU/rscGTQgEs6o/s1600/kolo+mee.jpg/"><img src="http://4.bp.blogspot.com/-bAO4ySU69sU/UFxpTj_FN7I/AAAAAAAAAGU/rscGTQgEs6o/s1600/kolo+mee.jpg" alt="Slideshow Image 1" /></a>
          <p>Kolo Mee</p>
      </div>
      
      <div>
          <a href="http://www.yamu.lk/wp-content/uploads/2014/07/Mushroom_Biriyani_.jpg"><img src="http://www.yamu.lk/wp-content/uploads/2014/07/Mushroom_Biriyani_.jpg" alt="Slideshow Image 2" /></a>
          <p>Nasi Briyani</p>
      </div>
      
      <div>
          <a href="http://upload.wikimedia.org/wikipedia/commons/d/d6/Laksa.JPG"><img src="http://upload.wikimedia.org/wikipedia/commons/d/d6/Laksa.JPG" alt="Slideshow Image 3" /></a>
          <p>Sarawak laksa</p>
      </div>
      
      <div>
          <a href="http://www.chefjons.com/pictures/chefjon-0068.jpg"><img src="http://www.chefjons.com/pictures/chefjon-0068.jpg" alt="Slideshow Image 4" /></a>
          <p>Beef noodle</p>
      </div>
      
  </div>

    <!--This div contains the list of names -->
    <div class="food-section">
      <h1>Food Ready</h1>
      <div id='messagesDiv2'></div> 
    </div>



