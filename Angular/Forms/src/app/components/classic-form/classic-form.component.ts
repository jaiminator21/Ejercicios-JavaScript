import { ParseSourceFile } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-classic-form',
  templateUrl: './classic-form.component.html',
  styleUrls: ['./classic-form.component.css']
})
export class ClassicFormComponent {


  public registerForm : any = {
    name: "",
    surname:"",
    email:"",
    password:"",
    cpassword:""
  }

  

  handelRegisterForm(event:Event){
    const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    const registerValues = Object.values(this.registerForm)
    if (registerValues.includes("")) {
      return alert("Rellene todos los campos") 
    } if (regExp.test(this.registerForm.password)){
      return alert("Debe de cumplir las siguientes condiciones: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ ");
    }  if (this.registerForm.password !== this.registerForm.cpassword) {
      return alert("Las contraseñas no coinciden");
    }
    alert("Usario registrado correctamente")
  }
  

}
