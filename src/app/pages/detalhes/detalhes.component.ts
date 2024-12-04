import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizarPipe } from '../../pipes/capitalizar.pipe';
import { OcultarTextoPipe } from '../../pipes/ocultar-texto.pipe'
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  standalone: true, // standalone component
  imports: [CommonModule, CapitalizarPipe, OcultarTextoPipe, RouterModule], // Adicione CommonModule aqui
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  medico: any; // Defina a propriedade user aqui (exemplo).
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Exemplo de dados, no caso, você poderia buscar os dados do médico pela API
      this.medico = {
        id: id,
        nome: 'Dr. João Silva',
        especialidade: 'Cardiologista',
        crm: '12345',
        endereco: 'Rua Exemplo, 123, Bairro, Cidade',
        telefone: '(11) 1234-5678',
        descricao: 'Médico especializado em doenças cardíacas, com mais de 15 anos de experiência.'
      };
    }
  }
}

