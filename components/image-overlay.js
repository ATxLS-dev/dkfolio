const imageOverlay = document.createElement('template');

imageOverlay.innerHTML = /*html*/`
    <style>
    #overlay div{
        display: grid;
        width: 100%;
        height: 100%;
        position: fixed;
        grid-template-columns: 1fr 8fr 1fr;
        grid-template-rows: auto;
        place-items: center;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.8);
        left: 0;
        top: 0;
        animation-duration: 0.5s;
        animation-name: fadeInFromNone;
        animation-fill-mode: forwards;
        -webkit-animation-duration: 0.5s;
        -webkit-animation-name: fadeInFromNone;
        -webkit-animation-fill-mode: forwards;
        -ms-animation-duration: 0.5s;
        -ms-animation-name: fadeInFromNoneIE;
        -ms-animation-fill-mode: forwards;
    }
    
    #overlay img {
        height: auto;
        maxHeight: 100%;
        maxWidth: 100%;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    @-webkit-keyframes fadeInFromNone {
        0% {
            opacity: 0
        }

        1% {
            opacity: 0
        }

        100% {
            opacity: 1
        }
    }

    @keyframes fadeInFromNoneIE {
        0% {
            opacity: 0
        }

        1% {
            opacity: 0
        }

        100% {
            opacity: 1
        }
    }

    @keyframes fadeInFromNone {
        0% {
            opacity: 0
        }

        1% {
            opacity: 0
        }

        100% {
            opacity: 1
        }
    }
    </style>
    <div id="overlay" onclick="hideImageOverlay()"></div>
    
`

class ImageOverlay extends HTMLDivElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(imageOverlay.content);
    }
}

customElements.define('image-overlay', Div);


function showImageOverlay(img_id) {
    imageOverlay(img_id);
    document.getElementById("overlay").style.display = "grid";
}

function hideImageOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function imageOverlay(img_id) {

    const imageOverlay = document.createElement("div");
    imageOverlay.innerHTML = `
        <style>
        #overlay div{
            display: grid;
            width: 100%;
            height: 100%;
            position: fixed;
            grid-template-columns: 1fr 8fr 1fr;
            grid-template-rows: auto;
            place-items: center;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.8);
            left: 0;
            top: 0;
            animation-duration: 0.5s;
            animation-name: fadeInFromNone;
            animation-fill-mode: forwards;
            -webkit-animation-duration: 0.5s;
            -webkit-animation-name: fadeInFromNone;
            -webkit-animation-fill-mode: forwards;
            -ms-animation-duration: 0.5s;
            -ms-animation-name: fadeInFromNoneIE;
            -ms-animation-fill-mode: forwards;
        }
          
        #overlay img {
            height: auto;
            maxHeight: 100%;
            maxWidth: 100%;
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        }

        @-webkit-keyframes fadeInFromNone {
            0% {
                opacity: 0
            }

            1% {
                opacity: 0
            }

            100% {
                opacity: 1
            }
        }

        @keyframes fadeInFromNoneIE {
            0% {
                opacity: 0
            }

            1% {
                opacity: 0
            }

            100% {
                opacity: 1
            }
        }

        @keyframes fadeInFromNone {
            0% {
                opacity: 0
            }

            1% {
                opacity: 0
            }

            100% {
                opacity: 1
            }
        }
        </style>

    `

    const image = document.createElement("img");
    image.src = img_id;
    image.alt = "Image not found";

    imageOverlay.appendChild(image);
    document.getElementById("overlay").appendChild(imageOverlay);
}


