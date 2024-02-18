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
    { designation: "American Dumpster Goblin", name: "Stinky Feets", age: 12, color: 'tabby' },
    { designation: "Midwest Barn Patrol", name: "Grandma", age: 3, color: 'buff torti' },
    { designation: "Pacific Couch Slug", name: "Precious", age: 4.5, color: 'orange tabby' },
    { designation: "Northeast Toilet Inspector", name: "Frank", age: 8, color: 'tuxedo' },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: "name" },
    { field: "designation" },
    { field: "age" },
    { field: "color" }
  ];

}
