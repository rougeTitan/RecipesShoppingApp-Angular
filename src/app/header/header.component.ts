import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isAuthenticated = false;
  private userSub: Subscription;
  
  //output directive emit the event which can be accessbile to parent
  //@Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService, 
    private authService: AuthService) {}

    ngOnInit() {
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
    }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
