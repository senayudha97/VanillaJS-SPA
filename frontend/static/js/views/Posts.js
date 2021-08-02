import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
    <h1>Oage Posts</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quidem vero cum.
    </p>
    <p><a href="/posts" data-link>View recent posts</a></p>
    `;
  }
}
