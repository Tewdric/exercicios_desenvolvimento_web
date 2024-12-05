const valor = document.getElementById("valor")
const botao = document.getElementById("botao")

// botao.addEventListener('click', (e) =>{
//     buscarDados(valor.value)
// })

async function buscarDados(numero) {
    try{
        const reponse = await fetch (`https://randomfox.ca/?i=${numero}`);
        const data = await reponse.json();
        console.log(data)
       
    } catch (error){
        console.error('error:', error)
    }
}



const lista = [{
    titulo:'testando',
    conteudo:'alskdjçasjkashfjhasfkjahfjhaksjfnha'
},
{
    titulo:'testando2',
    conteudo:'alskdjçasjkashfjhasfkjahfjhaksjfnha22222'
},
{
    titulo:'testando3',
    conteudo:'alskdjçasjkashfjhasfkjahfjhaksjfnha3333'
},
]

var contador = 0
const btn_soma =document.getElementById('btn_soma')
const btn_subtracao =document.getElementById('btn_subtracao')




conteudoTexto()

function conteudoTexto(valor){
    const titulo = document.getElementById('titulo')
    const conteudo = document.getElementById('conteudo')

    if(valor=='+'){
        contador++
        console.log(contador)
        if(contador==lista.length-1){
            btn_subtracao.style.visibility='visible'
            btn_soma.style.visibility='hidden'
        }
        else{
            btn_soma.style.visibility='visible'
        }

    }
    else if(valor=='-'){
        
        contador--
        console.log(contador)
       
        if(contador==0){
            btn_subtracao.style.visibility='hidden'
            btn_soma.style.visibility='visible'
        }

    }

    titulo.innerHTML= lista[contador].titulo
    conteudo.innerHTML= lista[contador].conteudo

}

