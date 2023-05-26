import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //Injeção de dependencia
  constructor(
    private activeRoute: ActivatedRoute,
    private navigator: Router
     ) { 
    // Resgatar os dados que passam na url
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
    http://localhost:4200/portfolio/1?{name=felipe&token=123}
    // recupera informações da URL
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
    
    // volta a recuperar as informações da URL, se ao adicionar children parar de funcionar a obtenção de parametros
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

  }

  ngOnInit(): void {
    //retornar a uma página depois de um certo tempo
    // setInterval(() => {
    //   this.navigator.navigate(['/'])
    // },5000)
  }

}
