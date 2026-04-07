import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../core/services/auth/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly auth: Auth = inject(Auth);
  private readonly router: Router = inject(Router);
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{2,5}[0-9]{2,5}$/),
    ]),
  });
  submitLogin() {
    if (this.loginForm.valid) {
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message == 'success') {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userData', JSON.stringify(res.user));
            this.router.navigate(['/home']);
            this.auth.isLogged.set(true);
          }
        },
      });
      this.loginForm.value;
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
