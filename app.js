let tela = $('#tela');
buttons = $('button');
let valor = '';

buttons.each(function() {
    let botao = $(this);
    //para cada botao clicado, o texto dele sera usado para fazer os calculos
    botao.on('click', function(e) {
        textoBotao = $(this).text();

        //se o botao c for clicado ele ira limpar a tela
        if (textoBotao === 'C') {
            valor = "";
            tela.val(valor);
        }
        // se o botao = for clicado ele ira fazer o calculo do que está na tela e mostrar o resultado
        else if (textoBotao === '=') {
            tela.val(eval(valor));
        }
        //enquanto o botao = ou c não for clicado, os botoes clicados vao adicionando os valores na tela e calculando
        else {
            valor += textoBotao;
            tela.val(valor);
        }
    })
});
