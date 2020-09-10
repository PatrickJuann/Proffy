//Procurar o botão
document.querySelector("#add-time") //pegando o ID do botão
//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar uma ação 
function cloneField() {
    
    //duplicar os campos. Quais Campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //pegando pela classe do item e duplicando NODE = tag/elementos HTML
    
    //pegar os campos. Que campos?

    const fields = newFieldContainer.querySelectorAll('input') //procura todos os inputs dentros da variavel newFieldContainer e coloca dentro da variavel fields

    //para cada campo, limpar.
    
    fields.forEach(function(field) {
        //pegar o field do momento e limpar ele
        field.value = ""
        console.log(field)                
    })
    
    //colocar na pagina. Onde na página?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}





