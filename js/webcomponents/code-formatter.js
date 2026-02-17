class CodeFormatter extends HTMLElement {
  connectedCallback() {
    this.processContent();
  }

  getContent() {
    return this.innerHTML;
  }

  processContent() {
    const content = this.getContent();
    // Your processing logic here
  }

  // Add public methods
  refresh() {
    this.processContent();
  }

  setContent(newContent) {
    this.innerHTML = newContent;
    this.processContent();
  }
}

customElements.define("code-formatter", CodeFormatter);
