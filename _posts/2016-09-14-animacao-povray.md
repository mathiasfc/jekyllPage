---
layout: post
title: "Animação POV-Ray"
date: 2016-09-14
excerpt: "Animação feita no programa POV-Ray"
tags: [c#, computação gráfica, graduação]
comments: true
---


Este projeto foi gerado a partir da ferramenta <a href="https://en.wikipedia.org/wiki/POV-Ray">POV-ray</a>, versão 3.6/3.7. 
Consiste em um filme de três segundos que possui três objetos diferentes, tanto a câmera quanto os objetos se movimentam a cada frame.


<a href="../assets/img/posts/gif1.gif"><img src="../assets/img/posts/gif1.gif"></a>


Foram gerados 90 frames, totalizando 3 segundos de filme.
{: .notice}

Para fazer a movimentação de cada objeto foi adicionada a variável `clock` na função de translação do objeto. Cada um dos balões possui uma velocidade diferente. Para simular a rotação da câmera foi adicionada a mesma variável na função de localização.

Segue um snippet de como ficou o arquivo de configuração:

{% highlight javascript %}
Antialias=Off
Antialias_Threshold=0.1
Antialias_Depth=2

Input_File_Name="skyscene.pov"

Initial_Frame=1
Final_Frame=90
Initial_Clock=0
Final_Clock=3

Cyclic_Animation=on
Pause_when_Done=off
{% endhighlight %}


Todo o código que gera os frames pode ser encontrado <a href="https://drive.google.com/open?id=0B8sCkbWAECcZdkdfbzBNdXpzaGc">aqui</a>.