import ribbonStyles from "github-fork-ribbon-css/gh-fork-ribbon.css?inline";

import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("wc-fork-me-on-github")
export class WcForkMeOnGithub extends LitElement {
  static styles = unsafeCSS(ribbonStyles);

  /**
   * The text to display on the ribbon.
   *
   * Defaults to "Fork me on Github".
   */
  @property({ type: String })
  ribbon: string = "Fork me on Github";

  /**
   * The GitHub repository to link to.
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
  position: "right-top" | "left-top" | "left-bottom" | "right-bottom" = "right-top";

  render() {
    return html`<a
      target="_blank"
      title="${this.ribbon}"
      data-ribbon="${this.ribbon}"
      class="github-fork-ribbon fixed ${this.position}"
      href="https://github.com/${this.repository}"
    >
      Fork me on Github
    </a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-fork-me-on-github": WcForkMeOnGithub;
  }
}
