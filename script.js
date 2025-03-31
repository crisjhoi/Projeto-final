document.addEventListener("DOMContentLoaded", function () {
   let carrinho = [];
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");
    const botoesAdicionar = document.querySelectorAll(".add-to-cart");
    const botaoLimparCarrinho = document.getElementById("limpar-carrinho");

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", function () {
            let nome = this.getAttribute("data-nome");
            let preco = parseFloat(this.getAttribute("data-preco"));

            carrinho.push({ nome, preco });
            atualizarCarrinho();
        });
    });

    botaoLimparCarrinho.addEventListener("click", function () {
        carrinho = [];
        atualizarCarrinho();
    });

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = "";
        let total = 0;
    
        carrinho.forEach((item, index) => {
            let li = document.createElement("li");
    
            
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";
            li.style.padding = "5px 10px";
            li.style.borderBottom = "1px solid #ccc";
    
            // Nome do produto
            let nomeProduto = document.createElement("span");
            nomeProduto.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    
            // Botão "Remover"
            let botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.classList.add("btn", "btn-sm", "btn-danger");
            botaoRemover.style.marginLeft = "10px"; // Espaço entre nome e botão
    
            botaoRemover.addEventListener("click", function () {
                carrinho.splice(index, 1);
                atualizarCarrinho();
            });
    
            
            li.appendChild(nomeProduto);
            li.appendChild(botaoRemover);
            listaCarrinho.appendChild(li);
    
            total += item.preco;
        });
    
        totalCarrinho.textContent = total.toFixed(2);

//Carrossel de imagens    
    }
    const imgs = document.getElementById("img");
    const img = document.querySelectorAll("#img img");
    
    let idx = 0;
    
    function carrossel() {
        idx++;
    
        if (idx > img.length - 1) {
            idx = 0;
        }
    
        imgs.style.transform = `translateX(${-idx * window.innerWidth}px)`;
    }
    
    setInterval(carrossel, 3100);
    

    
});


//Entrega ou retirada
document.addEventListener("DOMContentLoaded", function () {
    let carrinho = [];
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");
    const botoesAdicionar = document.querySelectorAll(".add-to-cart");
    const botaoLimparCarrinho = document.getElementById("limpar-carrinho");
    
    const tipoAgendamento = document.getElementById("tipo-agendamento");
    const dataHorario = document.getElementById("data-horario");
    const botaoConfirmarAgendamento = document.getElementById("confirmar-agendamento");
    const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = "";
        let total = 0;
        
        carrinho.forEach((item, index) => {
            let li = document.createElement("li");
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";
            li.style.padding = "5px 10px";
            li.style.borderBottom = "1px solid #ccc";

            let nomeProduto = document.createElement("span");
            nomeProduto.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

            let botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.classList.add("btn", "btn-sm", "btn-danger");
            botaoRemover.style.marginLeft = "10px";

            botaoRemover.addEventListener("click", function () {
                carrinho.splice(index, 1);
                atualizarCarrinho();
            });

            li.appendChild(nomeProduto);
            li.appendChild(botaoRemover);
            listaCarrinho.appendChild(li);
            total += item.preco;
        });

        // Verifica se a tele-entrega foi selecionado
        if (tipoAgendamento.value === "entrega") {
            let taxaEntrega = document.createElement("li");
            taxaEntrega.style.display = "flex";
            taxaEntrega.style.justifyContent = "space-between";
            taxaEntrega.style.alignItems = "center";
            taxaEntrega.style.padding = "5px 10px";
            taxaEntrega.style.borderBottom = "1px solid #ccc";
            taxaEntrega.style.color = "red";
            taxaEntrega.style.fontWeight = "bold";

            let descricaoTaxa = document.createElement("span");
            descricaoTaxa.textContent = "Taxa de Tele-entrega";

            let valorTaxa = document.createElement("span");
            valorTaxa.textContent = "R$ 10.00";

            taxaEntrega.appendChild(descricaoTaxa);
            taxaEntrega.appendChild(valorTaxa);
            listaCarrinho.appendChild(taxaEntrega);

            total += 10.00;
        }

        totalCarrinho.textContent = total.toFixed(2);
    }

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", function () {
            let nome = this.getAttribute("data-nome");
            let preco = parseFloat(this.getAttribute("data-preco"));
            carrinho.push({ nome, preco });
            atualizarCarrinho();
        });
    });

    botaoLimparCarrinho.addEventListener("click", function () {
        carrinho = [];
        atualizarCarrinho();
    });

    tipoAgendamento.addEventListener("change", atualizarCarrinho);

    botaoConfirmarAgendamento.addEventListener("click", function () {
        if (!tipoAgendamento.value || !dataHorario.value) {
            mensagemConfirmacao.textContent = "Por favor, selecione uma opção e um horário.";
            mensagemConfirmacao.style.color = "red";
            mensagemConfirmacao.style.display = "block";
            return;
        }

        mensagemConfirmacao.textContent = `Agendamento confirmado para ${dataHorario.value} (${tipoAgendamento.options[tipoAgendamento.selectedIndex].text})`;
        mensagemConfirmacao.style.color = "green";
        mensagemConfirmacao.style.display = "block";
    });
});

 