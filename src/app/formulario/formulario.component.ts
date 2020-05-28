import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioService } from '../formulario.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/posts.bbdd';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  post: Post;

  constructor(private formularioService: FormularioService, private httpClient: HttpClient) {
    this.formulario = new FormGroup({
      author: new FormControl('', [
        Validators.required
      ]),
      title: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
      textArea: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value)
  }

  onClick() {
    this.formularioService.getAddPost(this.formulario.value);
  }
}
