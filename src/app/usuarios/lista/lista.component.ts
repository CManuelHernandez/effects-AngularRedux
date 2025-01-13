import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent implements OnInit {
  constructor(public usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((users: any) => {
      console.log(users);
    });
  }
}
