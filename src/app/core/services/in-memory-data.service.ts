import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  public createDb() {
    const menuItems = [
      {id: 'all', name: 'Все'},
      {id: 'raincoats', name: 'Плащи'},
      {id: 'sneakers', name: 'Кроссовки'},
      {id: 'shirts', name: 'Рубашки'},
      {id: 'pants', name: 'Брюки'}
    ];

    const filterItems = [
      {id: 'decrease', name: 'От дорогих к дешевым'},
      {id: 'increase', name: 'От дешевых к дорогим'},
      {id: 'popular', name: 'Популярные'},
      {id: 'new', name: 'Новые'},
    ];

    const productItems = {
      raincoats: [
      ],
      sneakers: [
        {
          photos: ['img-3.png', 'img-5.png', 'img-2.png'],
          price: 240,
          name: 'Кроссовки «Kaiwa» Y3 x Adidas',
          category: 'Кроссовки',
          count: 124,
          date: 'Sun Jun 14 2020',
          popularity: 0.2,
          id: '1'
        },
        {
          photos: ['img-5.png', 'img-2.png'],
          price: 390,
          name: 'Кроссовки с пряжками',
          category: 'Кроссовки',
          count: 11,
          date: 'Sun Jun 2 2020',
          popularity: 0.6,
          id: '2'
        }
      ],
      shirts: [
        {
          photos: ['img-2.png', 'img-3.png', 'img-5.png', 'img-1.png', 'img-4.png', 'img-6.png'],
          price: 390,
          name: 'Рубашка на пуговицах',
          category: 'Рубашки',
          count: 20,
          date: 'Sun Jun 01 2020',
          popularity: 0.7,
          id: '3'
        },
        {
          photos: ['img-1.png', 'img-2.png', 'img-3.png', 'img-5.png', 'img-4.png', 'img-6.png'],
          price: 170,
          name: 'Рубашка с принтом',
          category: 'Рубашки',
          count: 11,
          date: 'Sun Jun 9 2020',
          popularity: 0.5,
          id: '4'
        },
        {
          photos: ['img-4.png', 'img-1.png', 'img-2.png', 'img-3.png', 'img-5.png', 'img-4.png', 'img-1.png', 'img-2.png', 'img-3.png'],
          price: 1240,
          name: 'куртка-рубашка с карманами',
          category: 'Рубашки',
          count: 11,
          date: 'Sun Jun 10 2020',
          popularity: 0.9,
          id: '5'
        }
      ],
      pants: [
        {
          photos: ['img-6.png'],
          price: 647,
          name: 'Укороченные зауженные брюки',
          category: 'Брюки',
          count: 7,
          date: 'Sun Jun 11 2020',
          popularity: 0.4,
          id: '6'
        }
      ]
    };

    return {menuItems, productItems, filterItems};
  }
}

