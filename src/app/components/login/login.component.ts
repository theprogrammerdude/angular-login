import { Component, OnInit } from "@angular/core";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor() {}

  ngOnInit() {
    this.email = "";
    this.password = "";
  }

  loginUser(email: String, password: String) {
    if (this.email.trim().length === 0 || this.password.trim().length === 0) {
      return alert("Fields cannot be empty");
    }

    console.log(this.email, this.password);

    this.email = "";
    this.password = "";
  }
}
