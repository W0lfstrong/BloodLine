import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { Users } from 'src/app/users';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  users: Users[] = [];
  BloodBank: any;
  p: number = 1;
  constructor(public cs: ContentService, private http: HttpClient) { }


  ngOnInit(): void {
    this.cs.getUsers().subscribe((response) => {
    this.users = response;
    });
  }
  Search() {
    if (this.BloodBank == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return res.BloodBank.toLocaleLowerCase().match(this.BloodBank.toLocaleLowerCase());
      });
    }
  }



}
