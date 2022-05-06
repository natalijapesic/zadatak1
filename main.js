import { Post } from "./post.js";
import { HomePage } from "./homePage.js";

const post1 = new Post(1, 1000, 3, "./src/image1.jpg");
const post2 = new Post(2, 5000, 4, "./src/image2.jpg");
const post3 = new Post(3, 4020, 7, "./src/image3.jpeg");
const post4 = new Post(4, 3500, 9, "./src/image4.jpg");

const homePage = new HomePage("Domaci zadatak", "./src/logo2.png");
homePage.addPost(post1);
homePage.addPost(post2);
homePage.addPost(post3);
homePage.addPost(post4);

homePage.draw(document.body);
