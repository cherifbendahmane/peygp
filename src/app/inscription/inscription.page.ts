import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})


export class InscriptionPage implements OnInit {

  username: string ;
  password: string;
  passconf: string;
  account_type: boolean;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  inscription(){

  	if (this.password === this.passconf){

	  	var account_type = 1;

	  	if (this.account_type === true){
	  		account_type = 2;
	  	}



	  	const obj = {

	  		"username": this.username,
	  		"password": this.password,
	  		"account_type" : account_type

	  	};



	  	this.http.get('http://localhost:3100/api/users/name/'+this.username).subscribe(res => {

	  		if(res != null){

	  			alert("Identifant déja existant !");

	  		}
	  		else{
	  			
	  			this.http.post('http://localhost:3100/api/users/', obj).subscribe(res => {
	  				var resToString = JSON.stringify(res);
	  				var parsed_object = JSON.parse(resToString);

	  				alert(parsed_object.message);
	  			});
	  		}
	  	});	
  	}
  	else{
  		alert("La confirmation du mot de passe n'est pas bonne.");
  	}
  }

}
