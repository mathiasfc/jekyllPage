---
layout: post
title: 'Colisão entre dois elementos'
date: 2017-06-12
excerpt: 'Mini-tutorial de como detectar uma colisão entre dois elementos utilizando a linguagem JavaScript'
tags: [javascript, jquery, html]
comments: true
---

Para mostrar como funciona a detecção de colisão entre dois objetos em <b>javascript</b> utilizando <b>jquery</b>, vou utilizar duas div's quadradas inseridas em um plano <b>2D</b> (x,y), lembrando que  a detecção de colisão pode ser aplicada para qualquer forma de objeto, desde que tenhamos as dimensões dos objetos em questão e suas respectivas posições. Esse algoritmo serve também para planos em 3D (x,y,z), obviamente que a complexidade da detecção aumentará, mas o raciocínio permanece o mesmo.

<figure>
	<img src="../assets/img/posts/img10.png">
</figure>

No exemplo em questão os dois objetos (div's) vão possuir as seguintes dimensões, a primeira div (<span style="color:blue">azul</span>) possui 100 pixels de altura e 100 pixels de largura, a segunda div (<span style="color:red">vermelha</span>) possui a metade do tamanho da primeira, logo 50 pixels de altura e 50 pixels de largura.

<figure>
	<img src="../assets/img/posts/img11.png">
</figure>

## Posicionamento

O próprio <b>jquery</b> disponibiliza duas formas de obter a posição de um elemento:

-   <a href="http://api.jquery.com/offset/">Offset</a>:
    <i>Get the current coordinates of the first element in the set of matched elements, relative to the document.</i>
-   <a href="https://api.jquery.com/position/">Position</a>:
    <i>Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.</i>

O `.offset()` retorna a posição top e left do elemento em relação ao documento, diferentemente do `.position()` que retorna as posições em relação ao ancestral mais próximo. Não explicarei a fundo os métodos visto que não é a intenção deste post, para entender mais sobre eles basta acessar esses link's da própria documentação: <a href="http://api.jquery.com/offset/">offset</a>, <a href="https://api.jquery.com/position/">position</a>.

## Colisão

A colisão nesse contexto que criamos, considerando somente estes dois elementos, vai acontecer quando as seguintes condições forem verdadeiras:

### Na horizontal:

Quando a extremidade direita do elemento mais a esquerda (<span style="color:blue">A2</span>) for maior ou igual a extremidade esquerda do elemento mais a direita (<span style="color:red">V1</span>) e menor ou igual a extremidade direita do elemento mais a direita (<span style="color:red">V2</span>).

<center><span style="font-size:19px"><span style="color:red">V1</span><=<span style="color:blue">A2</span><=<span style="color:red">V2</span></span></center>

TODO....
