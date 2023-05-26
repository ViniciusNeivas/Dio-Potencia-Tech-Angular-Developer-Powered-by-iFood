import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   name: string = 'BULBASAUR'
   attributesTypes: string[] = ['FIRE', 'ROCK']
  constructor() { }

  ngOnInit(): void {
  }

}