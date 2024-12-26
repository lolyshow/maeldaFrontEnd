import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  customStyle = ""
  @Input() btn_text ="Buy Now"

  @Input() label: string = 'Button';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Output() onClick = new EventEmitter<Event>();
}
