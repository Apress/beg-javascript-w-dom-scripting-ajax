<?php require('dyngal_functions.php');?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html dir="ltr" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
	<title>Example: A PHP driven image gallery</title>
	<style type="text/css">
		@import 'dyngal.css';
		#boundary{
			background:url(backgroundwithnav.gif) top left no-repeat #466b0b;
		}
		#contentbody{
			background:url(backgroundwithnav.gif) bottom left no-repeat #466b0b;
		}	
	</style>
	<script type="text/javascript" src="../DOMhelp.js">
	</script>
</head>
<body>
<div id="boundary">
	<div id="header"><h1>Dynamic gallery example</h1></div>
	<div id="contentbody">
	<?php include('navtree.php');?>
	<div id="content">
	<?php include('pic.php')?>
	<?php include('thumbs.php')?>
	</div>
	</div>
</div>
</body>
</html>
