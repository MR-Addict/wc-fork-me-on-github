# WC Fork me on Github ![npm](https://img.shields.io/npm/v/wc-fork-me-on-github)

A web component that displays a "Fork me on Github" ribbon.

## Installation

You can install the component via npm:

```sh
pnpm install wc-fork-me-on-github
```

And then import it in your JavaScript:

```js
import "wc-fork-me-on-github";
```

Or if you prefer to use it as a script tag, you can include it directly from a CDN:

```html
<script type="module" src="https://unpkg.com/wc-fork-me-on-github/index.js"></script>
```

## Usage

Now, you can use the `<fork-me-on-github>` element in your HTML:

```html
<wc-fork-me-on-github repository="MR-Addict/wc-fork-me-on-github"></wc-fork-me-on-github>
```

## Attributes

- **`repository`**: The Github repository in the format `owner/repo`. This is required to display the ribbon correctly.
- **`position`**: The position of the ribbon. Options are `right-top(default)`, `right-bottom`, `left-top`, and `left-bottom`.
- **`ribbon`**: The text to display on the ribbon. Defaults to "Fork me on Github".
- **`color`**: The color of the ribbon. Defaults to `#a00`. Any valid CSS color value can be used here.
- **`darkColor`**: If not set, it will default to the same value as `color`.
