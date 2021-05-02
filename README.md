# js-snip

[![Build Status](https://travis-ci.com/ajobi/js-snip.svg?branch=master)](https://travis-ci.com/ajobi/js-snip)
![Coveralls github](https://img.shields.io/coveralls/github/ajobi/js-snip)
![GitHub issues](https://img.shields.io/github/issues/ajobi/js-snip)
![GitHub](https://img.shields.io/github/license/ajobi/js-snip)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/js-snip)

Universal JavaScript library for clamping HTML text elements.

#### Key features:
* two snipping approaches (CSS / JavaScript)
* no need to specify line heights
* no dependencies

## Installation

``` bash
# install with npm
npm install js-snip

# or with yarn
yarn add js-snip
```

## Usage

## Options

## How it works

- **CSS** approach is based on the `-webkit-line-clamp`.
- **JavaScript** approach is based on the progressive cutting of the element's `innerText` in a loop.

*Note: CSS approach is faster (preferred), but does not work in older browsers / in all situations (f.e. does not work in IE11, when you need the text to flow around a floated element, or when you want a custom ellipsis).*

### Caveats

For the library to be able to determine the number of lines / hide the text-overflow properly, the height of the element should be the same as the height of the text. Be wary of any CSS steps that will affect the height of the element. Some of the common examples:
* vertical paddings
* fixed height / fixed min-height
* making the element a flex-item (flex container's `align-items` defaults to `stretch`)
* making the element height grow with the `flex-grow` in the column flex layout.

*Note: You can still use the directive with flexbox, just make sure to change the default `align-items` / `align-self` value to `flex-start` or whatever fits your case.*

## Change Log
All changes are documented in the [change log](https://github.com/ajobi/js-snip/blob/master/CHANGELOG.md).
