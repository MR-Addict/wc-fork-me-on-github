// @ts-expect-error
import ribbonStyles from "github-fork-ribbon-css/gh-fork-ribbon.css?inline";

import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("wc-fork-me-on-github")
export class WcForkMeOnGithub extends LitElement {
  static styles = unsafeCSS(ribbonStyles);

  @property({ type: String })
  ribbon: string = "Fork me on Github";

  @property({ type: String })
  username: string = "";

  @property({ type: String })
  position: "right-top" | "left-top" | "left-bottom" | "right-bottom" = "right-top";

  render() {
    return html`<a
      target="_blank"
      title="${this.ribbon}"
      data-ribbon="${this.ribbon}"
      class="github-fork-ribbon fixed ${this.position}"
      href="https://github.com/${this.username}"
    >
      Fork me on Github
    </a>`;
  }
}
