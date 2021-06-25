import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css'],
})
export class ActualizarUsuarioComponent implements OnInit {
  formulario: FormGroup;

  constructor(private service: UsuariosService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [],
      correo: [],
      password: [],
      rol: [],
    });
  }

  
}