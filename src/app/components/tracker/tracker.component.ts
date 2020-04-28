import { Component, OnInit } from '@angular/core';
import { SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrackerService } from '../service/tracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  showData:boolean = false;
  data:Object[] =[
    // {
    //   "states": "Tamil Nadu",
    //   "confirmed": 1520,
    //   "active": 1046,
    //   "recovered":457,
    //   "deceased":17,
    //   subtasks:[
    //     {
    //       "states": "Chennai",
    //       "confirmed": 500,
    //       "active": 499,
    //       "recovered":499,
    //       "deceased":0
    //     },
    //     {
    //       "states": "Tiruppur",
    //       "confirmed": 320,
    //       "active": 310,
    //       "recovered":10 ,
    //       "deceased":0
    //     }
    //   ]
    // },
    // {
    //   "states": "Maharastra",
    //   "confirmed": 4666,
    //   "active": 3862,
    //   "recovered":572,
    //   "deceased":232,
    //   subtasks:[
    //     {
    //       "states": "Mumbai",
    //       "confirmed": 2455,
    //       "active": 2450,
    //       "recovered":5,
    //       "deceased":0
    //     },
    //     {
    //       "states": "Pune",
    //       "confirmed": 591,
    //       "active": 590,
    //       "recovered":1,
    //       "deceased":0
    //     }
    //   ]
    // }
  ];
  
  public sortSetting:SortSettingsModel;

  constructor(private trackerService: TrackerService){

  }

  ngOnInit(){
    this.sortSetting = {
      columns:[
        {
          field:"confirmed",direction:"Descending"
        },
        {
          field:"active",direction:"Descending"
        },
        {
          field:"recovered",direction:"Descending"
        },
        {
          field:"deceased",direction:"Descending"
        }
      ]
    }
    this.trackerService.getTrackerdata().subscribe(
    datas => {
      this.data = datas;
       this.showData = true;
    }
     );
  }
}
