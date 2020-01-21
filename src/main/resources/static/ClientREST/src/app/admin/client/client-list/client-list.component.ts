import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Client} from "../model/client";
import {ClientService} from "../clientService/client.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  client: Observable<Client[]>;
  p: number = 1;
  constructor(private clientService:ClientService, private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.client = this.clientService.getClientList();
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateClient(id: number) {
    this.router.navigate(['admin/client/update', id]);
  }

  addClient() {
    this.router.navigate(['admin/client/add']);
  }
}
