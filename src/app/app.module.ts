import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando FormsModule
import { RouterModule, Routes } from '@angular/router'; // Importando RouterModule e Routes
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

// Definindo algumas rotas
const routes: Routes = [ // Especificando que routes é do tipo Routes
  { path: '', redirectTo: '/password-generator', pathMatch: 'full' }, // Redireciona para o gerador de senhas
  { path: 'password-generator', component: PasswordGeneratorComponent } // Define a rota para o gerador de senhas
];

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicionando o FormsModule aqui
    RouterModule.forRoot(routes) // Configurando as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
