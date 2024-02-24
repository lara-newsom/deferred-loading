import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  rowData = [
    { nickname: "Dumpster Goblin", name: "Stinky Feets", age: 12, color: 'tabby' },
    { nickname: "Barn Patrol", name: "Grandma", age: 3, color: 'buff torti' },
    { nickname: "Couch Slug", name: "Precious", age: 4.5, color: 'orange tabby' },
    { nickname: "Toilet Inspector", name: "Frank", age: 8, color: 'tuxedo' },
    { nickname: "Trash Panther", name: "Diana", age: 12, color: 'long hair grey' },
    { nickname: "Food Cop", name: "Paul Blart", age: 3, color: 'buff' },
    { nickname: "Princess", name: "Matthew", age: 9, color: 'siamese seal point' },
    { nickname: "Frisky Biscuit", name: "Cazador", age: 10, color: 'longhair orange' },
    { nickname: "Master Biscuit Maker", name: "Doodles", age: 2, color: 'brown tabby' },
    { nickname: "King Zoomies", name: "Flapjack", age: 1.5, color: 'orange tuxedo' },
    { nickname: "Crop Duster", name: "Bud", age: 5, color: 'shorthair orange' },
    { nickname: "Chatty Cathy", name: "Andromeda", age: 10, color: 'black' },
    { nickname: "Chonk", name: "Baby Slim", age: 5, color: 'black tabby' },
    { nickname: "Fastest Cat Alive", name: "Fritzy", age: 2.5, color: 'torti' },
    { nickname: "Grumpy Pants", name: "Sunshine", age: 7, color: 'long hair calico' },
    { nickname: "Garbage Man", name: "Fuzzy Lumpkins", age: 8, color: 'moo cow' },
    { nickname: "Hot Mess", name: "Griselda", age: 19, color: 'grey' },
    { nickname: "Diva", name: "Harold", age: 17, color: 'white' },
    { nickname: "Honey Baby Sweetie", name: "Good Boy", age: 12, color: 'tabby tuxedo' },
    { nickname: "Stink Expert", name: "Donut", age: 6, color: 'black' },
    { nickname: "Flopper Plopper", name: "King Jules", age: 6, color: 'tabby' },
    { nickname: "Grumpy Gus", name: "Strawberry", age: 15, color: 'tuxedo' },
    { nickname: "Yer Bestie", name: "Superglue", age: 12, color: 'moo cow' },
  ];

  colDefs: ColDef[] = [
    { field: "name" },
    { field: "nickname" },
    { field: "age" },
    { field: "color" }
  ];

}
