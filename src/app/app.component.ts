import { Component, OnInit } from '@angular/core';
import { Test } from './models/ModelToto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit{

  mytoto!: Test

  ngOnInit(){
    this.mytoto = new Test(
      'mon nom',
      'mon prenom',
      25,
      'https://moto-station.com/wp-content/uploads/2018/01/avis-kawasaki-750-Zephyr-4-1320x978.jpg',
    );
  }

}


