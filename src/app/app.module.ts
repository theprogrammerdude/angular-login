import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./components/signup/signup.component";

const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  { path: "signup", component: SignupComponent },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
