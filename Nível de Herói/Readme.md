https://github.com/Ele-Arcoverde/desafioNivelHeroi.git

## DESAFIO DIO E RESOLUÇÃO 

# 1️⃣- Desafio Classificador de nível de Herói
**O Que deve ser utilizado**:
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
## Objetivo:
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
## Saída: 
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"



# Como resolvi o Desafio Classificador de nível de Herói 
**--- Lógica do código**: 
O código basicamente calcula o nível do herói com base em sua quantidade de experiência (XP) e exibe o resultado no terminal. 

## 1- Declaração de Variáveis:
- nomeHeroi: Armazenar o nome do herói (jogador).
- pontosXpHeroi: Armazenar pontuação alcançada no jogo como um array *[vetor]*, (embora tenha apenas um elemento neste caso e não uma lista contendo diversos elementos).
- xpHeroi: Obtém e armazena o valor de XP do array pontosXpHeroi.
- nivelXpHeroi: Armazenar o nível do herói (bronze, prata, etc), depois de verificado o xpHeroi.

## 2- Escolha de Estrutura de Decisão IF, ELSE:
Optei por esta estrutura condicional para verificar o valor de "xpHeroi" e determinar o nível correspondente com base nas condições especificadas nas instruções do desafio.

Cada bloco Else If representa um intervalo específico de XP e atribui o nível correspondente à variável "nivelXpHeroi".

Inicialmente tentei com a estrutura Switch, porém o enunciado do desafio facilitou o entendimento e pareceu mais fácil gerar o código com If, Else
- **(Se XP for entre 1.001 e 2.000 = Bronze, substiui a frase por: if XP <= 1001 && XP >= 2000)**.

## 3- Operadores utilizados:
**Operadores de Comparação**:
- <= (menor ou igual a)
- >= (maior ou igual a)
- = (igualdade usado para verificar valor atribuído)

**Operadores Lógicos**:
- && ("And" ou "E", usado quando todas as condições são verdadeiras)

## 4- Loop FOR:
O loop For foi usado para iterar sobre os elementos do array [pontosXpHeroi], dentro dele inclui toda a Estrutura de Decisão. No entanto, como o array tem apenas um elemento, o loop será executado uma vez.


## 5- Saída no Terminal:
Por fim, a mensagem com o nome do herói e seu nível é exibida no terminal, através da concatenação entre os **textos +** resultados armazenados nas variáveis: **nomeHeroi e nivelXpHeroi**.

