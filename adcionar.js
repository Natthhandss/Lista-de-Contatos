const form = document.getElementById('form-contatos')
let linhas = ''

form.addEventListener('submit',function(e){
    e.preventDefault()

    const inputnome = document.getElementById('nome')
    const inputemail = document.getElementById('email')
    const inputtelefone = document.getElementById('telefone')

    let linha = '<tr>'
    linha += `<td>${inputnome.value}</td>` 
    linha += `<td>${inputemail.value}</td>` 
    linha += `<td>${inputtelefone.value}</td>` 
    linha +='</tr>'

    linhas += linha
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas 

    inputnome.value = ''
    inputemail.value = ''
    inputtelefone.value = '' 
}) 