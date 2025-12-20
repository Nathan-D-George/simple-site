class UpdateUrl extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.updateUrl();
    }

    updateUrl() {
        const currentUrl = window.location.pathname;
        const newUrl = currentUrl.replaceAll('.html', '');
        window.history.pushState(null, '', newUrl);
    }
}

customElements.define('update-url', UpdateUrl);
