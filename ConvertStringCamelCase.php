<?php
	function camelCase($str) {
		// Trim leading and trailing spaces, replace underscores with spaces
		$str = trim(str_replace('_', ' ', $str));

		// Convert to lowercase and split by spaces or any non-alphanumeric characters
		$words = preg_split('/[^a-zA-Z0-9]+/', strtolower($str));

		// Capitalize the first letter of each word, and concatenate them
		$camelCaseStr = '';
		foreach ($words as $word) {
			if ($word !== '') {
				$camelCaseStr .= ucfirst($word);
			}
		}

		return $camelCaseStr;
	}
?>
