const randomNum = num =>{
    return Math.floor(Math.random() * num);
}

const temas = [
    ["Perro",
    "Gato",
    "León",
    "Elefante",
    "Tigre"],
    ["Fútbol",
    "Baloncesto",
    "Tenis",
    "Natación",
    "Atletismo"],
    ["La vida es bella.",
    "El tiempo es oro.",
    "La práctica hace al maestro.",
    "El que no arriesga, no gana.",
    "La perseverancia es la clave del éxito."]
]

const randomMessage = ()=>{
    let n = randomNum(5);
    let message = `Tu animal favorito es ${temas[0][n]}`;
    message += `\n Tu deporte favorito es ${temas[1][n]}`;
    message += `\n Tu frase que te identifica es: ${temas[2][n]}`;
    return message;
}

let m = randomMessage();
console.log(m);