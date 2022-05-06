export class Post {

    constructor(id, price, age, image) {
        this.id = id;
        this.price = price;
        this.age = age;
        this.image = image;

        this.postContainer = null;
    }


    draw(host){

        if (!host)
            throw new Error("Host is not defined");

        this.postContainer = document.createElement("div");
        this.postContainer.className = `post post${this.id}`;

        const image = document.createElement("img");
        image.src = this.image;
        this.postContainer.appendChild(image);

        const infoDiv = document.createElement("div");
        infoDiv.className = "infoDiv";

        let container = document.createElement("label");
        container.innerHTML = `${this.age}+`;
        container.className = "age";
        infoDiv.appendChild(container);

        container = document.createElement("label");
        container.className = "space";
        infoDiv.appendChild(container);

        container = document.createElement("label");
        container.innerHTML = this.price;
        container.className = "price";
        infoDiv.appendChild(container);

        this.postContainer.appendChild(infoDiv);

        host.appendChild(this.postContainer);
        
    }
}