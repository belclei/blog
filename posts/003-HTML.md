---
slug: 'html'
title: 'Seus primeiros conceitos sobre HTML'
subtitle: 'O segredo para uma evolução rápida e consistente em desenvolvimento de software é conhecer bem os conceitos elementares das tecnologias que estiver utilizando. De vagar, vá aumentando a complexidade e agregando novos conceitos, sem deixar lacunas, ou pular etapas.'
image: '/posts/003.png'
createdAt: '2022-01-21T06:00:00.300-03:00'
---

A intenção deste post é ser bastante prático, para que aprendas enquanto faz suas primeiras páginas web. Se você já conhece, acompanhe até o final, pois pode aprender coisa nova.
Te peço feedback.

# Conceitos

Antes de colocarmos a mão na massa de verdade quero te apresentar o conceito mais importante do HTML, as _tags_.

Eu te falei no último post que quando foi criada a web, a intenção era que trabalhos científicos fossem divulgados de uma maneira eficiente, e que pudessem se interligar, formando uma verdadeira teia de informações. Pois bem, você já viu um trabalho científico? Uma pequena representação de um texto científico pode ser representada assim:

```
1.0 Mitocondrias
Aqui eu faço uma abertura do conteúdo que está por vir.
1.1 Tipos de mitocondrias
Aqui eu começo a falar sobre os tipos de mitocondrias.
1.2 Porque mitocondrias são importantes?
Conforme disse o professor Entendido Da Silva, no artigo "A importância das mitocôndrias":
"As mitocondrias são importantes. Elas são MITO.".
```

Mas este texto, assim, corrido, sem cores, nem hierarquia visual, nem ligações, é só um texto. Como poderíamos fazer com que este texto ficasse então bem formatadinho, para facilitar a vida de quem está tentando ler? Será que não tem alguma maneira de fazer uma "marquinha" no texto indicando, por exemplo, onde é o título, pra fazer ele ficar em destaque? Pois bem, existe sim, é a _tag_. A tag é usada para indicar ao _navegador_, que é quem processa o html, quando você quer que ele trate um pedacinho do texto de maneira diferente do que vinha fazendo até então.

Por exemplo, vamos incluir a marcação do título principal do texto. Ficaria assim: `<titulo>1.0 Mitocondrias</titulo>`. A primeira marcação é a tag de abertura, e a última é a tag de fechamento. Se quisessemos mudar o comportamento da tag título, indicando, por exemplo, que texto deve estar em vermelho, poderíamos incluir um atributo informando a cor desejada. Neste caso: `<titulo cor="vermelha">1.0 Mitocondrias</titulo>`. Agora, ao processar o HTML, o navegador sabe que além de dar destaque, também deve deixar o texto "1.0 Mitocondrias"em vermelho.

Então, a anatomia de uma tag HTML é:

- Tag de abertura: `<titulo>`
- Atributos (quantos forem necessários): `cor`
- Valores dos atributos: `vermelha`
- Conteúdo, ou filho: `1.0 Mitocondrias`
- Tag de fechamento: `</titulo>`

Quando uma tag não possui conteúdo filho, como por exemplo a tag que indica quebra de linha, podemos usar uma maneira simplificada de representação. Neste caso a tag fecha nela mesma, ou seja, não há necessidade de uma tag de abertura e outra de fechamento, basta incluir uma barra ao final da tag: `<QuebraDeLinha />`.

Pronto, agora você já foi apresentado às tags, agora vamos passar a utilizar tags reais, que são compreendidas pelos navegadores. Não achou que elas eram escritas em português, né?

Ah, no final do artigo eu te mostro como o texto das mitocôndrias seria representado corretamente em uma página html.

# Mão na massa

## Intuindo o significado das tags

No último post eu te convidei a tentar relacionar as partes de uma página web com seu código HTML. Esta era a página web:

![Exemplo de página html](/posts/002/60.png)

Pois bem, vamos começar procurando os textos presentes na página:

- Minha primeira página HTML
- Olá, Mundo!
- Esta é a minha primeira página web. Estou muito feliz!
- Acessar o Blog do Belclei

Estão todos presentes no HTML. Mas e todo o resto?

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha primeira página HTML</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
    <p>Esta é a minha primeira página web. Estou muito feliz!</p>
    <a href="http://www.belclei.dev.br">Acessar o Blog do Belclei</a>
  </body>
</html>
```

Bom, todo o resto é o que indica como se dará a estrutura da página e de que maneira estes textos estarão dispostos na página.

Podemos perceber que "Minha primeira página HTML" é o título da página. É por isso que ela está um pouco separadinha dos outros textos, entre as _tags_(guarde esse nome) `<title>` e `</title>`. Agora note que os outros textos estão na parte principal da página (com fundo branco). Esta parte foi denominada como corpo da página. É por isso que foram todos colocados entre `<body>` e `</body>`.

Agora sobre os estas 3 linhas onde estão presentes os textos que vemos na página, porquê ao texto "Olá, Mundo!" é um pouco maior do que os outros? Porque a tag `h1` indica que ele é um título do texto. Agora vamos falar sobre a tag `p`, que é uma abreviação de parágrafo. É nela que é colocado o texto normal de uma página.

Chegamos ao último dos textos destacados: "Acessar o Blog do Belclei". Este é um texto especial, por isso o browser o destacou em azul, e por isso quando o mouse está sobre ele, o ponteiro muda para uma mãozinha. Este texto é um link, e o navegador sabe disso porque está dentro da tag `a`, que é a abreviação de âncora. A ideia é que, este texto está ancorado em um conteúdo presente em outro lugar. E que lugar seria esse? o Blog do Belclei. E o navegador sabe que ao clicar neste link você deve ser redirecionado para o blog do Belclei graças ao valor que você informou no atributo `href`, ou seja, http://www.belclei.dev.br.

Vamos ver agora para que são usadas as outras tags.

O `doctype`, na primeira linha, indica qual das versões do HTML será usado para interpretar as tags. Escrito desta forma `<!DOCTYPE html>` indica a última versão, o HTML5.

Todo o HTML que escrevemos deve necessariamente ser filho de uma tag `<html>`. E neste caso utilizamos o atributo "lang" para indicar que os textos estão escritos em Português (BR).

Os dois elementos filhos de `<html>` são `<head>` e `<body>`. O segundo você já viu, diz respeito ao conteúdo em sí. Na tag `<head>` é onde são definidas algumas informações sobre o documento, a principal é a `<title>`. Neste lugar também é usada a tag `<meta>`, que é utilizada para descrever os metadados de uma página. Geralmente são utilizadas várias vezes em uma página, cada uma descrevendo um atributo diferente. Neste nosso exercício foi indicado que a codificação dos caracteres está em "UTF-8". Te explico melhor algum dia desses. Por hora, segue usando assim. Outros atributos da tag meta também podem indicar para o google informações que serão exibidas quando alguém pesquisar pelo teu site, por exemplo. Este também é um assunto para um próximo artigo.

Agora acho que você já está entendendo como funciona esse negócio de tags. Mas você não precisa acreditar em mim, te dizendo que o resultado daquele html vai ser a página que te mostrei. Crie aí no teu computador um arquivo chamado `primeiro.html` e escreva o código html que te mostrei. Para isso você pode utilizar o bloco de notas mesmo. Em seguida, abra este arquivo utilizando qualquer navegador à sua escolha (Edge, Chrome, Safari, Firefox, etc).

**Parabéns!** Você criou sua primeira página HTML. 👏👏👏

Agora vem a segunda. Vamos para mais um exemplo?

## Hierarquia de cabeçalhos

Existem 6 tags para indicar títulos (h1, h2, h3, h4, h5, e h6). O H significa heading (cabeçalho), e os números indicam o nível hierárquico dos mesmos. Veja um exemplo utilizando cabeçalhos para você criar aí no seu computador e ver como fica:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Metodos de preparo de café</title>
  </head>
  <body>
    <h1>Métodos de preparo de café</h1>
    <p>Existem quatro categorias de preparo de café.</p>

    <h2>Ebulição</h2>
    <p>Muito utilizado na Europa</p>
    -
    <h3>Café turco</h3>
    <p>Se você é um amante de café bem forte e escuro, então o café turco é a pedida ideal.</p>
    <h3>Método do Cowboy</h3>
    <p>Não requer nenhum equipamento especial.</p>

    <h2>Filtragem</h2>
    <p>Tradicional no Brasil</p>
    <h3>Bee House Dripper</h3>
    <p>Este é um modelo que serve como bom ponto de partida para quem quer dominar a arte do café coado.</p>
    <h3>Coador tradicional</h3>
    <p>
      Aqui, temos o tradicional café coado brasileiro, presente na maioria das casas e que costuma servir como o
      primeiro degrau na escada de degustação de cafés.
    </p>

    <h2>Infusão</h2>
    <p>Feito em recipientes com o café já misturado com água quente.</p>
    <h3>Prensa Francesa</h3>
    O processo costuma levar em torno de 10 minutos para ficar pronto e o café fica aromático e bem saboroso.

    <h2>Pressão</h2>
    <p>Popularmente chamado de café expresso.</p>

    <h3>Expresso</h3>
    <p>O sabor é forte, limpo e rico.</p>
    <h3>Moka</h3>
    <p>O café sai forte e bem saboroso e o segredo está na escolha da moagem correta.</p>
  </body>
</html>
```

Embora até funcione, você não deveria deixar um texto "órfão", ou seja, sendo "irmão" de outros elementos em tags html. Neste exemplo, a explicação sobre a Prensa Francesa deveria estar dentro de uma tag. Você notou que tinha algo estranho? A `p` provavelmente seria a mais adequada. Quando tratarmos de CSS você vai entender um dos motivos pelos quais é importante manter os textos dentro das tags corretamente.

As tags HTML possuem inúmeros atributos, mas você não precisa se preocupar em conhecê-los todos agora. A maioria não é obrigatória. Quando ficar em dúvida e precisar consultar informações sobre tags, seus usos e atributos, basta pesquisar por elas nos sites que eu vou deixar aqui nas _referências_.

## Voltando às mitocondrias

Conforme prometido, segue o html referente ao texto apresentado sobre as mitocôndrias:

Texto mitocondrias

```html
<!DOCTYPE html>
<html lang="pt_BR">
  <head>
    <meta charset="UTF-8" />
    <title>Mitocôndrias</title>
  </head>
  <body>
    <h1>1.0 Mitocôndrias</h1>
    <p>Aqui eu faço uma abertura do conteúdo que está por vir.</p>
    <h2>1.1 Tipos de Mitocôndrias</h2>
    <p>Aqui eu começo a falar sobre os tipos de mitocôndrias.</p>
    <h2>1.2 Porque Mitocôndrias são importantes?</h2>
    <p>
      Conforme disse o professor Entendido Da Silva, no artigo
      <a href="http://mitocondrias.com.br">"A importância das mitocôndrias"</a>:
    </p>
    <blockquote cite="http://mitocondrias.com.br">
      <p>"As mitocôndrias são importantes. Elas são <em>MITO</em>.".</p>
    </blockquote>
  </body>
</html>
```

Tags novas:

- `<bloquote>` - Indica uma citação. O atributo cite é só para indicar de onde veio a citação.
- `<em>` - Indica uma _ênfase_ que deve ser aplicada no texto.

# Comentários

Com o conteúdo que vimos até aqui você já tem bastante condições de ir testando por conta própria. Você pode criar em HTML alguns artigos, trabalhos escolares, receitas gastronômicas, currículos, enfim... o céu é o limite. Crie-os e guarde com carinho em alguma pasta do seu computador. Cada vez que eu trouxer aqui algum conteúdo novo, você pode revisitá-los e incrementá-los. Vai ajudar muito teu progresso nesse mundo da web.

E se nesse processo você tiver alguma dúvida, basta vir aqui e deixá-la nos comentários. Eu ficarei muito feliz em ajudar respondendo teus questionamentos.

Isso me fez lembrar de outro recurso presente no HTML. Imagine que você queira deixar alguma anotação no seu arquivo HTML para facilitar o teu entendimento quando ler o código. Você não quer que esta anotação apareça na página, é só uma anotaçãozinha para tua referência no código. Te apresento os _comentários_ no HTML.

Neste exemplo você deixou uma explicação sobre a tag `<bloquote>`para não esquecer seu significado. Basta deixar o comentário entre `<!--`e `-->`que o navegador simplesmente irá ignorá-lo quando for renderizar o site. Ficaria assim:

```html
    <p>
      Conforme disse o professor Entendido Da Silva, no artigo
      <a href="http://mitocondrias.com.br">"A importância das mitocôndrias"</a>:
    </p>
    <!-- A tag bloquote é usada para indicar que estou usando o texto de outra pessoa -->
    <blockquote cite="http://mitocondrias.com.br">
      <p>"As mitocôndrias são importantes. Elas são <em>MITO</em>.".</p>
    </blockquote>
  </body>
```

# No próximo artigo

No próximo artigo vamos acelerar um pouco as coisas. Vou te trazer uma lista bastante completa para referência sobre tags HTML. Salve nos seus favoritos para te ajudar a consultá-los.
Até a próxima. 👨🏻‍💻

# Referencias

https://www.pressca.com.br/blog/metodos-de-preparo-de-cafe/

https://www.w3schools.com/
https://developer.mozilla.org/
