const RequireObjectCoercible = O => {
	if (O === null || typeof O === 'undefined') {
		throw new TypeError('"this" value must not be null or undefined');
	}
	return O;
};
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
const ToLength = argument => {
	const len = Number(argument);
	if (len <= 0) { return 0; }
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

if (!String.prototype.padLeft) {
	String.prototype.padLeft = function padLeft(maxLength, fillString = ' ') {
		const O = RequireObjectCoercible(this);
		const S = String(O);
		const intMaxLength = ToLength(maxLength);
		const stringLength = ToLength(S.length);
		if (intMaxLength <= stringLength) { return S; }
		let fillStr = typeof fillString === 'undefined' ? '' : String(fillString);
		if (fillStr === '') { fillStr = ' '; }
		const fillLen = intMaxLength - stringLength;
		let stringFiller = '';
		while (stringFiller.length < fillLen) {
			stringFiller += fillStr;
		}
		return stringFiller.slice(0, fillLen) + S;
	};
}

if (!String.prototype.padRight) {
	String.prototype.padRight = function padRight(maxLength, fillString = ' ') {
		const O = RequireObjectCoercible(this);
		const S = String(O);
		const intMaxLength = ToLength(maxLength);
		const stringLength = ToLength(S.length);
		if (intMaxLength <= stringLength) { return S; }
		let fillStr = typeof fillString === 'undefined' ? '' : String(fillString);
		if (fillStr === '') { fillStr = ' '; }
		const fillLen = intMaxLength - stringLength;
		let stringFiller = '';
		while (stringFiller.length < fillLen) {
			stringFiller += fillStr;
		}
		return S + stringFiller.slice(0, fillLen);
	};
}
