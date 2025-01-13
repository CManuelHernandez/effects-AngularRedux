import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(public usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((users: any) => {
      this.usuarios = users;
    });
  }
}
