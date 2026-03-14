/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crud-operation-using-reactive-forms-example',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crud-operation-using-reactive-forms-example.component.html',
  styleUrl: './crud-operation-using-reactive-forms-example.component.scss',
})
export class CrudOperationUsingReactiveFormsExampleComponent implements OnInit {
  userList: any[] = [];
  userForm!: FormGroup;
  // 🔹 flags for edit mode
  isEditMode = false;
  editingUserId: number | null = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      userAge: ['', [Validators.required, Validators.min(18)]],
    });
  }

  addUserToTable() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    if (this.isEditMode && this.editingUserId !== null) {
      // Update existing user
      const userIndex = this.userList.findIndex(
        (user) => user.id === this.editingUserId
      );
      if (userIndex !== -1) {
        this.userList[userIndex] = {
          id: this.editingUserId,
          name: this.userForm.value.userName,
          age: this.userForm.value.userAge,
        };
        // Reset edit mode
        this.isEditMode = false;
        this.editingUserId = null;
      }
    } else {
      this.addUser();
    }
  }

  addUser() {
    this.userList.push({
      // Add user details here
      id: this.userList.length + 1,
      name: this.userForm.value.userName,
      age: this.userForm.value.userAge,
    });
  }

  deleteUser(id: number) {
    this.userList = this.userList.filter((user) => user.id !== id);
  }

  editUser(user: any) {
    this.userForm.setValue({
      userName: user.name,
      userAge: user.age,
    });
    this.isEditMode = true;
    this.editingUserId = user.id;
  }
}
