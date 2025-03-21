const listadepalabras=[
    ["Añejo",["hola"],"https://cdn.pixabay.com/photo/2021/12/19/10/42/old-6880626_1280.jpg"],
    ["Aseveró",["chino"],"https://cdn.pixabay.com/photo/2013/07/13/10/06/affirmative-156538_1280.png"]
    ["bocanada",["chino"]]
]
const listaelemento = document.getElementById("list")
const listaespañola = document.getElementById("español")
const listacanaria = document.getElementById("canario")
for (let index = 0; index < listadepalabras.length; index++) {
    const palabra = listadepalabras[index][0];
    const definiciones = listadepalabras[index][1];
    const imagen = listadepalabras[index][2];
    let palabraelemento = document.createElement("div");
    if (index<40){
    palabraelemento=listaespañola.appendChild(palabraelemento)
    }else{
    palabraelemento=listacanaria.appendChild(palabraelemento)
    }
    palabraelemento.className="palabra"
    palabraelemento.innerHTML=`
    <div class="wordtitle"><strong>${palabra}:</strong></div>`
    let lista = document.createElement("ul")
    lista = palabraelemento.appendChild(lista)
    for (let index = 0; index < definiciones.length; index++) {
        const definicion = definiciones[index];
        let newlistitem = document.createElement("li")
        newlistitem = lista.appendChild(newlistitem)
        newlistitem.innerText = `${index+1}): ${definicion}`
    }
    let newImage = document.createElement("img")
    newImage = palabraelemento.appendChild(newImage)
    newImage.src = imagen

}