<html>


<body>




<?php

mysql_connect ($_ENV['DB_HOST'], $_ENV['DB_USER'], $_ENV['DB_PASS']) or die(mysql_error());
mysql_select_db("atekdes1_subscribers") or die(mysql_error());


if($_POST['message'] != "" && $_POST['message'] != "") 
	{
		$message = $_POST['message'];
		$title = $_POST['title'];

		$query = mysql_query("SELECT * FROM subscribers WHERE validated = '1'");
		
		while($row = mysql_fetch_array($query)) 
			{
				echo"<div class='message'>Message sucessfully sent to everybody!</div>";
				mail($row['email'], $title, $message, "From: admin@atekdesign.com"); 
			}
	
	}

elseif($_POST['message'] == "") 
	{
		echo"<div class='message'>Please Enter a Message!</div><br />";
	}

elseif($_POST['title'] == "") 
	{
		echo"<div class='message'>Please Enter a Title!</div>";
	}


?>




<center>

<form action="" class="form" method="post">

	Title:<br /> 	<input type="text" name="title" value="" /><br /><br />
	Message:<br /> 	<textarea name="message" rows="20" cols="75"></textarea><br /><br />
	<input type="submit" value="Send to Everyone" /> 

</form>


</center>

</body>
</html>
