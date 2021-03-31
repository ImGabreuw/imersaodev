# Aula 1 - Conversor de Moedas e Variáveis

### Tags HTML

* h1 = Título

* p = Parágrafo

### Propriedades CSS

* color = colocar uma cor
* text-align: center = centralizar o texto

### JS

* Funções
    * _alert_ = popup de alerta
    * _prompt_ = popup com um campo de texto
    * _parseInt_ = transforma um _String_ para _Int_

* Variáveis

    * Sintaxe
    ```js
    var nome_da_variavel = valor
    ```

    * Exemplo
    ```js
    var nome = "Rafaella"
    ```

### Exemplos

* Exemplo 1
    ```js
    var idadeUsuario = prompt("Quantos anos você tem?") // INPUT = 29

    idadeUsuario = idadeUsuario + 1

    alert(idadeUsuario) // OUTPUT = 291
    ```

* Exemplo 2
    ```js
    var idadeUsuarioComoTexto = prompt("Quantos anos você tem?") // INPUT = 29

    var idadeUsuarioComoNumero = parseInt(idadeUsuarioComoTexto)

    idadeUsuarioComoNumero = idadeUsuarioComoNumero + 1

    alert(idadeUsuarioComoNumero) // OUTPUT = 30
    ```