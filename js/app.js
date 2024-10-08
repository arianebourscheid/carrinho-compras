let totalGeral;
limpar();

function adicionar() {
    //recuperar valores (nome do produto, quantidadee valor)
    let produto = document.getElementById('produto').value; 

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // vamos usar o recurso split para separar um string em array
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    
    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    // calcular o preço (nosso subtotal)
    let preco = quantidade * valorUnitario;

    // adicionar esse produto no carrinho (qual o produto escolhido e o valor total)
    // cada item no carrinho é representado pela tag section
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

    // atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R${totalGeral}`;
    document.getElementById('quantidade').value= 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').innerHTML = 'R$ 0'
}