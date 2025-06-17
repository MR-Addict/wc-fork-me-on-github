# WC Fork me on Github

A web component that displays a "Fork me on Github" ribbon.

## Installation

You can install the component via npm:

```bash
npm install wc-fork-me-on-github
```

If you are using a module bundler, you can import the component in your JavaScript or TypeScript files:

```js
import "wc-fork-me-on-github";
```

Or you can directly include the script in your HTML:

```html
<script type="module" src="https://unpkg.com/wc-fork-me-on-github"></script>
```

## Usage

Then, you can use the `<fork-me-on-github>` element in your HTML:

```html
<wc-fork-me-on-github repository="MR-Addict/wc-fork-me-on-github"></wc-fork-me-on-github>
```

Attributes:

- `repository`: The Github repository in the format `owner/repo`. This is required to display the ribbon correctly.
- `position`: The position of the ribbon. Options are `right-top(default)`, `right-bottom`, `left-top`, and `left-bottom`.
- `ribbon`: The text to display on the ribbon. Defaults to "Fork me on Github".

## References

Thanks to the original creator, Simon Whitaker, for the [Fork me on Github](https://github.com/simonwhitaker/github-fork-ribbon-css) which I used to bundle into this component.
