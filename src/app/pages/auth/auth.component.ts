import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  authService = inject(AuthService)

 form = new FormGroup({
  username: new FormControl(null, Validators.required),
  password: new FormControl(null, Validators.required)
 })

 onSubmit(){
  if(this.form.valid){
    //@ts-ignore
    this.authService.login(this.form.value)
  }
 }
}
