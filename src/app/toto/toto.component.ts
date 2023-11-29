import { Component, Input, OnInit, } from '@angular/core';
import { Test } from '../models/ModelToto';


@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrl: './toto.component.css'
})
export class TotoComponent implements OnInit {

  @Input() toto!: Test;

  nom!: string;
  prenom!: string;
  age!: number;
  image!: string;

  ngOnInit() {
    this.nom ="toto";
    this.prenom ="titi";
    this.age = 27;
    this.image = "https://moto-station.com/wp-content/uploads/2018/01/avis-kawasaki-750-Zephyr-4-1320x978.jpg"
  }
}
