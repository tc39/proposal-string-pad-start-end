# String.prototype.padLeft( maxLength [ , fillString ] )

When the _padLeft_ method is called, the following steps are taken:
  1. Let _O_ be RequireObjectCoercible(*this* value).
  1. Let _S_ be ToString(_O_).
  1. ReturnIfAbrupt(_S_).
  1. Let _intMaxLength_ be ToLength(_maxLength_).
  1. ReturnIfAbrupt(_intMaxLength_).
  1. Let _stringLength_ be the number of elements in S.
  1. If _intMaxLength_ is not greater than _stringLength_, return _S_.
  1. If _fillString_ is *undefined*, let _F_ be the empty String.
  1. Else, let _F_ be ToString(_fillString_).
  1. ReturnIfAbrupt(_F_).
  1. If _F_ is the empty String, let _F_ be a string consisting solely of the code unit U+0020 (SPACE).
  1. Let _fillLen_ be _intMaxLength_ - _stringLength_.
  1. Repeat, while the length of _F_ is less than _fillLen_:
    1. Let _fLen_ be the length of _F_.
    1. Let _remainingCodeUnits_ be _fillLen_ - _fLen_.
    1. If _fLen_ is greater than _remainingCodeUnits_, then
      1. Let _truncatedF_ be the first _remainingCodeUnits_ of _F_.
      1. Let _F_ be a new String computed by the concatenation of _F_ and _truncatedF_.
    1. Else,
      1. Let _F_ be a new String value computed by the concatenation of _F_ and _F_.
  1. Let _truncatedStringFiller_ be the first _fillLen_ elements of _F_.
  1. Return a new String value computed by the concatenation of _truncatedStringFiller_ and _S_.

The _length_ property of the _padLeft_ method is *1*.

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
  1. If _fillString_ is *undefined*, let _F_ be the empty String.
  1. Else, let _F_ be ToString(_fillString_).
  1. ReturnIfAbrupt(_F_).
  1. If _F_ is the empty String, let _F_ be a string consisting solely of the code unit U+0020 (SPACE).
  1. Let _fillLen_ be _intMaxLength_ - _stringLength_.
  1. Repeat, while the length of _F_ is less than _fillLen_:
    1. Let _fLen_ be the length of _F_.
    1. Let _remainingCodeUnits_ be _fillLen_ - _fLen_.
    1. If _fLen_ is greater than _remainingCodeUnits_, then
      1. Let _truncatedF_ be the first _remainingCodeUnits_ of _F_.
      1. Let _F_ be a new String computed by the concatenation of _F_ and _truncatedF_.
    1. Else,
      1. Let _F_ be a new String value computed by the concatenation of _F_ and _F_.
  1. Let _truncatedStringFiller_ be the first _fillLen_ elements of _F_.
  1. Return a new String value computed by the concatenation of _S_ and _truncatedStringFiller_.

The _length_ property of the _padRight_ method is *1*.

Note: the first argument _maxLength_ will be clamped such that it can be no smaller than the length of the *this* value.
Note: The optional second argument _fillString_ defaults to *" "* (a string consisting of U+0020 SPACE).
