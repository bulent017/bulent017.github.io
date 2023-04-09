<!DOCTYPE html>
<html>
<head>
	<title>Currency Calculator</title>
  <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<form method="post" style="display: inline-block;">
		<label>From:</label>
		<input type="text" name="from_amount">
		<label>Currency:</label>
		<select name="from_currency">
			<option value="USD">US Dollar</option>
			<option value="CAD">Canadian Dollar</option>
			<option value="EUR">Euro</option>
		</select>
		<br><br>
		<label>To:</label>
		<input type="text" name="to_amount" disabled>
		<label>Currency:</label>
		<select name="to_currency">
			<option value="USD">US Dollar</option>
			<option value="CAD">Canadian Dollar</option>
			<option value="EUR">Euro</option>
		</select>
		<br>
		<button type="submit" name="convert" style="text-align: right;">Convert</button>
	</form>

	<?php
	function convertCurrency($from, $to, $amount) {
		$exchange_rates = array(
			"USD" => array(
				"CAD" => 1.25,
				"EUR" => 0.84
			),
			"CAD" => array(
				"USD" => 0.80,
				"EUR" => 0.67
			),
			"EUR" => array(
				"USD" => 1.19,
				"CAD" => 1.50
			)
		);
		if($from == $to) {
			return $amount;
		}
		$converted_amount = $amount * $exchange_rates[$from][$to];
		return $converted_amount;
	}

	if(isset($_POST['convert'])) {
		$from_currency = $_POST['from_currency'];
		$to_currency = $_POST['to_currency'];
		$from_amount = $_POST['from_amount'];
		$converted_amount = convertCurrency($from_currency, $to_currency, $from_amount);
    echo '<script>document.getElementsByName("to_amount")[0].value = "'.$converted_amount.'";</script>'; 
	}
  
?>
<!-- Sayfa yenilenince önceki değer nedense kalmaya devam ediyor, -->

</body>
</html>
