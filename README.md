# Quiz App (HTML, CSS e JavaScript)

Aplicação web de quiz feita com HTML, CSS e JavaScript puro, com foco em simplicidade, legibilidade e facilidade de manutenção.

## Visão geral

O projeto renderiza perguntas de múltipla escolha, permite uma resposta por questão, valida antes de avançar, calcula a pontuação final e exibe o resultado ao término.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Estrutura do projeto

```text
quiz-iel/
├── index.html
├── style.css
├── script.js
├── quiz.json
├── CLAUDE.md
└── README.md
```

## Como executar

Como o quiz depende de arquivo JSON local, o ideal é executar via servidor HTTP local (em vez de abrir o HTML direto no navegador).

### Opção 1: Python

```bash
python3 -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

### Opção 2: VS Code Live Server

- Instale a extensão Live Server
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

## Fluxo da aplicação

1. Exibe título e pergunta atual
2. Usuário seleciona uma alternativa
3. Ao clicar em "Próxima", valida seleção
4. Marca visualmente certo/errado
5. Avança para próxima pergunta
6. Exibe resultado final com acertos e porcentagem
7. Permite reiniciar o quiz

## Formato do quiz (quiz.json)

O arquivo `quiz.json` segue este formato:

```json
{
  "title": "Quiz de Conhecimentos Gerais",
  "questions": [
    {
      "id": 1,
      "question": "Qual é a capital do Brasil?",
      "options": ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      "answer": 1
    }
  ]
}
```

Regras:

- `answer` é o índice da alternativa correta (base 0)
- É possível adicionar quantas perguntas quiser no array `questions`

## Estado atual do projeto

Implementado:

- Interface responsiva com layout em card
- Alternativa selecionada destacada
- Feedback visual de resposta correta/incorreta
- Bloqueio de avanço sem seleção
- Pontuação final com porcentagem
- Botão para reiniciar quiz

Observação importante:

- Atualmente `script.js` usa um objeto mockado (`quizData`) em memória.
- O arquivo `quiz.json` já existe, mas ainda não está sendo carregado com `fetch()`.

## Próximos passos sugeridos

- Trocar o mock em `script.js` por carregamento real com `fetch("quiz.json")`
- Adicionar tratamento de erro para falha no carregamento
- (Opcional) Embaralhar perguntas e alternativas
- (Opcional) Salvar progresso com localStorage

## Definição de pronto (DoD)

- [ ] JSON carregando via `fetch()`
- [x] Perguntas renderizadas dinamicamente
- [x] Navegação funcionando
- [x] Pontuação correta
- [x] UI básica funcional
- [x] Código organizado

## Licença

Projeto para fins de estudo e uso pessoal.