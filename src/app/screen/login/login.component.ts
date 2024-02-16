import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;
 
  resultArray: any;


  constructor(private http: HttpClient) { }


  submit() {

    var postdata = {
      "uname": this.username,
      "pass": this.password,
    };
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': 'P258K266G260',
    });

    // this.http.post('http://cloud25.erp.lk:8080/kolsen/login', postdata, { headers: headers })
    this.http.post('http://outcropdb-1:8070/login', postdata, { headers: headers })
      .subscribe(res => {
        console.log('Response', res);
        this.resultArray = res;
        
        if(this.resultArray.status === 'Success'){
          alert('LOGIN SUCCESS ! \n Hello ' + this.resultArray.companyname + '\n Welcome !!!');

        } else {
          alert('LOGIN FAILED ! \n' + this.resultArray.err );
        }

        
      },
        err => {
          console.log('Res Error', err);
          alert('LOGIN FAILED !..');

        })


    this.username = '';
    this.password = '';

  }



}
