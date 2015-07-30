# String.prototype.padLeft( maxLength [ , fillString ] )

The first argument _maxLength_ will be clamped such that it can be no smaller than the length of the *this* value.
The optional second argument _fillString_ defaults to *" "* (a string consisting of a single space).

When the _padLeft_ method is called, the following steps are taken:
1. Let _O_ be RequireObjectCoercible(*this* value).
1. Let _S_ be ToString(_O_).
1. ReturnIfAbrupt(_S_).
1. Let _stringLength_ be ToLength(Get(_S_, *"length"*)).
1. ReturnIfAbrupt(_stringLength_).
1. If _fillString_ is *undefined*, let _fillStr_ be the empty String.
1. Else, let _fillStr_ be ToString(_fillString_).
1. If _fillStr_ is the empty String, let _fillStr_ be *" "* (a string consisting of a single space).
1. Let _intMaxLength_ be max(_stringLength_, ToLength(_maxLength_))
1. If _intMaxLength_ is not greater than _stringLength_, return _S_.
1. Let _fillLen_ be _intMaxLength_ - _stringLength_.
1. Let _stringFiller_ be the empty String.
1. Repeat, while the length of _stringFiller_ is less than _fillLen_:
  1. Let _stringFiller_ be a new String value computed by the concatenation of _stringFiller_ and _fillStr_.
1. Return a new String value computed by the concatenation of the last _fillLen_ elements of _stringFiller_, and _S_.

Note: the _length_ property of the _padLeft_ method is *1*.

# String.prototype.padRight( maxLength [ , fillString ] )

The first argument _maxLength_ will be clamped such that it can be no smaller than the length of the *this* value.
The optional second argument _fillString_ defaults to *" "* (a string consisting of a single space).

When the _padRight_ method is called, the following steps are taken:
1. Let _O_ be RequireObjectCoercible(*this* value).
1. Let _S_ be ToString(_O_).
1. ReturnIfAbrupt(_S_).
1. Let _stringLength_ be ToLength(Get(_S_, *"length"*)).
1. ReturnIfAbrupt(_stringLength_).
1. If _fillString_ is *undefined*, let _fillStr_ be the empty String.
1. Else, let _fillStr_ be ToString(_fillString_).
1. If _fillStr_ is the empty String, let _fillStr_ be *" "* (a string consisting of a single space).
1. Let _intMaxLength_ be max(_stringLength_, ToLength(_maxLength_))
1. If _intMaxLength_ is not greater than _stringLength_, return _S_.
1. Let _fillLen_ be _intMaxLength_ - _stringLength_.
1. Let _stringFiller_ be the empty String.
1. Repeat, while the length of _stringFiller_ is less than _fillLen_:
  1. Let _stringFiller_ be a new String value computed by the concatenation of _stringFiller_ and _fillStr_.
1. Return a new String value computed by the concatenation of _S_, and the first _fillLen_ elements of _stringFiller_.

Note: the _length_ property of the _padRight_ method is *1*.
