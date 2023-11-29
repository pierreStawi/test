import { Component, OnInit } from '@angular/core';
import { Test } from './models/ModelToto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit{


  Tabs!: Test[];

  ngOnInit(){
    this.Tabs =[
      {
      nom:'mon nom',
      prenom:'mon prenom',
      age:25,
      image:'https://moto-station.com/wp-content/uploads/2018/01/avis-kawasaki-750-Zephyr-4-1320x978.jpg',
      adresse: 'Lyon'
    },
    {
      nom:'victor',
      prenom:'titine',
      age:30,
      image:'https://moto-station.com/wp-content/uploads/2018/01/avis-kawasaki-750-Zephyr-4-1320x978.jpg',
    },
    {
      nom:'Kloe',
      prenom:'raouf',
      age:50,
      image:'https://moto-station.com/wp-content/uploads/2018/01/avis-kawasaki-750-Zephyr-4-1320x978.jpg',
      adresse: 'Paris',
    }
  ];
  }

}


