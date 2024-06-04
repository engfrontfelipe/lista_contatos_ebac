let name1 = document.getElementById("nome")
let contact = document.getElementById("tele")
let form = document.getElementById("contatoForm")
let names = []
let contacts = []
$(`#tele`).mask(`(00) 00000-0000`)

let lines = " "

form.addEventListener("submit", function(e){
    e.preventDefault()
    addlines()
    
})

function addlines(){
   if(names.includes(name1.value)){
    alert("Este contato já foi salvo.")
    
    name1.value = ""
    contact.value = ""

    }else{
        names.push(name1.value)
        contacts.push(parseInt(contact.value))
    
   let line = `<tr>
            <td>${name1.value}</td>
            <td>${contact.value}</td>
                </tr>`
    lines += line
    update_table()
    
    name1.value = ""
    contact.value = ""
}}

function update_table(){
    let body_table = document.querySelector("tbody")
    body_table.innerHTML = lines

}

