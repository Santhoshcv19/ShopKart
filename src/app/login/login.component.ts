import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponentComponent } from '../alert-dialog-component/alert-dialog-component.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService, private http: HttpClient, private apiService: ApiService, public dialog: MatDialog) {}

  message: any;
  ngOnInit(): void {
  }
  username: string = '';
  password: string = '';
  password2: string = '';

  userList = [
      { username: 'santhosh', password: 'abcd' }
    , { username: 's', password: 'qwer' }
  ];

  check() {
    var userFound = false;
    if(this.username == '' && this.password == ''){
      alert("Enter Username and Password");
    }
    else if(this.username == ''){
      alert("Enter Username");
    }
    else if(this.password == ''){
      alert("Enter Password");
    }
    else{
      // for (var user of this.userList) {
      //   if (this.username == user.username) {
      //     if (this.password == user.password) {
      //       console.log(this.username);
      //       this.userService.setUsername(this.username);
      //       this.router.navigate(['/shop']);
      //     }
      //     else {
      //       alert("Wrong password!");
      //     }
      //     userFound = true;
      //   }
      // }
      // if (!userFound) {
      //   alert("User not found!");
      // }
      // const data = { username: this.username, password: this.password }
      // this.http.post('http://localhost:3000/api/message',data).subscribe(
      //   (response)=>{
      //     console.log(data);
      //     this.userService.setUsername(this.username);
      //     this.router.navigate(['/shop']);
      //   },
      //   (error)=>{
      //     console.log(error);
      //     alert("Invalid Username or Password");
      //   }
      // )
      this.apiService.getMessage().subscribe(data => { 
        this.message = data; 
      });
      for (var item of this.message) {
          if (this.username == item.username) {
            if (this.password == item.password) {
              console.log(this.username);
              this.userService.setUsername(this.username);
              this.router.navigate(['/shop']);
            }
            else {
              alert("Wrong password!");
            }
            userFound = true;
          }
        }
        if (!userFound) {
          this.openAlertDialogComponentComponent();
        }
    }
  }

  openAlertDialogComponentComponent() {
    this.dialog.open(AlertDialogComponentComponent, {
      data: {
        icon: 'Error',
        message: 'User Not Found!',
        buttonText: 'Okay'
      }
    });
  }

  add() {
    if(this.username == '' && this.password == ''){
      alert("Enter Username and Password");
    }
    else if(this.username == ''){
      alert("Enter Username");
    }
    else if(this.password == ''){
      alert("Enter Password");
    }
    else if(this.password2 == ''){
      alert("Re-enter Password");
    }
    else{
      if (this.password == this.password2) {
        this.apiService.getMessage().subscribe(data => { 
          this.message = data; 
        });
        const usernameExists = this.message.some((item: { username: string }) => item.username === this.username);
        console.log('The entered username in signup is:', usernameExists);
        if (usernameExists == true) {
          alert("Username already exists!");
        }
        else {
          const newUser = { username: this.username, password: this.password };
          this.apiService.addNewUser(newUser).subscribe(
            response =>{
              console.log(response);
              this.userService.setUsername(this.username);
              alert("Successfully Signed Up, Redirecting to Shopkart")
              this.router.navigate(['/shop']);
            },
            (error) =>{
              console.log(error);
              alert("Username error!");
            }
          )
        }
      }
      else {
        alert("Passwords do not match!");
      }
    }
  }

  login() {
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
  }

  display() {
    const user = this.userList.find(u => u.username === this.username);
    if (user) {
      const pass = user.password;
      alert("Your Password is: " + pass);
    }
    else {
      alert("User not found!");
    }
  }

  visible: boolean = true;
  changetype: boolean = true;

  visible2: boolean = true;
  changetype2: boolean = true;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  viewpass2() {
    this.visible2 = !this.visible2;
    this.changetype2 = !this.changetype2;
  }

  isLogin = true;
  toggleForm() {
    this.isLogin = !this.isLogin;
    this.username = '';
    this.password = '';
    this.password2 = '';
  }
}
