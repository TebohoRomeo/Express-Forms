const html = (id, name, age, date, time, assistant, comments) => `<!DOCTYPE html>
<head>
<title>Express Application</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<div class="container">
<div class="header">
<h1>THANK YOU!</h1>
</div>
<div class="body">
<div class="group">
<div class="output">ID: ${id}</div>
<div class="output">Visitors Name: ${name}</div>
<div class="output">Age: ${age}</div>
<div class="output">Date of visit: ${date}</div>
<div class="output">Time of visit: ${time}</div>
<div class="output">Assistant: ${assistant}</div>
<div class="output">Comment: ${comments}</div>
</div>
</div
></div>
</body>`;

module.exports = html;