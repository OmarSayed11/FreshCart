import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../core/services/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css',
})
export class ForgetpasswordComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly authService: Auth = inject(Auth);
  private readonly router: Router = inject(Router);
  step = signal<number>(1);

  ForgetPassForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
  });
  verifyOtpCodeForm = this.fb.group({
    resetCode: [null, [Validators.required]],
  });
  rePasswordForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [null, [Validators.required]],
  });
  sendEmail() {
    this.authService.forgetPassword(this.ForgetPassForm.value).subscribe({
      next: (res) => {
        console.log('Sending OTP code to your email');
        this.step.set(2);
      },
    });
  }
  verifyOtpCode() {
    this.authService.verifyResetCode(this.verifyOtpCodeForm.value).subscribe({
      next: (res) => {
        console.log('Verifying OTP code');
        this.step.set(3);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  resetPassword() {
    this.authService.resetPassword(this.rePasswordForm.value).subscribe({
      next: () => {
        console.log('Resetting your password');
        this.router.navigate(['/login']);
      },
    });
  }
}
