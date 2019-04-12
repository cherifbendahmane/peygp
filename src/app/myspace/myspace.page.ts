import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.page.html',
  styleUrls: ['./myspace.page.scss'],
})
export class MyspacePage implements OnInit {

  env: any = environment;
  sessionToken : string;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.deconnect();

  	this.route.params.subscribe(params => {
  		this.sessionToken = params['sessionToken'];
  		this.http.get(this.env.API + 'session/' + params['sessionToken']).subscribe(res => {

  			console.log(res);
  			if(res === null){

  				sessionStorage.clear();
  				window.location.href = "/home";

  			}
  		});
  	});
  }

  deconnect(){
  	sessionStorage.clear();
  	window.location.href = '/home';
  }

}
