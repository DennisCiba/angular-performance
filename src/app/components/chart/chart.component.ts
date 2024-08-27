import { Component } from '@angular/core';
import { ApexChart, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
})
export class ChartComponent {
  readonly series = [
    {
      name: 'npm',
      data: [1.66, 8.99, 42.06],
    },
    {
      name: 'pnpm',
      data: [4.07, 6.6, 18.84],
    },
    {
      name: 'bun',
      data: [7.24, 0.12, 0.18],
    },
  ];
  readonly chart: ApexChart = {
    height: 350,
    type: 'bar',
  };
  readonly title = { text: 'Package Menager Installationszeiten' };
  readonly xaxis = {
    categories: ['Ohne Lockfile', 'Ohne node_modules', 'Ohne beides'],
  };
}
