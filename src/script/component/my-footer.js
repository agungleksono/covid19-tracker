class MyFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<p>Submission Fundamental Web &#169; 2020, Agung Dwi Leksono</p>`;
    }
}

customElements.define("my-footer", MyFooter);