import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly auth: Auth = inject(Auth);
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly router: Router = inject(Router);
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
      password: [null, [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,5}[0-9]{2,5}$/)]],
      rePassword: [null, [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,5}[0-9]{2,5}/)]],
    });
  }
  submitRegister() {
    if (this.registerForm.valid) {
      this.auth.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
