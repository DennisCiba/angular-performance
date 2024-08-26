import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  standalone: true,
  templateUrl: './control.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class ControlComponent {
  @Input() number = 10_000_000;
  @Output() numberChange = new EventEmitter<number>();


}
