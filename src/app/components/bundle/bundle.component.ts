import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { PdfComponent } from '../pdf/pdf.component';

@Component({
  standalone: true,
  imports: [ChartComponent, PdfComponent],
  templateUrl: './bundle.component.html',
})
export class BundleComponent {}
