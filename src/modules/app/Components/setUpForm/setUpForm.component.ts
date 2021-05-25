import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'set-up-form',
  templateUrl: './setUpForm.component.html',
  styleUrls: ['./setUpForm.component.css'],
})
export class SetUpFormComponent implements OnInit {

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
