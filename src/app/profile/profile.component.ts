import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileService } from './profile.service';
import { Profile } from '../shared/profile';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  uesers : Profile[];

  constructor(private profileService : ProfileService) {
   
   }

  ngOnInit() {
    this.profileService.getAllUsers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(x=> {
      this.uesers = x;
      console.log(this.uesers);
  });
}

  // getProfile() {
  //   console.log(this.auth.getUser());
  // }

}
