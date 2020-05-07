import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  
  httpOptions = {
    method:"GET",
    headers:{
      Accept:"application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type":"application/json"
    }
  }
  constructor(private http:HttpClient) { }

  totalCasesList = [];
  
  getTrackerdata(){
   return this.http.get<object[]>('http://covid19aws-env.eba-xf2ysjvp.us-east-2.elasticbeanstalk.com/covid19/stateWiseSummary')
  }
}
