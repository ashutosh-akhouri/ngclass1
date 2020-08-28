import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userDetails = [
    {name: 'ABCD', address: "Hyd"},
    {name: 'XYZ', address: "BLR"},
    {name: 'qwer', address: "MAS"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
