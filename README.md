# [String.prototype.padLeft](https://github.com/es-shims/String.prototype.padLeft) / [String.prototype.padRight](https://github.com/es-shims/String.prototype.padRight)
Proposal, specs, tests, and reference implementation for String.prototype.padLeft/padRight.

This [initial](http://wiki.ecmascript.org/doku.php?id=strawman:string_padding) proposal was drafted by [@KevinGrandon](https://github.com/kevingrandon) with input from [@rwaldron](https://github.com/rwaldron) and [@dherman](https://github.com/dherman).
Updated spec drafted by [@ljharb](https://github.com/ljharb) with input from [@rwaldron](https://github.com/rwaldron), [@allenwb](https://github.com/allenwb), and [@dherman](https://github.com/dherman).

## Rationale
Without a reasonable way to pad a string using native methods, working with JavaScript strings today is more painful than it should be. Without these functions, the language feels incomplete, and is a paper cut to what could be a very polished experience.

Due to common use, string padding functions exist in a majority of websites and frameworks. For example, nearly every app in FirefoxOS had implemented a left pad function, because they all needed some generic string padding operation.

It is highly probable that the majority of current string padding implementations are inefficient. Bringing this into the platform will improve performance of the web, and developer productivity as they no longer have to implement these common functions.

## Spec
You can view the spec in [markdown format](spec.md) or rendered as [HTML](http://ljharb.github.io/proposal-string-pad-left-right/).

## Naming
For consistency with [trimLeft/trimRight](https://github.com/sebmarkbage/ecmascript-string-left-right-trim)), and `reduce`/`reduceRight`, despite the existence of `startsWith`/`endsWith`, we have settled on `padRight` and `padLeft`.
