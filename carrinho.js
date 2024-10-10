class carrinhoCompras {
    constructor() {
        this.itens = {}
        this.quantidade = 0
    }
    adicionarProduto(item, preco) {
        this.itens[this.quantidade] = {
            nome: item,
            preco: preco
        }
        this.quantidade++
    }
    remover() {
        if (this.quantidade === 0) {
            return undefined
        }
        var ultimoItem = this.itens[this.quantidade - 1]
        delete this.itens[this.quantidade - 1]
        this.quantidade--

        return ultimoItem
    }
    consultarItem(indice) {
        if (indice < 0 || indice >= this.quantidade) {
            return undefined
        }
        return this.itens[indice]
    }
    quantidadeItens() {
        return this.quantidade
    }
    limparCarrinho() {
        this.itens = {}
        this.quantidade = 0
    }
    calcularTotal() {
        var total = 0
        for (var i = 0; i < this.quantidade; i++) {
            total += this.itens[i].preco
        }
        return total
    }
     mostrarItens() {
        for (var i = 0; i < this.quantidade; i++) {
            var item = this.consultarItem(i);
            console.log("Item:", item.nome, "- Preço:", item.preco);
        }
    }                   
}


var carrinho = new carrinhoCompras()

carrinho.adicionarProduto("Paçoca ", 90)
carrinho.adicionarProduto("Trufa ", 10)
carrinho.adicionarProduto("Salgado doi reau ", 200)
carrinho.adicionarProduto("Salgado Ariel ", 700)

console.log("os itens do carrinho são ")
carrinho.mostrarItens()


console.log("o valor total dos items é de " + carrinho.calcularTotal())

console.log("o item 2 do carrinho é " + carrinho.consultarItem(1).nome)
console.log("a quantidade de itens do carrinho é " + carrinho.quantidadeItens())

console.log("o ultimo item " + carrinho.remover(1).nome + "foi removido ")
console.log("a quantidade de itens do carrinho é " + carrinho.quantidadeItens())
console.log("o valor total dos items é de " + carrinho.calcularTotal())

carrinho.limparCarrinho()
console.log("remover tudoo")
carrinho.limparCarrinho()
console.log("a quantidade de itens do carrinho é " + carrinho.quantidadeItens())