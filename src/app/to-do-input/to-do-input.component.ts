import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-to-do-input',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule, ButtonModule, RouterLink],
  templateUrl: './to-do-input.component.html',
  styleUrl: './to-do-input.component.css'
})
export class ToDoInputComponent {
}
