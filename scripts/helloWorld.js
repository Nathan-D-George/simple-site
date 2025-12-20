class HelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.querySelectorAll('button').forEach(button =>    
            button.addEventListener('click', this.onClick.bind(button))
        );
    }

    onClick() {
        const imageToShowId = `hidden${this.id.replace('show','')}`;
        const imageToShow = document.getElementById(imageToShowId);

        if (!imageToShow) {
            return;
        }

        imageToShow.style.display == 'none'
            ? imageToShow.style.display = 'block'
            : imageToShow.style.display = 'none';
    }
}

customElements.define('hello-world', HelloWorld);
