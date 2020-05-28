import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../formulario.service';
import { Post } from '../models/posts.bbdd';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPosts: Post[];

  constructor(private formularioService: FormularioService) { }

  async ngOnInit() {
    this.arrPosts = await this.formularioService.getPosts();
  }

  onClick(Page: Post) {
    this.formularioService.getDelete(Page);
  }

  async onChange($event) {
    if ($event.target.value === 'AllPosts') {
      this.arrPosts = await this.formularioService.getPosts()
    } else {
      this.arrPosts = await this.formularioService.getPostCategorys($event.target.value);
    }
  }





}
