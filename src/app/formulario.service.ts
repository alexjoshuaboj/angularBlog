import { Injectable } from '@angular/core';
import { Post } from './models/posts.bbdd';




@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  arrPosts: Post[];


  constructor() {
    this.arrPosts = [];
  }

  getAddPost(post: Post) {
    this.arrPosts.push(post);
    const posts = JSON.stringify(this.arrPosts)
    localStorage.setItem('posts', posts)
    console.log(posts);
  }

  getPosts(): Promise<Post[]> {
    return new Promise((resolve) => {
      while (localStorage.getItem('productos')) {
        const posts = JSON.parse(localStorage.getItem('posts'))
        this.arrPosts = posts
      }
      resolve(this.arrPosts)
    })
  }

  /* getPostCategorys(category): Promise<Post[]> {
    return new Promise((resolve) => {
      const CategoryFilter = []
      this.arrPosts.filter((post) => {
        if (post.category === category) {
          CategoryFilter.push(post)
        } else {
          resolve(category);
        }
      })
    })
  } */
  /*  post.category === category ? CategoryFilter.push(post) : resolve(category); */

  getPostCategory(category): Promise<Post[]> {
    return new Promise((resolve) => {
      let arrFilter: Post[] = [];
      for (let post of this.arrPosts) {
        if (category === '') {
          arrFilter = this.arrPosts;
        }
        else if (post.category === category) {
          arrFilter.push(post);
        }
      }
      resolve(arrFilter);
      console.log(this.arrPosts);
    });
  }

  getDelete(posts: Post) {
    for (let i = 0; i < this.arrPosts.length; i++) {
      posts === this.arrPosts[i] ? this.arrPosts.splice(i, 1) : alert('El contenido no se puede borrar');
    }
  }

}
