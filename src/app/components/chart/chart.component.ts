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
