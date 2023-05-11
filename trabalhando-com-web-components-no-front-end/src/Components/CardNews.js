class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
        
        const author = document.createElement("span");
        author.textContent = `By ${this.getAttribute("autor") || "Anonymouns"}`;

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-avatar-profile-icon-vector.jpg"
        newsImage.alt = "Foto da notícia"
        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);



        return componentRoot;
    }

    style(){
        const style = document.createElement("style"); 
        style.textContent = `
        .card {
            width: 90%;
            border: 1px solid gray;
            box-shadow: 12px 15px 8px 3px rgba(0, 0, 0, 0.66);
            -webkit-box-shadow: 12px 15px 8px 3px rgba(0, 0, 0, 0.66);
            -moz-box-shadow: 12px 15px 8px 3px rgba(0, 0, 0, 0.66);
            display: flex;
            flex-direction: row;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left>a {
            margin-top: 1rem;
            font-size: 2rem;
            text-decoration: none;
            color: black;
            font-weight: 700;
        }
        
        .card__left>p {
            color: rgb(70, 70, 70);
            padding: 10px 10px 0 0 ;
            
        }
        
        .card__left>span {
            font-weight: 400;
        }
        `
        return style;
    }
}

customElements.define('card-news', Cardnews);