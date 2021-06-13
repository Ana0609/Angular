import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor() { }

  public taskList : Task [] =[];

  ngOnInit() {
  }

  addTask(){
    this.taskList.push(new Task());
    this.taskList[length].status='not done';
  }

  removeTask(index:number){
    if(index > -1){
      this.taskList.splice(index,1);
    } 
  }

  ChangeStatus(index:number)
  {
    if(this.taskList[index].status=='not done'){
      this.taskList[index].status='done';
    }
    else{
      this.taskList[index].status='not done';
    }

  }
  
  
}