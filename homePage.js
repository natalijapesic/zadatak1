export class HomePage {

    constructor(name, logo) {
        this.name = name;
        this.logo = logo;

        this.container = null;
        this.posts = [];

        this.filteredPosts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

    draw(host) {

        if (!host)
            throw new Error("Host is not defined");

        this.container = document.createElement("div");
        this.container.className = `homePage ${this.name}`;
        host.appendChild(this.container);

        const header = document.createElement("div");
        header.className = "header";
        header.innerHTML = this.name;
        this.container.appendChild(header);

        const space = document.createElement("div");
        space.className = "headerSpace";
        header.appendChild(space);

        const logo = document.createElement("img");
        logo.src = this.logo;
        logo.className = "logo";
        header.appendChild(logo);

        const page = document.createElement("div");
        page.className = "page";
        this.container.appendChild(page);

        const filterBar = document.createElement("div");
        filterBar.className = "filterBar";
        page.appendChild(filterBar);



        const postsContainer = document.createElement("div");
        postsContainer.className = "posts";

        this.drawAgeFilter(filterBar);

        page.appendChild(postsContainer);

        this.drawPosts(this.posts, postsContainer);

        this.drawPriceFilter(filterBar);

        this.reset(filterBar);
    }


    drawPosts(currentPosts, postsContainer) {

        currentPosts.forEach(post => {
            post.draw(postsContainer);
        });
    }


    drawAgeFilter(filterBar) {

        let list = [0, 3, 6, 10];
        let labelDiv = null;
        let input = null;
        let label = null;

        let ageFilter = document.createElement("div");
        ageFilter.className = "ageFilter";
        filterBar.appendChild(ageFilter);

        let p = document.createElement("p");
        p.innerHTML = "Age:";
        p.className = "p-age";
        ageFilter.append(p);

        let filter = document.createElement("div");
        filter.className = "filter";
        ageFilter.appendChild(filter);

        list.forEach(el => {
            labelDiv = document.createElement("div");
            labelDiv.className = "radioDiv";
            filter.appendChild(labelDiv);

            input = document.createElement("input");
            input.className = "radio";
            input.type = "radio";
            input.value = el;
            input.name = this.name;
            input.addEventListener("change", this.filterPostsByAge.bind(this));
            labelDiv.appendChild(input);

            label = document.createElement("label");
            label.innerHTML = el;
            label.className = "radioLabel";
            labelDiv.appendChild(label);
        });
    }

    filterPostsByAge(request) {
        this.filteredPosts = this.posts.filter(post => post.age > request.currentTarget.value);
        console.log(this.filteredPosts);

        let postsContainer = this.container.querySelector('.posts');
        postsContainer.innerHTML = '';
        this.drawPosts(this.filteredPosts, postsContainer);
    }

    drawPriceFilter(host) {

        const p = document.createElement("p");
        p.innerHTML = "Price:";
        p.className = "p-price";
        host.appendChild(p);

        const priceDiv = document.createElement("div");
        priceDiv.className = "priceDiv";
        host.appendChild(priceDiv);

        let label = document.createElement("label");
        label.innerHTML = 0;
        priceDiv.appendChild(label);

        const input = document.createElement("input");
        input.type = "range";
        input.min = 0;
        input.max = 10000;
        input.className = "rangeInput";
        priceDiv.appendChild(input);

        label = document.createElement("label");
        label.innerHTML = 10000;
        priceDiv.appendChild(label);

        input.addEventListener("change", this.filterPostsByPrice.bind(this));

    }

    filterPostsByPrice(request) {

        this.filteredPosts = this.posts.filter(post => post.price > request.currentTarget.value);
        console.log(this.filteredPosts);

        let postsContainer = this.container.querySelector('.posts');
        postsContainer.innerHTML = '';
        this.drawPosts(this.filteredPosts, postsContainer);
    }

    reset(host) {

        let resetDiv = document.createElement("div");
        resetDiv.className = "reset";
        host.appendChild(resetDiv);

        const label = document.createElement("label");
        label.innerHTML = "Reset all filters";
        resetDiv.appendChild(label);

        const button = document.createElement("button");
        button.innerHTML = "X";
        button.className = "reset";

        button.onclick = (e) => {
            this.filteredPosts = this.posts;
            console.log(this.filteredPosts);

            let postsContainer = this.container.querySelector('.posts');
            postsContainer.innerHTML = "";

            this.drawPosts(this.posts, postsContainer);
        }

        resetDiv.appendChild(button);
    }

}