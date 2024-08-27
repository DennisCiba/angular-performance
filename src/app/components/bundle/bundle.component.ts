import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ApexChart, NgApexchartsModule } from 'ng-apexcharts';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  standalone: true,
  imports: [NgApexchartsModule, NgxExtendedPdfViewerModule],
  templateUrl: './bundle.component.html',
})
export class BundleComponent {
  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly series = [
    {
      name: 'My-series',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 172, 212, 331],
    },
  ];
  readonly chart: ApexChart = {
    height: 350,
    type: 'bar',
  };
  readonly title = { text: 'App Performance' };
  readonly xaxis = {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  };
}
