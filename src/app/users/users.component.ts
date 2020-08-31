import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  anyVar;
  boolVar = true;
  objVar:Object = {};

  // private ds = new DataService() - done by angular;

  usersData;

  urlDataField:string = "http://some-img-url";

  constructor(private ds: DataService) { } // DI

  ngOnInit(): void {
  }

  refreshData(){
      this.ds.getUsers().subscribe( (dataFromBackend) => {
          this.usersData = dataFromBackend;
      })
  }

}
