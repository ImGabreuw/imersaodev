# Aluraflix e Arrays

### Arrays

* Conjunto de dados à serem armazenadas em memória

* Sintaxe
    ```js
    var nome_do_array = [valor1, valor2]
    ```

### Propriedade _push_

* Adicionar/Empurrar um valor no Array

* Sintaxe
    ```js
    var filmes = []

    filmes.push(valor1)
    filmes.push(valor2)
    ```

### Recuperação de um elemento

* Recuperação de um elemento a partir do index

* OBS: o _index_ começa sempre no 0

* Sintaxe
    ```js
    var filmes = [valor0, valor1]

    console.log(filmes[index])
    ```


### Adicionar um valor no Array

* Adicionar / Empurrar um valor no Array

* Sintaxe
    ```js
    var filmes = []

    filmes.push(valor1)
    filmes.push(valor2)
    ```

### Propriedade _length_

* Tamanho do array, ou seja, quantidade de elemento dentro dela

* Sintaxe
    ```js
    var filmes = [valor1, valor2]

    console.log(filmes.length) // 2
    ```

### _for_

* Percorrer / Iterar um array

* OBS: 
    * i++ = i = i + 1
    * i-- = i = i - 1

* Sintaxe
    ```js
    var filmes = [valor1, valor2]

    for (var i = 0; i < filmes.length; i++) {
        // TODO
    }
    ```

### Exemplos

* Exemplo sem o uso de Array
    ```js
    var filme1 = "Star Wars"
    var filme2 = "Toy Story"
    var filme3 = "Interestellar"

    console.log(filme1) // Star Wars
    console.log(filme2) // Toy Story
    console.log(filme3) // Interestellar
    ```

* Exemplo com o uso de Array (VALORES INICIAIS)
    ```js
    var filmes = ["Star Wars", "Toy Story", "Interestellar"]

    console.log(filmes) // ["Star Wars", "Toy Story", "Interestellar"]
    ```

* Exemplo com o uso de Array (SEM VALORES INICIAIS)
    ```js
    var filmes = []

    console.log(filmes) // []
    ```

* Exemplo com push
    ```js
    var filmes = []

    filmes.push("Star Wars")
    filmes.push("Toy Story")

    console.log(filmes) // ["Star Wars", "Toy Story"]
    ```

* Exemplo de recuperação de um elemento
    ```js
    var filmes = ["Star Wars", "Toy Story", "Interestellar"]

    console.log(filmes[1]) // Toy Story
    ```

* Exemplo para ver a quantidade de elementos
    ```js
    var filmes = ["Star Wars", "Toy Story", "Interestellar"]

    console.log(filmes.length) // 3
    ```

* Exemplo de _for_
    ```js
    for (var i = 3; i > 0; i--) {
        console.log(i)
    }

    // 3
    // 2
    // 1
    ```

    ```js
    var filmes = ["Star Wars", "Toy Story", "Interestellar", "Esqueceram de mim", "Marley e eu"]

    for (var i = 0; i < filmes.length; i++) {
        console.log(filmes[i])
    }

    // Star Wars
    // Toy Story
    // Interestellar
    // Esqueceram de mim
    // Marley e eu
    ```