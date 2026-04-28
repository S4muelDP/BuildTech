import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, ToastMessage } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit, OnDestroy {
  currentToast: ToastMessage | null = null;
  visible = false;
  private sub!: Subscription;
  private hideTimeout: any;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.sub = this.toastService.toast$.subscribe(toast => {
      this.showToast(toast);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
  }

  private showToast(toast: ToastMessage): void {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);

    this.currentToast = toast;

    // Trigger animation
    setTimeout(() => {
      this.visible = true;
    }, 10);

    this.hideTimeout = setTimeout(() => {
      this.visible = false;
      setTimeout(() => {
        this.currentToast = null;
      }, 400);
    }, 3000);
  }

  get icon(): string {
    if (!this.currentToast) return '';
    switch (this.currentToast.type) {
      case 'success': return '✓';
      case 'error': return '✕';
      default: return 'ℹ';
    }
  }
}
