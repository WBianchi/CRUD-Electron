// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var loki = require('lokijs');
var db = new loki('db.json');
var clientes = db.addCollection('clientes');

function ready (fn){
    //verifica se a pagina ja foicarregada
    if (document.readyState != 'loading'){
        //se sim, ele chama a função
        fn();
    }else {
        //se não, ele avisa para qnd carregar chamar a função
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function() {
    //tudo o que estiver aqui vai ser executado quando a pag. carregar
    document.querySelector('#btnSalvar').addEventListener('click', function(e){
        e.preventDefault();
        let data = {
            nome: document.querySelector('#inputName').value,
            cpf: document.querySelector('#inputCPF').value,
            telefone: document.querySelector('#inputTelefone').value
        };
        clientes.insert(data);
        db.save();
        alert('Salvo com sucesso!');
        document.querySelector('#formsCadastroCliente').reset();
    })

    document.querySelector('#btnCancelar').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#formsCadastroCliente').reset();
        alert('Cancelado');
    })
})