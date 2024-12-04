import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    
    <div class="header">
  <a routerLink="/" class="btn voltar-btn">Voltar para Home</a>
</div>

<div class="content">
  <h1 class="titulo">Listagem de Médicos</h1>
  <ul class="medicos-list">
    <li *ngFor="let medico of medicos">
      <a [routerLink]="['/detalhes', medico.id]">{{ medico.nome }}</a>
    </li>
  </ul>
</div>

  `,
  styles: [
    `
        /* Layout para o cabeçalho */
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Botão de voltar */
.voltar-btn {
  padding: 10px 15px;
  background-color: white;
  color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.voltar-btn:hover {
  background-color: #e6e6e6;
  color: #0056b3;
}

/* Centralizar o título */
.content {
  text-align: center;
  margin-top: 30px;
}

.titulo {
  font-size: 50px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Estilização da lista */
.medicos-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
}

.medicos-list li {
  margin-bottom: 15px;
}

.medicos-list a {
  text-decoration: none;
  color: #007bff;
  font-size: 25px;
}

.medicos-list a:hover {
  text-decoration: underline;
}
    `
  ]
})
export class ListagemComponent {
  medicos = [ // Mantendo 'medicos'
    { id: 1, nome: 'Dr. João Silva', especialidade: 'Cardiologista', crm: '12345' },
    { id: 2, nome: 'Dra. Maria Oliveira', especialidade: 'Neurologista', crm: '67890' },
    { id: 3, nome: 'Dr. Pedro Santos', especialidade: 'Ortopedista', crm: '11223' }
    
  ];
}

