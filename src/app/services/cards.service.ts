import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor() {}

  cards = [
    {
      _id: '6333820e8456f600165dc8a8',
      description: '1 Litro C/manija 24hs Frio/calor',
      title: 'Termo Stanley Classic',
      price: '240',
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IsmaUJqr3tuwQNkhmNE_o87RkiGlt4XQmA&usqp=CAU',
      quantity: 1,
      total: '240',
      undeleteable:true
    },
    {
      _id: '6333820e8456f600165dc8a8',
      description: 'Tazas con frase',
      title: 'Tazas Frases',
      price: '10',
      photo:'https://duniapol.com.ar/wp-content/uploads/2020/11/2-600x600.jpg',
      quantity: 1,
      total: '200',
      undeleteable:true
    },
    {
      _id: '6333820e8456f600165dc8a8',
      description: 'oreo cookies',
      title: 'oreo',
      price: '5',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlttdd84Q6WvEpH24FMfoQ8Y2Rg3vKn-hKGw&usqp=CAU',
      quantity: 1,
      total: '200',
      undeleteable:true
    },
    {
      _id: '6333820e8456f600165dc8a8',  
      description: 'coca cola,coca zero or coca cola ligth',
      title: 'coca cola',
      price: '20',
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-ICGGrJymnBzC83DUMeYoRbymh5SqJieHg&usqp=CAU',
      quantity: 1,
      total: '200',
      undeleteable:true
    },
  ];
}
