import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
  BASEURL = "https://student-attendence-management.herokuapp.com"
  setAttUrl = `${this.BASEURL}/fill_attendence?class=1&section=A&rollNo=1`
  getAttUrl = `${this.BASEURL}/get_student_deatils`;

  constructor(private http : HttpClient){ }


  public sendAttendence(data :any ){
    return this.http.patch(this.setAttUrl, data )
  }

  public fetchAttendence(){
    return this.http.get(this.getAttUrl)
  }

}
