<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles/globalStyles.css">
  <link rel="stylesheet" type="text/css" href="styles/index.css">
</head>
<body>
  <h1>Estrutura</h1>

  <h2>Criando Estrutura de pastas</h2>
  <pre>
  🗂 src
  🗂 assets
    📄 favicon.ico
  🗂 scripts
    📄 index.js
    📄 modal.js
    📄 valuesData.js
  🗂 styles
    📄 globalStyles.css
    📄 index.css
  📄 index.html
  </pre>

  <h2>Estilização e Comportamento Visual</h2>

  <h3>Variáveis de estilos</h3>
  <p>A partir do style guide, crie no arquivo <code>globalStyles.css</code> as variáveis de cores, tamanhos de textos, tamanhos de inputs/buttons e border-radius.</p>
  <pre>
  :root {
    --color-grey-1: /* value */;
    --color-grey-2: /* value */;
    --color-grey-3: /* value */;
    --color-grey-4: /* value */;

    --font-size-1: /* value */;
    --font-size-2: /* value */;
    --font-size-3: /* value */;
    --font-size-4: /* value */;

    --radius-1: /* value */;
    --radius-2: /* value */;

    --bt-input-size: /* value */;
  }
  </pre>

  <p>Ótimo, tendo todos esses tokens prontos, siga para as outras etapas de estilização, isolando estilos de componentes nos arquivos criados:</p>

  <ul>
    <li>Navbar</li>
    <li>Área de filtros</li>
    <li>Cards de valores</li>
    <li>Modal com formulário</li>
  </ul>

  <h3>Funcionalidade do Modal</h3>
  <p>Finalizando todas as estilizações, crie a funcionalidade de modal para ser aberto conforme o clique de um botão, deixe o seu modal pronto para ser utilizado em outros contextos também.</p>
  <pre>
    <button class="insert-value"></button>
    <dialog class="modal__controller">
      <div class="modal__container">
        Conteúdo do seu modal aqui...
      </div>
    </dialog>
  </pre>

  <p>Ótimo, agora temos todos os estilos prontos e a funcionalidade global de modal. Teste a aplicação visualmente em dispositivos diferentes do desktop para observar se existe algum ponto visual para ser corrigido.</p>

  <h2>Funcionalidades</h2>

  <h3>Criando array responsável por armazenar as categorias de valores inseridos pelo usuário</h3>
  <p>No arquivo <code>index.js</code> dentro da pasta <code>src/scripts</code>:</p>
  <pre>
    const valuesCategory = ["Entrada", "Saída"];
  </pre>

  <h3>Criando objeto responsável por armazenar os dados de valores inseridos pelo usuário, relacionando com o array de categorias</h3>
  <p>Agora, no mesmo arquivo, crie uma variável chamada <code>insertedValues</code> e armazene alguns valores iniciais, esses valores serão referentes aos dados inseridos pelo usuário, terão as seguintes informações:</p>
  <pre>
    let insertedValues = [
      {
        id: 0,
        value: 19.0,
        categoryID: 0,
      },
      {
        id: 1,
        value: 400.0,
        categoryID: 1,
      },
      {
        id: 2,
        value: 193.0,
        categoryID: 1,
      },
    ];
  </pre>

  <h3>Criando array de objeto responsável por armazenar os dados filtrados pelo usuário</h3>
  <p>Agora, crie uma variável responsável por armazenar os filtros selecionados pelo usuário.</p>
  <pre>
    let insertedValuesfiltered = [];
  </pre>

  <p>Ótimo, agora temos todos os dados necessários para iniciar a implementação.</p>

  <h2>Criando funções</h2>
  <p>Agora, a partir dos dados criados acima, siga os próximos passos:</p>

  <ul>
    <li>Criar função responsável por receber um HTML e renderizar em tela</li>
    <li>Renderizar os dados do array de objetos <code>insertedValues</code> em tela</li>
    <li>Renderizar a soma de todos os valores da propriedade <code>value</code> do array de objetos <code>insertedValues</code> em tela</li>
    <li>Criar função responsável por filtrar os dados a partir do ID passado como argumento e atualizar o arrays de objetos <code>insertedValuesfiltered</code></li>
    <li>Renderizar os dados do array de objetos <code>insertedValuesfiltered</code> em tela a partir da ação de clique do usuário nos botões de filtros</li>
    <li>Renderizar a soma de todos os valores da propriedade <code>value</code> do array de objetos <code>insertedValuesfiltered</code> em tela a partir da ação de clique do usuário nos botões de filtros</li>
    <li>Criar função responsável por remover os dados a partir do ID passado como argumento e atualizar o arrays de objetos <code>insertedValues</code> e <code>insertedValuesfiltered</code></li>
    <li>Remover item que estava, antes, renderizado em tela</li>
    <li>Criar função responsável por somar todos os dados de algum array que for passado como parâmetro</li>
    <li>Renderizar a soma de todos os valores inseridos pelo usuário</li>
    <li>Atualizar a soma de acordo com o filtro selecionado pelo usuário</li>
    <li>Criar função responsável por inserir um novo dado no array <code>insertedValues</code></li>
    <li>Renderizar o novo valor em tela</li>
  </ul>

  <p>Ótimo, agora você possui a estrutura básica e as funcionalidades para continuar desenvolvendo a aplicação.</p>
</body>
</html>
