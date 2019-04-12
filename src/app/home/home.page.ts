import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import * as Openpgp from 'openpgp';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	username: string;
    password: string;
	
	constructor(private http: HttpClient, private file : File){
		
	}

	async generateKey(name, email, passphrase, http){
    
    var userOptions = {
      userIds: [{ name: name, email: email}], // multiple user IDs
      curve: "ed25519",                                         // ECC curve name
      passphrase: passphrase        // protects the private key
    };
    
    Openpgp.generateKey(userOptions).then(function(key) {
      var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
      var pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
      var revocationCertificate = key.revocationCertificate; // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
      
      console.log(pubkey);
      //enregistrer privkey dans un fichier local
      //envoyer pubkey et certif sur un serveur de gestion de clé

      var keyObj = {
      	username : name,
      	key : pubkey
      };

      http.post('http://localhost:3100/api/sendkey/', keyObj).subscribe(res2 => {


     
		});

    
    });
        
  }

	ngOnInit(){

		this.file.createFile("/sdcard", 'testfile.txt', true);
		this.file.writeExistingFile("/sdcard", 'testfile.txt', "myfuckingcontent");

		if(sessionStorage.getItem('sessionToken') != undefined){ //si deja co redirect myspace

	  		window.location.href = "/myspace/"+sessionStorage.getItem('sessionToken') ;
	  	}

	}	

	connect(){

		const obj = {

	  		"username": this.username,
	  		"password": this.password

	  	};

		this.http.get('http://localhost:3100/api/users/name/'+this.username).subscribe(res => {

	  		if(res != null){

	  			
	  			//----------

	  			this.http.post('http://localhost:3100/api/connect/', obj).subscribe(res => { // lors du click connexion post connect

					var resToString = JSON.stringify(res); //parsing obj response

				  	var parsed_object = JSON.parse(resToString);
					if(parsed_object.status == "ACCEPTED"){
					
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
					else{
						alert(parsed_object.message);
					}

				  
				});
	  			//----------

	  		}
	  		else{
	  			
	  			this.http.post('http://localhost:3100/api/users/', obj).subscribe(res => {
	  				var resToString = JSON.stringify(res);
	  				var parsed_object = JSON.parse(resToString);
	  				if(parsed_object.message == "Creation du compte avec succes vous pouvez vous connecter"){
	  					this.generateKey(obj.username, "cchefsjqsjk@qsdfqs.fr", "abcdef qsdkjlf qsdkj", this.http);
	  				}
	  				alert(parsed_object.message);

	  			});
	  		}
	  	});	
	}

}
