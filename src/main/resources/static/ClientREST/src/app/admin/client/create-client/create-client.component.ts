import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Client} from "../model/client";
import {ClientService} from "../clientService/client.service";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  client: Client = new Client();
  submitted = false;
  constructor(private clientService: ClientService, private router : Router) { }

  ngOnInit() {
  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }

  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/admin/client']);
  }

}
