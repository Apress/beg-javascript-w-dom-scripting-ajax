<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html dir="ltr" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
	<title>Example: Interdependent select boxes</title>
	<style type="text/css">
		@import 'selectBoxes.css';
	</style>
	<script type="text/javascript" src="selectBoxes.js">
	</script>
</head>
<body>
<h1>See our flight offers</h1>
<form action="exampleSelectBoxes.php" method="post">
  <div id="formOutput"> 
   <?php include('selectBoxes.php');?>
  </div>
  <p class="submit"><input type="submit" name="select" 
  id="select" value="Choose" /></p>
</form>


</body>
</html>
