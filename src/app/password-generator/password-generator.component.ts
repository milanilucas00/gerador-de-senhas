import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  length = 8;
  symbols = 0;
  uppercase = 0;
  lowercase = 0;
  numbers = 0;
  password: string = '';
  errorMessage: string = '';
  buttonText: string = 'Gerar nova senha';

  // Validação para garantir que apenas números sejam inseridos
  validateInput(event: KeyboardEvent) {
    const char = String.fromCharCode(event.keyCode);
    if (!/^[0-9]*$/.test(char)) {
      event.preventDefault(); // Impede caracteres que não são números
      this.errorMessage = 'Favor inserir apenas caractéres válidos';
    } else {
      this.errorMessage = '';
    }
  }

  generatePassword() {
    const totalRequiredChars = this.symbols + this.uppercase + this.lowercase + this.numbers;
    if (totalRequiredChars > this.length) {
      this.errorMessage = 'Favor definir corretamente os parâmetros';
      return;
    } else {
      this.errorMessage = '';
    }

    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';

    let passwordArray: string[] = [];

    // Adicionar os caracteres exigidos
    passwordArray = passwordArray.concat(this.randomCharacters(symbolChars, this.symbols));
    passwordArray = passwordArray.concat(this.randomCharacters(upperChars, this.uppercase));
    passwordArray = passwordArray.concat(this.randomCharacters(lowerChars, this.lowercase));
    passwordArray = passwordArray.concat(this.randomCharacters(numberChars, this.numbers));

    // Preencher o restante da senha com caracteres aleatórios
    const allChars = symbolChars + upperChars + lowerChars + numberChars;
    const remainingLength = this.length - passwordArray.length;
    if (remainingLength > 0) {
      passwordArray = passwordArray.concat(this.randomCharacters(allChars, remainingLength));
    }

    // Embaralhar os caracteres para randomizar a senha
    this.password = this.shuffleArray(passwordArray).join('');
  }

  // Função caractéres aleatórios
  randomCharacters(chars: string, count: number): string[] {
    let result = [];
    for (let i = 0; i < count; i++) {
      result.push(chars[Math.floor(Math.random() * chars.length)]);
    }
    return result;
  }

  // Função embaralhamento de caractéres
  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
