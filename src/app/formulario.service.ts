import { Injectable } from '@angular/core';
import { Post } from './models/posts.bbdd';




@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  arrPosts: Post[];


  constructor() {
    this.arrPosts = [
      {
        title: 'Elon Musk',
        author: 'Alex Joshua',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/250px-Elon_Musk_Royal_Society.jpg',
        category: 'Tech',
        textArea: 'Elon Reeve Musk (Pretoria, Sudáfrica; 28 de junio de 1971) es un físico, emprendedor, inventor y magnate sudafricano, nacionalizado canadiense y estadounidense. Cofundador de PayPal, Tesla Motors, SpaceX, Hyperloop, SolarCity, The Boring Company, Neuralink, y OpenAI. Es director general de SpaceX, de Tesla Motors, presidente de SolarCity, y copresidente de OpenAI. En febrero de 2020 su fortuna se estimaba en 43 300 millones de USD, lo que le convertía en la 19ª persona más rica del mundo. En diciembre de 2016, Musk fue nombrado como la 21ª persona más poderosa del mundo por la revista Forbes.'
      },
      {
        title: 'Angular',
        author: 'Alex Joshua',
        image: 'https://miro.medium.com/max/3000/1*-f6StBRZQiuOAz7fdqWFKw.png',
        category: 'Programming',
        textArea: 'Cuando un arquitecto de software (en esta caso frontend) debe partir un proyecto, debe estar consciente de que en alguna oportunidad el proyecto se torna muy grande, la estructura de carpetas debe ser escalable para evitar desorden en cuanto a desarrollo. Esta fue mi meta cuando partí estudiando Angular. Empecé trabajando con angular-cli creando un proyecto desde cero, y así construir una manera escalable y limpia de mantener la arquitectura del proyecto. Este documento contempla la manera de crear una aplicación en Angular que sea escalable y con varias librerías que aportan la estabilidad. Acá partiremos un proyecto desde cero hasta lo más complejo. En este caso el código fuente del proyecto se encuentra cargado en github el cual tiene 3 ramas que muestra los pasos principales que se mostrará a continuación.'
      },
      {
        title: 'Best Python Libraries for Machine Learning and Deep Learning',
        author: 'Alex Joshua',
        image: 'https://miro.medium.com/max/1400/1*RIrPOCyMFwFC-XULbja3rw.png',
        category: 'Machine_learning',
        textArea: 'TENSOR FLOW, KERAS, PyTORCH: Machine Learning and Deep Learning have been on the rise recently with the push in the AI industry and the early adopters of this technology are beginning to see it bear its fruits. As more and more businesses jump into the bandwagon and start investing their time and efforts into realizing the potential of this untapped domain, the better this is going to get for the developers working in the area. Several programming languages can get you started with AI, ML and DL with each language offering stronghold on a specific concept. Some of the popular programming languages for ML and DL are Python, Julia, R, Java along with a few more. As for now, we’ll be focussing more on Python.'
      },
      {
        title: 'Node JS V8 JavaScript of Google',
        author: 'Alex Joshua',
        image: 'https://miro.medium.com/max/4608/1*qwoA9FmZDrE5q--_9qqBCQ.jpeg',
        category: 'Programming',
        textArea: 'Node.js es el intérprete que corre del lado del servidor encargado de convertir código Javascript a código máquina, esta construido en torno al motor de Javascript V8 de Google y posee la comunidad más grande de desarrolladores debido a su rápida curva de aprendizaje, ya que no requieres aprender un nuevo lenguaje de programación para comenzar a usarlo. Debido a su gran comunidad, a diario se están creando nuevas herramientas y las actualizaciones se encuentran al orden del día, razón por la cual es necesario tener una herramienta que nos permita gestionar todos estos nuevos módulos de una manera fácil y limpia. Para esto se crea npm, el manejador de paquetes de Node que nos permite buscar, instalar, compartir y publicar dependencias y tiene diferentes planes tanto gratis como de paga para acceder a diferentes funcionalidades'
      }
    ];
  }

  getAddPost(post: Post) {
    this.arrPosts.push(post);
    const posts = JSON.stringify(this.arrPosts)
    localStorage.setItem('posts', posts)
    console.log(posts);
  }

  getPosts(): Promise<Post[]> {
    return new Promise((resolve) => {
      if (localStorage.getItem('productos')) {
        const posts = JSON.parse(localStorage.getItem('posts'))
        this.arrPosts = posts
      }
      resolve(this.arrPosts)
    })
  }

  getPostCategorys(category: string): Promise<Post[]> {
    return new Promise((resolve) => {
      let CategoryFilter = this.arrPosts.filter(post => {
        return post.category === category
      })
      console.log(CategoryFilter)
      resolve(CategoryFilter);
    })
  }

  getDelete(Page: Post) {
    for (let i = 0; i < this.arrPosts.length; i++) {
      Page === this.arrPosts[i] ? this.arrPosts.splice(i, 1) : alert('El contenido no se puede borrar');
    }
  }
}


