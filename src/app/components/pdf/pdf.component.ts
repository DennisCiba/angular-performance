import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './pdf.component.html',
})
export class PdfComponent {}
