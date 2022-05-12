const product =[
    {
        nome:'Banana',
        preco: 4,
    },
    {
        nome:'Uva',
        preco: 3,
    },
    {
        nome:'Maça',
        preco: 4,
    },
    {
        nome:'Pêra',
        preco: 6,
    },
    {
        nome:'Abacate',
        preco: 3,
    },
]

const body = document.querySelector("body")

    const main = document.querySelector("main")
        body.appendChild(main)

    const product_list = document.querySelector("ul")
        main.appendChild(product_list)

    const section = document.querySelector("section") 
           
      

    


function listarProdutos(listaProdutos){
    

    for(let i = 0; i<listaProdutos.length; i++){
        
        const produto = listaProdutos[i]

        const cardProduto = criarCardProduto(produto)
            product_list.appendChild(cardProduto)

    }
    
}
listarProdutos(product)


function criarCardProduto(produto){
    const nome = produto.nome
    const preco = produto.preco
    
    const  product_detail= document.createElement("li")
        product_list.appendChild(product_detail)
    const  tagNome       = document.createElement("p")
    const  tagPreco      = document.createElement("p")
        tagNome.id = name
        product_detail.appendChild(tagNome)
        product_detail.appendChild(tagPreco)

    tagNome.innerHTML    = `${nome}`
    tagPreco.innerHTML   = `${'R$'} ${preco}`

    return product_detail
}

    

    console.log(body)

    function valorTotal(soma){
        let somaPrecos = 0
        for(let i = 0; i < soma.length; i++){
            somaPrecos += soma[i].preco
        }
        return somaPrecos
    }
    console.log(valorTotal(product))


    const total = document.createElement("li")
        product_list.appendChild(total)
    const  tagTotal       = document.createElement("p")
    const  tagPrecoTotal  = document.createElement("p")
        total.appendChild(tagTotal)
        total.appendChild(tagPrecoTotal)

    tagTotal.innerHTML    = "Total"
    tagPrecoTotal.innerHTML   = `${'R$'}  ${valorTotal(product)}`

    const botaoContainer = document.createElement("div");
        const botao = document.createElement("button"); 
    
        botao.innerHTML = "Finalizar"
        botaoContainer.appendChild(botao)
        product_list.appendChild(botaoContainer)




