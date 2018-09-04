import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor( private clientService: ClientService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get client
    this.clientService.getClient(this.id).subscribe(client => {
      if(client.balance > 0){
        this.hasBalance = true;
      }
      this.client = client;
      console.log(this.client);
    });
  }

  onDeleteClick(){
    if(confirm("Are you sure to delete?")){
      this.clientService.deleteClient(this.id);
      this.router.navigate(['/']);
    }
  }



}
