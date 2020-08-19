const {PACKAGE} = require('./package.json')
exports.joke = function() {
   let array = [
   `Na delegacia
– Seu delegado meu marido saiu de casa ontem a noite, disse que ia comprar arroz e até agora não voltou. O que eu faço doutor?

– Sei lá, faz macarrão!!`,
`Qual é a lingua q os cachorros falam?

latino`,
`a Mônica tava andando de carro.

o Cebolinha falou: MÔNICA, OLHA A LOMABA ALI

a Mônica: Arrombada sua mãe`,
`sabe porque o batman gosta de bater nas pernas?

porque ele bat-na-perna`
   ]
   let joke = array[Math.floor(Math.random() * array.length)]
    console.log(joke)
    joke
}
exports.sadcat = function() {
    let array = [
    "https://api.alexflipnote.dev/sadcat/lw9eX8RHIcg_sadcat.jpg",
    "https://api.alexflipnote.dev/sadcat/nVnRKLrGRyQ_sadcat.jpg",
    "https://api.alexflipnote.dev/sadcat/MYf-tv0v5ME_sadcat.jpg",
    "https://api.alexflipnote.dev/sadcat/pGabatpTbeY_sadcat.png"
    ]
    let sad = array[Math.floor(Math.random() * array.length)]
    console.log(sad);
    window.open(sad);
    sad
}
exports.diversao = function() {
    console.log("Eu vou pensar em algo para te divertir...")
    setTimeout(() => {
        console.error(`Vocês estão prontas, crianças?
Estamos capitão!
Eu não ouvi direito!
Estamos capitão!
Ohhhhhh!

Quem mora em um abacaxi no fundo do mar?
Bob Esponja Calça Quadrada!
Tem a cora amarela e espirra água
Bob Esponja Calça Quadrada! 
Se nem uma bobagem e o que você quer
Bob Esponja Calça Quadrada!
Ele abriu essa porta e tem problemas com peixe
Bob Esponja Calça Quadrada!
Prontos?

Bob Esponja Calça Quadrada!
Bob Esponja Calça Quadrada!
Bob Esponja Calça Quadrada!
Bob Esponja Calça Quadrada!`)
    }, 4000)
    
}

console.log("Criado por: Youtube(Nerd Vs Noob)")
