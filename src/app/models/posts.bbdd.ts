export class Post {

    title: string;
    author: string;
    image: string;
    category: string;
    textArea: string

    constructor(
        title: string,
        author: string,
        image: string,
        category: string,
        textArea: string) {
        this.title = title;
        this.author = author;
        this.image = image;
        this.category = category;
        this.textArea = textArea
    }
}