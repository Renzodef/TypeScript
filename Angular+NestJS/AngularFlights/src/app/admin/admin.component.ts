import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightService: FlightsService) { }

  origin: string;
  destination: string;
  flightNumber: number;
  depart: string;
  arrive: string;
  nonstop: boolean = false;
  flightList: any[];

  ngOnInit(): void {
    this.refresh();
  }

  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight: Flight = {
      origin: this.origin, 
      destination: this.destination,
      flightNumber: this.flightNumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightService.postFlight(flight).subscribe(data => {
      console.log('data is', data);
      alert("Flight registered correctly.");
      this.refresh();
    })
  }

  update(flight:Flight){
    this.flightService.updateFlight(flight).subscribe(data =>{
      console.log('data is', data);
      if(data && data['affected']){
        alert("Flight updated correctly.");
        this.refresh();
      }
    })
  }

  delete(flight:Flight){
    if (window.confirm('Are you sure you want to delete this flight? ')){
      this.flightService.deleteFlight(flight.id).subscribe(data =>{
        if(data && data['affected']){
          alert("Flight deleted correctly.");
          this.refresh();
        }
      });
    }
  }

  refresh(){
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
    })
  }

}