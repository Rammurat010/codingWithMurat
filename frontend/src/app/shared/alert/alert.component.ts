import { Component, Input } from '@angular/core';

export type AlertType = 'success' | 'error' | 'info';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() message = '';
  @Input() type: AlertType = 'info';

  close(): void {
    this.message = '';
  }
}
