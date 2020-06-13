import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class AuthModule {}
