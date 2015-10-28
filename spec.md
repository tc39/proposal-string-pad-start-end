# String.prototype.padLeft( maxLength [ , fillString ] )

When the _padLeft_ method is called, the following steps are taken:
  1. Let _O_ be RequireObjectCoercible(*this* value).
  1. Let _S_ be ToString(_O_).
  1. ReturnIfAbrupt(_S_).
  1. Let _intMaxLength_ be ToLength(_maxLength_).
  1. ReturnIfAbrupt(_intMaxLength_).
  1. Let _stringLength_ be the number of elements in S.
  1. If _intMaxLength_ is not greater than _stringLength_, return _S_.
  1. If _fillString_ is *undefined*, let _filler_ be the empty String.
  1. Else, let _filler_ be ToString(_fillString_).
  1. ReturnIfAbrupt(_filler_).
  1. If _filler_ is the empty String, let _filler_ be a string consisting solely of the code unit U+0020 (SPACE).
  1. Let _fillLen_ be _intMaxLength_ - _stringLength_.
  1. Let _truncatedStringFiller_ be a new String value consisting of repeated concatenations of _filler_ truncated to length _fillLen_.
  1. Return a new String value computed by the concatenation of _truncatedStringFiller_ and _S_.

Note: the first argument _maxLength_ will be clamped such that it can be no smaller than the length of the *this* value.
Note: The optional second argument _fillString_ defaults to *" "* (a string consisting of U+0020 SPACE).

# String.prototype.padRight( maxLength [ , fillString ] )

When the _padRight_ method is called, the following steps are taken:
  1. Let _O_ be RequireObjectCoercible(*this* value).
  1. Let _S_ be ToString(_O_).
  1. ReturnIfAbrupt(_S_).
  1. Let _intMaxLength_ be ToLength(_maxLength_).
  1. ReturnIfAbrupt(_intMaxLength_).
  1. Let _stringLength_ be the number of elements in S.
  1. If _intMaxLength_ is not greater than _stringLength_, return _S_.
  1. If _fillString_ is *undefined*, let _filler_ be the empty String.
  1. Else, let _filler_ be ToString(_fillString_).
  1. ReturnIfAbrupt(_filler_).
  1. If _filler_ is the empty String, let _filler_ be a string consisting solely of the code unit U+0020 (SPACE).
  1. Let _fillLen_ be _intMaxLength_ - _stringLength_.
  1. Let _truncatedStringFiller_ be a new String value consisting of repeated concatenations of _filler_ truncated to length _fillLen_.
  1. Return a new String value computed by the concatenation of _S_ and _truncatedStringFiller_.

Note: the first argument _maxLength_ will be clamped such that it can be no smaller than the length of the *this* value.
Note: The optional second argument _fillString_ defaults to *" "* (a string consisting of U+0020 SPACE).
