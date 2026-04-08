# 🧠 Quiz App (HTML, CSS, JS) — Especificação do Projeto

## 📌 Visão Geral

Este projeto consiste em uma aplicação web simples de quiz, construída com **HTML, CSS e JavaScript puro**, onde todas as perguntas, alternativas e respostas são carregadas dinamicamente a partir de um arquivo JSON.

O objetivo é criar uma base reutilizável, escalável e fácil de manter.

---

## 🎯 Objetivos

- Criar um quiz dinâmico baseado em JSON
- Separar claramente dados (JSON) da lógica (JS)
- Permitir fácil adição de novas perguntas
- Exibir pontuação ao final
- Ter uma UI simples, limpa e responsiva

---

## 📁 Estrutura do Projeto

```
quiz-app/
│
├── index.html
├── style.css
├── script.js
└── quiz.json
```

---

## 🧾 Estrutura do JSON (`quiz.json`)

O quiz será totalmente configurado através deste arquivo.

### Exemplo:

```json
{
  "title": "Quiz de Conhecimentos Gerais",
  "questions": [
    {
      "id": 1,
      "question": "Qual é a capital do Brasil?",
      "options": ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      "answer": 1
    },
    {
      "id": 2,
      "question": "Quanto é 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "answer": 1
    }
  ]
}
```

### Regras:

- `answer` é o índice da alternativa correta (base 0)
- O sistema deve suportar qualquer quantidade de perguntas

---

## 🧱 HTML (`index.html`)

### Estrutura base:

- Título do quiz
- Container da pergunta
- Lista de alternativas
- Botão "Próxima"
- Tela de resultado

### Elementos principais:

```html
<div id="quiz-container">
  <h1 id="quiz-title"></h1>
  <div id="question-container"></div>
  <div id="options-container"></div>
  <button id="next-btn">Próxima</button>
</div>

<div id="result-container" style="display: none;">
  <h2>Resultado</h2>
  <p id="score"></p>
  <button id="restart-btn">Reiniciar</button>
</div>
```

---

## 🎨 CSS (`style.css`)

### Objetivos:

- Layout centralizado
- Responsivo
- Destaque visual para alternativa selecionada
- Feedback de resposta (correta/incorreta)

### Sugestões:

- Usar `flexbox`
- Botões com hover
- Classes:
  - `.selected`
  - `.correct`
  - `.wrong`

---

## ⚙️ JavaScript (`script.js`)

### Responsabilidades:

#### 1. Carregar JSON

```js
fetch("quiz.json");
```

#### 2. Controlar estado:

- Pergunta atual
- Pontuação
- Alternativa selecionada

#### 3. Renderizar pergunta

- Atualizar DOM com pergunta atual
- Criar botões dinamicamente para alternativas

#### 4. Seleção de resposta

- Permitir apenas uma seleção
- Destacar escolha

#### 5. Próxima pergunta

- Validar resposta
- Atualizar pontuação
- Avançar índice

#### 6. Finalização

- Mostrar resultado
- Ocultar quiz

#### 7. Reiniciar quiz

- Resetar estado
- Voltar para primeira pergunta

---

## 🔁 Fluxo da Aplicação

1. Carrega JSON
2. Exibe título
3. Mostra primeira pergunta
4. Usuário seleciona alternativa
5. Clica em "Próxima"
6. Repete até acabar
7. Exibe resultado final
8. Opção de reiniciar

---

## 🧠 Regras de Negócio

- Não permitir avançar sem selecionar uma resposta
- Cada pergunta vale 1 ponto
- Resultado final:

  ```
  Você acertou X de Y perguntas
  ```

- (Opcional) Mostrar porcentagem

---

## ✨ Funcionalidades Extras (Opcional)

- Timer por pergunta
- Shuffle de perguntas
- Shuffle de alternativas
- Feedback imediato (mostrar certo/errado)
- Barra de progresso
- Salvamento de progresso (localStorage)

---

## 🚀 Possíveis Melhorias Futuras

- Backend para persistência
- Ranking de usuários
- Login/autenticação
- Suporte a múltiplos quizzes
- Tema escuro

---

## 🧪 Exemplo de Execução

1. Abrir `index.html`
2. O app carrega `quiz.json`
3. Renderiza dinamicamente o quiz
4. Usuário interage até o final

---

## 📦 Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📌 Observações

- Não usar frameworks
- Código simples e legível
- Separação clara entre dados e lógica

---

## ✅ Definição de Pronto (DoD)

- [ ] JSON carregando corretamente
- [ ] Perguntas renderizadas dinamicamente
- [ ] Navegação funcionando
- [ ] Pontuação correta
- [ ] UI básica funcional
- [ ] Código organizado

---
