import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAttemptsService {
  private failedAttempts = 0;
  private lastFailedAttemptTime?: number;
  private readonly maxAttempts = 3;
  private readonly lockoutDuration = 60000;

  private lockoutSubject = new BehaviorSubject<boolean>(false);
  lockout$ = this.lockoutSubject.asObservable();

  constructor() { }

  handleFailedLogin() {
    this.failedAttempts++;
    if (this.failedAttempts >= this.maxAttempts) {
      this.lastFailedAttemptTime = Date.now();
      this.lockoutSubject.next(true);

      setTimeout(() => {
        this.failedAttempts = 0;
        this.lastFailedAttemptTime = undefined;
        this.lockoutSubject.next(false);
      }, this.lockoutDuration);
    }
  }

  canAttemptLogin(): boolean {
    if (this.failedAttempts >= this.maxAttempts) {
      const now = Date.now();
      return now - this.lastFailedAttemptTime! >= this.lockoutDuration;
    }
    return true;
  }
}
