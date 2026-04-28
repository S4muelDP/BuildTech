import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit, AfterViewInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngAfterViewInit(): void {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(el => observer.observe(el));
  }

  getError(field: string): string {
    const control = this.contactForm.get(field);
    if (!control || !control.touched || !control.errors) return '';

    if (control.errors['required']) {
      const labels: Record<string, string> = {
        name: 'El nombre es obligatorio.',
        email: 'El email es obligatorio.',
        subject: 'Selecciona un asunto.',
        message: 'El mensaje es obligatorio.'
      };
      return labels[field] || 'Campo obligatorio.';
    }
    if (control.errors['minlength']) {
      const min = control.errors['minlength'].requiredLength;
      return `Debe tener al menos ${min} caracteres.`;
    }
    if (control.errors['email']) {
      return 'Ingresa un email válido.';
    }
    return '';
  }

  onSubmit(): void {
    // Mark all fields as touched to trigger validation
    Object.values(this.contactForm.controls).forEach(c => c.markAsTouched());

    if (this.contactForm.valid) {
      this.submitted = true;
      this.toastService.show('¡Mensaje enviado exitosamente!', 'success');
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.contactForm.reset();
  }
}
