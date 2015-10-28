# [String.prototype.padLeft](https://github.com/es-shims/String.prototype.padLeft) / [String.prototype.padRight](https://github.com/es-shims/String.prototype.padRight)
Proposal, specs, tests, and reference implementation for String.prototype.padLeft/padRight.

This [initial](http://wiki.ecmascript.org/doku.php?id=strawman:string_padding) proposal was drafted by [@KevinGrandon](https://github.com/kevingrandon) with input from [@rwaldron](https://github.com/rwaldron) and [@dherman](https://github.com/dherman).
Updated spec drafted by [@ljharb](https://github.com/ljharb) with input from [@rwaldron](https://github.com/rwaldron), [@allenwb](https://github.com/allenwb), and [@dherman](https://github.com/dherman).

Designated TC39 reviewers: @littledan @michaelficarra

## Rationale
Without a reasonable way to pad a string using native methods, working with JavaScript strings today is more painful than it should be. Without these functions, the language feels incomplete, and is a paper cut to what could be a very polished experience.

Due to common use, string padding functions exist in a majority of websites and frameworks. For example, nearly every app in FirefoxOS had implemented a left pad function, because they all needed some generic string padding operation.

It is highly probable that the majority of current string padding implementations are inefficient. Bringing this into the platform will improve performance of the web, and developer productivity as they no longer have to implement these common functions.

## Spec
You can view the spec in [markdown format](spec.md) or rendered as [HTML](http://tc39.github.io/proposal-string-pad-left-right/).

## Naming
For consistency with [trimLeft/trimRight](https://github.com/sebmarkbage/ecmascript-string-left-right-trim), and `reduce`/`reduceRight`, despite the existence of `startsWith`/`endsWith`, we have settled on `padRight` and `padLeft`.

## Semantics of "min length" vs "max length"
While updating this proposal with spec language, we discussed at length whether the first parameter should determine the minimum length or the maximum length of the padded string. Specifically, "min length" semantics says `'foo'.padRight(4, '12')` would output `foo12`, and "max length" semantics would output `foo1`. Since one of the primary use cases of `padLeft`/`padRight` is for formatting monospaced text in columns, and since "min length" semantics can be achieved via `String#repeat`, we decided that "max length" was the far more useful approach.

## Left padding, with respect to the fill string: consistency with other languages
Per [#6](https://github.com/tc39/proposal-string-pad-left-right/issues/6), the only languages we found that support multiple character fill strings that provide both "left" and "right" functionality are Ruby and PHP. Both language’s form of “pad on the left” takes the *first* part of the fill string, not the last. The clear example of why this matters is: `"abc".padLeft(10, "0123456789")` - taking the last part of the fill string gives `"3456789abc"`, whereas taking the first part gives `"0123456abc"`. In other words, `string.padLeft(mask.length, mask)` should do what one expects.
