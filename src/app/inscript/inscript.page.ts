import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscript',
  templateUrl: './inscript.page.html',
  styleUrls: ['./inscript.page.scss'],
})
export class InscriptPage implements OnInit {

  constructor() { }

  ngOnInit() {

  	if(sessionStorage.getItem('sessionToken') != undefined){ //si deja co redirect myspace


  		window.location.href = "/myspace/"+sessionStorage.getItem('sessionToken') ;
  	}
  }

}
