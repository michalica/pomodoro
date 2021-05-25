import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public task = new FormControl('');
  public numberOfCycles = new FormControl('');
  public cycleTime = new FormControl('');
  public shortBreakTime = new FormControl('');
  public longBreakTime = new FormControl('');

  constructor() {
  }

  ngOnInit() {
  }

  public onSubmit(): void
  {
    console.log(this.task.value);
  }
}
