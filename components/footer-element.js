const footerElement = document.createElement('template')

footerElement.innerHTML = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa">
    <style>
        footer {
            display: flex;
            justify-content: flex-end;
            padding: 1em;
        }

    
    </style>
    <footer>
        <p>@kormylophotography</p>
    <footer>
`

class Footer extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    const shadowRoot = this.attachShadow({ mode: 'closed' })
    shadowRoot.appendChild(footerElement.content)
  }
}

customElements.define('footer-component', Footer)
