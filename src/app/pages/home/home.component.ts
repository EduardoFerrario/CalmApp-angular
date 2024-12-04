import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="layout-header">
  <h1>Seja bem-vindo ao sistema médicos!</h1>
</div>

<div class="home-content">
  <p>Bem-vindo ao CalmApp! Um sistema simples, eficiente e intuitivo, projetado para facilitar o gerenciamento do cadastro de médicos e organizar todas as informações importantes de maneira centralizada. 
  Com o CalmApp, você pode otimizar seus processos administrativos, garantindo uma gestão mais prática e acessível. Nossa solução foi desenvolvida para oferecer agilidade, segurança e eficiência, ajudando a simplificar tarefas do dia a dia e a manter o controle total sobre os dados médicos. 
  É só clicar abaixo e começar a usar uma ferramenta que une tecnologia e praticidade para transformar sua administração.</p>
  <a [routerLink]="'/listagem'" class="btn">Ver Médicos</a>
</div>

  `,
  styles: [
    `
        /* Estilo para o layout da parte superior */
.layout-header {
  background-color: #007bff;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

/* Centralizando o conteúdo da página */
.home-content {
  text-align: center;
  margin: 50px auto;
}

.home-content p {
  font-size: 18px;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 100px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 35px;
}

.btn:hover {
  background-color: #218838;
}

    `
  ]
})
export class HomeComponent {}
