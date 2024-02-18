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
    { designation: "Dumpster Goblin", name: "Stinky Feets", age: 12, color: 'tabby' },
    { designation: "Barn Patrol", name: "Grandma", age: 3, color: 'buff torti' },
    { designation: "Couch Slug", name: "Precious", age: 4.5, color: 'orange tabby' },
    { designation: "Toilet Inspector", name: "Frank", age: 8, color: 'tuxedo' },
    { designation: "Trash Panther", name: "Diana", age: 12, color: 'long hair grey' },
    { designation: "Food Cop", name: "Paul Blart", age: 3, color: 'buff' },
    { designation: "Princess", name: "Matthew", age: 9, color: 'siamese seal point' },
    { designation: "Frisky Biscuit", name: "Cazador", age: 10, color: 'longhair orange' },
    { designation: "Master Biscuit Maker", name: "Doodles", age: 2, color: 'brown tabby' },
    { designation: "King Zoomies", name: "Flapjack", age: 1, color: 'orange tuxedo' },
    { designation: "Crop Duster", name: "Bud", age: 5, color: 'shorthair orange' },
    { designation: "Chatty Cathy", name: "Andromeda", age: 10, color: 'black' },

  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: "name" },
    { field: "designation" },
    { field: "age" },
    { field: "color" }
  ];

}
