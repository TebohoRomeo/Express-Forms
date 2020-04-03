const html = `<!DOCTYPE html>
<html>
<head>
	<title>Express Application</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

	<div class="container">
		<div class="header">
			<h1>VISITORS FORM</h1>
		</div>
		<form class="body" method="post" autocomplete="off">
			<div class="group">
				<input type="text" name="name" placeholder="Visitors Name">
			</div>
			<div class="group">
				<input type="text" name="age" placeholder="Visitors Age">
			</div>
			<div class="group">
				<input type="date" name="date" placeholder="Date of visit">
			</div>
			<div class="group">
				<input type="time" name="time" placeholder="Time of visit">
			</div>
			<div class="group">
				<input type="text" name="assistant" placeholder="Assisted By">
			</div>
			<div class="group">
				<textarea name="comments" placeholder="Comments"></textarea>
			</div>
			<button> Submit </button>
		</form>
	</div>

</body>
</html>`;

module.exports = html;