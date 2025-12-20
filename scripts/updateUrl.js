class UpdateUrl extends HTMLElement {
    constructor() {
        super();
        if (window.location.origin.includes('github')) {
            this.updateUrl();
        }
    }

    updateUrl() {
        const currentUrl = window.location.pathname;
        const newUrl = currentUrl.replaceAll('.html', '');
        window.history.pushState(null, '', newUrl);
    }
}

customElements.define('update-url', UpdateUrl);
