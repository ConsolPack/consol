exports.joke = function() {
   let array = [
   `Na delegacia
– Seu delegado meu marido saiu de casa ontem a noite, disse que ia comprar arroz e até agora não voltou. O que eu faço doutor?

– Sei lá, faz macarrão!!`
   ]
   let joke = array[Math.floor(Math.random() * array.length)]
    console.log(joke)
}
exports.sadcat = function() {
    let array = [
    "https://api.alexflipnote.dev/sadcat/lw9eX8RHIcg_sadcat.jpg",
    "https://api.alexflipnote.dev/sadcat/nVnRKLrGRyQ_sadcat.jpg",
    "https://api.alexflipnote.dev/sadcat/MYf-tv0v5ME_sadcat.jpg",
    "https://api.alexflipnote.dev/sadcat/pGabatpTbeY_sadcat.png"
    ]
    let sad = array[Math.floor(Math.random() * array.length)]
    console.log(sad)
}
console.log("Criado por: Youtube(Nerd Vs Noob)")
