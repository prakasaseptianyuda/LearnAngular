import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id:string;
//   avatar:string;
//   name:string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Input({required:true}) user! : {
  //   id : string;
  //   avatar : string;
  //   name : string;
  // };
  @Input({required:true}) user! : User;
  @Input({required:true}) selected! : boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectedUser(){
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
}
