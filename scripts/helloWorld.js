class HelloWorld extends HTMLElement {

    constructor() {
        super();

        this.querySelectorAll('button').forEach(button =>    
            button.addEventListener('click', this.onClick())
        );
    }

    conectedCallback() {
        console.log("Hello World");
    }

    onClick() {
        console.log("button clicked");
    }
}

customElements.define('hello-world', HelloWorld);