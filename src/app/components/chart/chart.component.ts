/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { ApexChart, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
})
export class ChartComponent {
  readonly pmSeries = [
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
  readonly pmChart: ApexChart = {
    height: 350,
    type: 'bar',
  };
  readonly pmTitle = { text: 'Package Manager Installationszeiten' };
  readonly pmXaxis = {
    categories: ['Ohne Lockfile', 'Ohne node_modules', 'Ohne beides'],
  };

  readonly cpSeries = [{ name: '', data: [2.25, 1.01, 0.83] }];
  readonly cpChart: ApexChart = {
    height: 350,
    type: 'bar',
  };
  readonly cpOptions = {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  };
  readonly cpLabels = {
    enabled: true,
    formatter: function (_: any, opt: any) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    dropShadow: {
      enabled: true,
    },
  };
  readonly cpTitle = {
    text: 'Bundlegrößen',
    align: 'center' as const,
  };
  readonly cpLegend = {
    show: false,
  };
  readonly cpXaxis = {
    categories: ['Unkomprimiert', 'Gzip', 'Brotli'],
  };
}
