import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formuario-reactivo',
  templateUrl: './formuario-reactivo.component.html',
  styleUrls: ['./formuario-reactivo.component.css']
})
export class FormuarioReactivoComponent {


  //LA EXCLAMACIÓN SIRVE PARA INFORMARLE DE QUE EN ALGUN MOMENTO SE LLENARÁ
  public registerForm !: FormGroup 
  
  constructor( private fb: FormBuilder){
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(4),Validators.maxLength(8)]],
      cpassword:['', [Validators.required, Validators.minLength(4), Validators.maxLength(8), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]
    })
  }

  handelRegisterForm(event:Event){
  }

}
