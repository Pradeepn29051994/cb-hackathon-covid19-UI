import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  public primaryXAxis: Object;
    public chartData: Object[];
    public title: string;
    public primaryYAxis: Object;
    ngOnInit(): void {
        this.chartData = [
                 { x: new Date(2020, 3, 28), y: 10 }, { x: new Date(2020, 3, 29), y: 30 },
                 { x: new Date(2020, 3, 30), y: 15 }, { x: new Date(2020, 3, 31), y: 65 },
                 { x: new Date(2020, 4, 1), y: 90 }, { x: new Date(2020, 4, 2), y: 85 },
                 { x: new Date(2020, 4, 3), y: 10 }, { x: new Date(2020, 4, 4), y: 40 },
                 { x: new Date(2020, 4, 5), y: 15 }, { x: new Date(2020, 4, 6), y: 65 },
                 { x: new Date(2020, 4, 7), y: 90 }, { x: new Date(2020, 4, 8), y: 85 }
        ];
        this.primaryXAxis = {
            valueType: 'DateTime',
            title: 'Date',
            labelFormat: 'y/M/d',
            edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
           title: 'People Count'
        };
        this.title = "India Covid'19";
    }

}
