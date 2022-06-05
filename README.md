# light-dom-element

is covering the typical UI tasks:
populate html slots into template using Light DOM ( acting as 
[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) 
but without CSS insulation ).
Slots content and template could be local in the page or pointed via URL.

* fetch via [fetch() api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* `promise` property resolved when template is applied.

[![git](https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg) GitHub](https://github.com/sashafirsov/light-dom-element)
| Demo: [light-dom-element](https://unpkg.com/light-dom-element@0.0.7/index.html)
| [tests project](https://github.com/sashafirsov/light-dom-element-test)

[![NPM version][npm-image]][npm-url]
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/light-dom-element)
[![coverage][coverage-image]][coverage-url]

## Where to use
`light-dom-element` is simplest web component to render HTML `template` and `slot`. 

It is meant for displaying the static content in the page or available during page load via URL. 

You do not need a [static site generator](https://www.cloudflare.com/learning/performance/static-site-generator/)
as most of "components" could be expressed via template in own file.

[File the issue](https://github.com/sashafirsov/light-dom-element/issues) 
if need a site sample based on html templates or have your own to be shared. 


# Use
## install
    npm i -P light-dom-element
## or use from CDN
```js
    <script type="module" scr="https://unpkg.com/light-dom-element@0.0/light-dom-element.js"></script>
```
The size of [light-dom-element.js](https://unpkg.com/light-dom-element@0.0/light-dom-element.js) 
is 1.6Kb, [compiled](https://unpkg.com/light-dom-element-test@0.0/dist/src/light-dom-element.js) to 1Kb. 
 

## API
* `promise` resolved when template and slots loaded and rendered
* `slotsInit()` initiates template and slots reading and rendering, returns `Promise<this>`
* `fetch( url )` override to load and process URL before returning a HTML string with data within slots.
Handy to use the JSON or XML as data source. Note, there is no error handling, you have to cover that case by template
and error slots. For that you could find [slotted-element](https://github.com/sashafirsov/slotted-element) handy as it 
is designed for loading life cycle.
* `applyTemplate( templateNode )` applies template to slots in sub-dom of this element. 

### Attributes
all attributes reflected as component properties
* `srcset` id of container with slots
* `src` url for html with slots
* `for` id for html template
* `code` url for html template


# test and demo
reside in separate repository https://github.com/sashafirsov/ligh-dom-element-test to avoid unnecessary dependency in 
source repo and npm. 

Minimal functionality local demo is available in [demo/](demo/index.html) which could be run by
```bash
npm start
```

# Typescript
`import LightDomElement from 'light-dom-element'` code has [typings](light-dom-element.d.ts) along with JSDoc enabled. 

# dependencies
`shadow-dom-element`, `css-chain`

[npm-image]:      https://img.shields.io/npm/v/light-dom-element.svg
[npm-url]:        https://npmjs.org/package/light-dom-element
[coverage-image]: https://unpkg.com/light-dom-element-test@0.0.7/coverage/coverage.svg
[coverage-url]:   https://unpkg.com/light-dom-element-test@0.0.7/coverage/lcov-report/index.html
