import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin, from, map, merge, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-observables-examples',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-observables-examples.component.html',
  styleUrl: './rxjs-observables-examples.component.scss',
})
export class RxjsObservablesExamplesComponent {
  users = [
    {
      id: 1,
      name: 'John',
      age: 25,
      address: 'NY',
    },
    {
      id: 2,
      name: 'Jane',
      age: 28,
      address: 'LA',
    },
    {
      id: 3,
      name: 'Doe',
      age: 22,
      address: 'SF',
    },
  ];

  filteredUsers: any[] = [];
  mappedUserNames: any[] = [];
  minAge: any;
  totalAge: number = 0;
  userDetailUsingSwitchMap: any;
  userDetailUsingForkJoin: any;

  ngOnInit() {
    this.getUsersAbove24();
    this.getUserNames();
    this.getTotalAge();
    this.getMinAgeUser();
    this.getUserDetailUsingSwitchMap();
    this.getUsersWithSalary();
    this.getUsersForkJoinExample();
  }

  //using filter to get users with age > 24
  getUsersAbove24() {
    this.filteredUsers = this.users.filter((user) => user.age > 24);
  }

  //using map to get user names
  getUserNames() {
    this.mappedUserNames = this.users.map((user) => user.name);
  }

  //using reduce to get total age of users
  getTotalAge() {
    this.totalAge = this.users.reduce((total, user) => total + user.age, 0);
  }

  getMinAgeUser() {
    this.minAge = this.users.reduce((min, user) => {
      return user.age < min.age ? user : min;
    });
  }

  //using switchMap

  getUserDetailUsingSwitchMap() {
    // Example function to demonstrate switchMap usage
    from(this.users)
      .pipe(switchMap((user) => of(user)))
      .subscribe((userDetail) => {
        console.log('User Detail:', userDetail);
        this.userDetailUsingSwitchMap = userDetail;
      });
  }

  //using mergeMap

  getUsersWithSalary() {
    from(this.users)
      .pipe(
        map((user) => ({
          ...user,
          salary: user.age * 1000,
        }))
      )
      .subscribe((result) => {
        console.log(result);
      });
  }

  //uisng forkJoin
  getUsersForkJoinExample() {
    const users$ = of(this.users); // emits once, completes
    const totalUsers$ = of(this.users.length);
    const cities$ = of(this.users.map((u) => u.address));

    forkJoin({
      users: users$,
      totalUsers: totalUsers$,
      cities: cities$,
    }).subscribe((result) => {
      console.log('ForkJoin Result:', result);
      this.userDetailUsingForkJoin = result;
    });
  }
}
