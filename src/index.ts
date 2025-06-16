import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("wc-fork-me-on-github")
export class WcForkMeOnGithub extends LitElement {
  static styles = css`
    :host {
      color: red;
    }
  `;

  @property()
  name?: string = "World";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
