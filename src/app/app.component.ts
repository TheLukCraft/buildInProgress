import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  password: string = '';
  errorMessage: string | null = null;

  checkPassword(): void {
    if (this.password === 'ArtAuto123@') {
      window.location.href = 'https://artauto.pl'; // Przekierowanie na stronę docelową
    } else {
      this.errorMessage = 'Niepoprawne hasło. Spróbuj ponownie.';
      setTimeout(() => {
        this.errorMessage = null; // Ukrycie komunikatu po 3 sekundach
      }, 3000);
    }
  }
}
