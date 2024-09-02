# Node

Este projeto tem como objetivo testar os recursos de uma API REST construída com Node.js, utilizando uma abordagem de testes automatizados.

## Conceitos

### Teste Unitário

São pequenos pedaços de código que verificam se funções específicas do aplicativo funcionam como esperado, de forma isolada dos outros componentes.

* Objetivo:

    - Verificar o Funcionamento: Assegura que a função testada executa corretamente.

    - Detecção Precoce de Erros: Ajudam a identificar e corrigir problemas no início do ciclo de desenvolvimento.

    - Garantia de Funcionalidade: Confirma que o código é funcional assim que o teste é aprovado.

<hr>

    Para comparar os resultados esperados com os obtidos, podemos utilizar o módulo de asserção nativo do Node.js:

    ```js
        import assert from "node:assert";
    ```

    Nota: Se ocorrer um erro, o teste falhará, indicando que algo não está conforme o esperado.

<hr>

### Mocha

É um framework de teste JavaScript amplamente utilizado para organizar e executar testes de forma estruturada.

* Organização dos Testes:

    - describe block (suites de teste): Agrupa casos de teste relacionados.

    - it block (casos de teste): Define os testes individuais dentro das suites.

* HOOKS - Ferramentas para gerenciar a execução de testes em diferentes momentos:

    - before: Executa uma vez antes de todos os testes da suite.

    - after: Executa uma vez após todos os testes da suite.

    - beforeEach: Executa antes de cada teste individual.

    - afterEach: Executa após cada teste individual.

### Chai

É uma biblioteca de asserção para Node.js que facilita a verificação dos resultados dos testes.

* Ela oferece três interfaces principais para escrita de asserções:

    - expect() - Um estilo mais legível e expressivo.

    - assert() - Estilo tradicional com funções assertivas.

    - should() - Extensão de objetos para asserções encadeadas.

Nota: Em caso de erro, o teste será bloqueado e falhará, ajudando a identificar problemas no código.

### Sinon

É uma biblioteca que auxilia no controle de dependências externas em testes, permitindo criar funções falsas (stubs, spies e mocks) para simular comportamentos de métodos que interagem com o código testado.

* Tipos de Test Doubles (Falsificações) com Sinon:

    1. SPY:

        É uma função falsa que monitora:

        - Os argumentos

        - O valor de retorno

        - O contexto de this

        - A exceção lançada (se houver)

    2. STUB:

        É um espião com comportamento pré-definido. Pode ser usado para:

        - Executar uma ação predeterminada, como lançar uma exceção

        - Fornecer uma resposta predeterminada

        - Impedir que um método específico seja chamado diretamente (especialmente quando ele aciona comportamentos indesejados, como solicitações HTTP)

    3. MOCK:

        Combina spys e stubs com expectativas pré-programadas. Útil para

        - Verificar se um método é chamado corretamente (contrato).

        - Checar o número de vezes que um método externo é invocado.

        - Confirmar que métodos externos são chamados com os parâmetros corretos.

## Estrutura da Aplicação

### Model:

    - Representa a estrutura dos dados da aplicação.

    - Define como os dados são armazenados e manipulados, geralmente mapeando as tabelas de um banco de dados

### Repository:

    - Responsável pela comunicação direta com o banco de dados.

    - Encapsula as operações de acesso a dados, como consultas, inserções, atualizações e exclusões.

    obs.: Facilita a troca de banco de dados ou a modificação da lógica de acesso a dados sem impactar outras camadas.

### Service:

    - Contém a lógica de negócios da aplicação.

    - Ela coordena a interação entre os repositórios e outras partes do sistema, aplicando as regras e processos da aplicação.

### Controller

    - É responsável por gerenciar as requisições HTTP que chegam à aplicação.

    - Atua como um intermediário entre o cliente (frontend ou API consumer) e a lógica de negócios (camada de Service).
