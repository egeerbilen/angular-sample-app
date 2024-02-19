import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  dateTryPipe = new Date();

  sampleItems: Array<{ id: number; name: string; description: string }> = [
    { id: 1, name: 'Apple', description: 'A fruit that is red or green' },
    { id: 2, name: 'Banana', description: 'A long curved fruit that is yellow' },
    { id: 3, name: 'Orange', description: 'A citrus fruit with a tough shiny orange skin' },
    { id: 4, name: 'Grapes', description: 'Small juicy berries usually purple, green, or red' },
    { id: 5, name: 'Watermelon', description: 'A large green fruit with juicy red flesh and black seeds' },
    { id: 6, name: 'Strawberry', description: 'A small sweet red fruit with seeds on the surface' }
  ];
  searchText = '';
}
