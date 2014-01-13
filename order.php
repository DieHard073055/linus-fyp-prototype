<!DOCTYPE html>
<html>
<head>
  <title>Confirm Orders</title>
  <link rel="stylesheet" href="includes/bootstrap-responsive.min.css"/>
    <script src='https://cdn.firebase.com/v0/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    
    <style type="text/css">
    body{
        background: white;
      }
      .jumbotron{
        text-transform: uppercase;
        color: black;
      }
    .food-section{
        position: absolute;
        width: auto;
        height: auto;
        top: 0px;
        background-color: white;
      }
      .food-section h1{ /*food ready*/
        text-transform: uppercase;
        color: black;
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
