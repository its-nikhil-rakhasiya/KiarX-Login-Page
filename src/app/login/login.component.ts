import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;
    isSubmitting = false;
    isLoggedIn = false;


    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.isSubmitting = true;

        if (this.loginForm.invalid) {
            return;
        }

        const { email, password } = this.loginForm.value;

        setTimeout(() => {
            this.isSubmitting = false;

            if (email === 'nikhil@gmail.com' && password === 'nikhil123') {
                this.isLoggedIn = true;
            } else {
                alert('User not found');
            }
        }, 500);
    }

    logout() {
        this.isLoggedIn = false;
        this.loginForm.reset();
    }
}
