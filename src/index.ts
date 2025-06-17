import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import ribbonStyles from "github-fork-ribbon-css/gh-fork-ribbon.css?inline";

const positions = ["right-top", "left-top", "left-bottom", "right-bottom"] as const;
type Position = (typeof positions)[number];

@customElement("wc-fork-me-on-github")
export class WcForkMeOnGithub extends LitElement {
  static styles = css`
    ${unsafeCSS(ribbonStyles)}

    .github-fork-ribbon::before {
      background-color: var(--color);
    }

    @media (prefers-color-scheme: dark) {
      .github-fork-ribbon::before {
        background-color: var(--dark-color, var(--color));
      }
    }
  `;

  /**
   * The Github repository to link to.
   *
   * It should be in the format "owner/repository".
   */
  @property({ type: String })
  repository: string = "";

  /**
   * The position of the ribbon on the page.
   *
   * Options are:
   * - "right-top" (default)
   * - "left-top"
   * - "left-bottom"
   * - "right-bottom"
   */
  @property({ type: String })
  position: Position = "right-top";

  /**
   * The text to display on the ribbon.
   *
   * Defaults to "Fork me on Github".
   */
  @property({ type: String })
  ribbon: string = "Fork me on Github";

  /**
   * The color of the ribbon.
   *
   * Defaults to `#a00`.
   *
   * Any valid CSS color value can be used here, such as:
   * - "red"
   * - "#ff0000"
   * - "rgb(255, 0, 0)"
   * - "hsl(0, 100%, 50%)"
   */
  @property({ type: String })
  color: string = "#a00";

  /**
   * The dark mode color of the ribbon.
   *
   * If not set, it will default to the same value as `color`.
   */
  @property({ type: String })
  darkColor?: string;

  attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
    super.attributeChangedCallback(name, _old, value);
    if (name === "repository") {
      if (!value) throw new Error("The 'repository' attribute must not be empty.");
      const match = value.match(/^([^/]+)\/([^/]+)$/);
      if (!match) throw new Error("The 'repository' attribute must be in the format 'owner/repository'.");
    }

    if (name === "position" && !positions.includes(value as Position)) {
      throw new Error(`Invalid 'position' attribute value. Expected one of ${positions.join(", ")}.`);
    }
  }

  render() {
    return html`<a
      target="_blank"
      title="${this.ribbon}"
      data-ribbon="${this.ribbon}"
      style="--color: ${this.color}; --dark-color: ${this.darkColor || this.color};"
      href="https://github.com/${this.repository}"
      class="github-fork-ribbon fixed ${this.position}"
    >
      ${this.ribbon}
    </a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-fork-me-on-github": WcForkMeOnGithub;
  }
}
