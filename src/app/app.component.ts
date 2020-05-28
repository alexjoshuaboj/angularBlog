import { Component } from '@angular/core';
import { FormularioService } from './formulario.service';
import { Post } from './models/posts.bbdd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPosts: Post[];

  constructor(private formularioService: FormularioService) {
  }

  async onChange($event) {
    await this.formularioService.getPostCategory($event.target.value);
  }

}
