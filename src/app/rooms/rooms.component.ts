import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector    : 'app-rooms',
  templateUrl : './rooms.component.html',
  styleUrls   : ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  public id: number;
  public idParam: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
