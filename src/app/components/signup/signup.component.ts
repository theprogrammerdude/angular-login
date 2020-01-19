import { Component, OnInit } from "@angular/core";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  email: String;
  password: String;
  confirmPassword: String;

  constructor() {}

  ngOnInit() {
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }

  signupUser(email: String, password: String, confirmPassword: String) {
    if (
      this.email.trim().length === 0 ||
      this.password.trim().length === 0 ||
      this.confirmPassword.trim().length === 0
    ) {
      return alert("Fields cannot be empty !!");
    }

    if (this.password !== this.confirmPassword) {
      return alert("Password and Confirm Password should match !!");
    }

    console.log(this.email, this.password, this.confirmPassword);

    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }
}
