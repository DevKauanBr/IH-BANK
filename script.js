var div = document.getElementById('infos')
var erro = document.getElementById('erro')
var login = document.getElementById('login')
var saldo = document.getElementById('saldoV')
var cash = 4562
var ocultar = document.getElementById('ocultar')

div.style.display = 'none'
erro.style.display = 'none'

var conta = document.getElementById('conta')
var senha = document.getElementById('senha')
var erro = document.getElementById('erro')

function entrar(){
    if (conta.value == '91640870' && senha.value == '9164'){
        div.style.display = 'block'
        login.style.display = 'none'
        saldo.innerText = `R$${cash},00`
    }else{
        erro.style.display = 'block'
    }
}

function mudar_saldo(){
    cash = prompt('Novo Saldo: ')
    saldo.innerText = `R$${cash},00`
}

function deslogar(){
    var conf = confirm('Sair Da Conta? ')
    if (conf == true){
        div.style.display = 'none'
        login.style.display = 'block'
    }
    
}

function pix(){
    var chave = prompt('Chave Pix: ')
    var valor = prompt(`Valor Disponivel: ${cash}\n\nDigite o valor a enviar: `)
    alert(`Você está trasnferindo ${valor} para a chave ${chave} `)
    alert('PIX ENVIADO!\n\nSua transferencia foi processada e ja foi confirmada!')
    cash -= valor
    saldo.innerText = `R$${cash},00`
    
    
}

function ocultar_saldo(){
    if (saldo.innerText == 'Ocultado'){

        saldo.style.color = 'rgb(92, 177, 12)'
        saldo.innerText = `R$${cash},00`
        ocultar.value = 'Ocultar'
    }else{
        saldo.innerText = `Ocultado`
        saldo.style.color = 'red'
        ocultar.value = 'Mostrar'

    }

}