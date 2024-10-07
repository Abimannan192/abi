import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Admin } from '../model/Admin';
import { User } from '../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  get firstName(){
    return this.registerForm.get('firstName')
  }
  get lastName(){
    return this.registerForm.get('lastName')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get loginId(){
    return this.registerForm.get('loginId')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get confirmPwd(){
   return this.registerForm.get('confirmPwd')
  }
  get contactNum(){
    return this.registerForm.get('contactNum')

  }
 

  duplicateUserStatus: boolean = false;
  duplicateAdminStatus: boolean = false;
  router = inject(Router)
  userService = inject(UserService);
  // toast = inject(NgToastService)
  registerForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  ngOnInit() {
    this.registerForm = this.fb.group({
      registerType: 'user',
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@(gmail\.com|email\.com)$/)]],
      loginId: ['', Validators.required],
      password: ['', Validators.required],
      confirmPwd: ['', Validators.required],
      contactNum: ['', Validators.required]

    })
  }


  onSubmit() {
     const formData = this.registerForm.value;
      if (formData.registerType === 'user') {
        let { firstName,lastName, email,loginId, password, confirmPwd,contactNum} = this.registerForm.value;
        let newUser = new User(firstName,lastName, email,loginId, password, confirmPwd,contactNum);
        console.log(newUser,'newUser')
        this.userService.createUser(newUser).subscribe({
          next: (res) => {
            console.log(res)

            if (res.message === "User Created Successfully") {
              this.router.navigate(['/login'])
            }
            else {
              this.duplicateUserStatus = true;
            } },
          error: (error) => {
            console.log('error in user creation', error)
          }
        })
      }

      if(formData.registerType === 'admin') {
        let { lastName,email,password,confirmPwd } = this.registerForm.value;
        let newAdmin = new Admin(lastName,email,password,confirmPwd );
        this.userService.createAdmin(newAdmin).subscribe({
          next: (res) => {
            if (res.message === "Admin Created Successfully") {
              this.router.navigate(['/login'])
            }
            else {
              this.duplicateAdminStatus = true;
            }
          },
          error: (error) => {
            console.log('error in admin creation', error)
          }
        })
      }
    
  }

}


// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import axios from 'axios';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss']
// })
// export class SignUpComponent {
//   name: String = "";
//   email: any;
//   password: any;
//   repeatpassword: any;
  
//   constructor(private http: HttpClient, private router: Router) { }
//   register() {
//     console.log(this.name, this.email, this.password, this.repeatpassword);
//     let bodyData = {
//       "email": this.email,
//       "password": this.password,
//       "repeatPassword": this.repeatpassword,
//       "name": this.name,
//     };
//     axios.post('http://localhost:9000/register', bodyData)
//       .then(response => {
//         console.log(response.data);
//         alert("Registered Successfully")
//         this.router.navigate(['log-in']);

//       })
//       .catch(error => {
//         const errStr = error.message;
//         if (errStr.includes('402')) { alert("Both the passwords must be same") }
//         else if (errStr.includes('404')) { alert("Enter the valid E-mail") }
//         else if (errStr.includes('403')) { alert("E-mail is already in use") }
//         console.error(error);
//       });
//   }
// }