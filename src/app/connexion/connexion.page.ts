import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  	if(sessionStorage.getItem('sessionToken') != undefined){ //si deja co redirect myspace


  		window.location.href = "/myspace/"+sessionStorage.getItem('sessionToken') ;
  	}
  }

  connexion(){

  	const obj = { // obj post connect

	  		"username": this.username,
	  		"password": this.password

	  	};

	this.http.post('http://localhost:3100/api/connect/', obj).subscribe(res => { // lors du click connexion post connect

		var resToString = JSON.stringify(res); //parsing obj response

	  	var parsed_object = JSON.parse(resToString);
		if(parsed_object.status == "ACCEPTED"){

			if(parsed_object.user.active === false){
				alert("Votre compte n'est pas activé veuillez consulter votre boite mail.");
			}
			else{
				//window.location.href = "/home";
				const obj_session = {

			  		"user": JSON.stringify(parsed_object.user)

			  	};

			  	// si le compte est activé création de la session et redirection au myspace
				this.http.post('http://localhost:3100/api/session/', obj_session).subscribe(res2 => {

					var resToString2 = JSON.stringify(res2);
	  				var parsed_object2 = JSON.parse(resToString2);

					sessionStorage.setItem('sessionToken', parsed_object2.token);
					window.location.href = "/myspace/"+parsed_object2.token;
					
				});
				
			}

			

		}
		else{
			alert(parsed_object.message);
		}

	  
	});
  }


}
