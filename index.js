"use strict";

function isAString(input) {
	if (typeof input === "string") {
		return true;
	}
	return false;
}

module.exports = isAString;
