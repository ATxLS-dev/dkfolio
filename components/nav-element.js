const navElement = document.createElement('template');

navElement.innerHTML = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa">
    <style>
        nav {
            background-color: #ffffff;
            overflow: hidden;
            position: fixed;
            top: 0;
            display: flex;
            width: 100%;
            height: 5em;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
        }

        h1 {
            flex-shrink: 0;
            padding-left: 1em;
        }

        h1 a {
            font-size: 24px;
        }

        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-basis: 40%
        }
        
        a {
            color: #0b0b0b;
            text-align: center;
            padding: 14px 0px;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 17px;
            flex-shrink: 0;
            justify-self: flex-end;
        }
        
        a:hover {
            border-top: 1px solid;
            border-color: #0b0b0b;
            color: black;
        }
        
        a.active {
            border-bottom: 1px solid;
            border-color: #0b0b0b;
            color: black;
        }
    </style>
    <nav>
        <h1>
            <a href="../dkfolio.html">Kormylo Photography</a>
        </h1>
        <ul>
            <a href="../about.html">ABOUT US</a>
            <a href="../portfolio.html">PORTFOLIO</a>
            <a href="../projects.html">PROJECTS</a>
            <a href="../store.html">STORE</a>
            <a href="../contact.html">CONTACT US</a>
        </ul>
    </nav >
`;

class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(navElement.content);
    }
}

customElements.define('nav-component', Nav);
