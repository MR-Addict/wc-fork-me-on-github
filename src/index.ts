import ribbonStyles from "github-fork-ribbon-css/gh-fork-ribbon.css?inline";

import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

const positions = ["right-top", "left-top", "left-bottom", "right-bottom"] as const;
type Position = (typeof positions)[number];

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
