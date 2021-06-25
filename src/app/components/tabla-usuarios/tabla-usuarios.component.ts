import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor( private service: UsuariosService) { 
    this.service.getUsuario().subscribe(res => {
      this.usuarios = res['usuarios'];
    });
   }

  ngOnInit(): void {
  }

  actualizar(item: any) {
    console.log(this.usuarios[item]);
  }

  eliminar(item: any) {
    if(confirm("Are you sure to delete? ")) {
      console.log('eliminando')
      const _id = this.usuarios[item]._id;
  
      console.log(_id);
      this.service.deleteUsuario(_id).subscribe( res => {
        console.log(res);
      });
    }
  }
}
