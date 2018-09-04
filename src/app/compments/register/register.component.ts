import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
    
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.register(this.email, this.password)
      .then((res) => {
       this.router.navigate(['/']);
      })
      .catch((err) => {
         this.router.navigate(['/register']);
      });
  }

}
