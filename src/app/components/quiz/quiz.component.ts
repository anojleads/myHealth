import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  AdvicesList = [
    'The first wealth is health.',
    'Wisdom is to the mind what health is to the body.',
    'He who enjoys good health is rich, though he knows it not.',
    'Life is not living, but living in health.',
    'Measure your health by your sympathy with morning and Spring.',
    'A hero is a man who is afraid to run away.',
    'It\'s a dream until you write it down, and then its a goal.',
    'Superficial goals lead to superficial results'
  ];

  BestAdvices = [
  ];


  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }  
}