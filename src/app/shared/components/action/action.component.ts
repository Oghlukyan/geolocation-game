import { Component, Input, OnInit } from '@angular/core';
import { IAction } from '../../../core/interfaces/action.interface';
import { EActionTypes } from '../../../core/enums/action-types.enum';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {

  @Input() action: IAction;

  isModalOpen = false;

  readonly EActionTypes = EActionTypes;

  constructor() {
  }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
