function juego2() {
    let texto;
    let adiv=prompt('adiviana el numero menor de 10','')
    num=Math.floor(Math.random()*10);
    console.log(num)
    int=1;
    while (int<10){
        if (adiv == num)
        {
            texto="LO LOGRASTE BIEN ECHO LO ENCONTRASTE";
            break;
        }
        else
        {
            console.log("PRUEBA CON OTRO NUMERO");
            adiv=prompt("PRUEBA CON OTRO NUMERO, TE QUEDAN "+(10-int)+" INTENTOS");
            int++;
            texto= "INTENTALO DE NUEBO ";
        }
    }
    document.getElementById("resp2").innerHTML=texto;
    document.getElementById("num").innerHTML=num;
}
function juego1() {
    let texto;
    let adiv=prompt('adiviana el numero menor de 10','')
    num=Math.floor(Math.random()*10);
    console.log(num)
    int=1;
    while (int<100){
        if (adiv == num)
        {
            texto="LO LOGRASTE BIEN ECHO";
            break;
        }
        else
        {
            console.log("PRUEBA CON OTRO NUMERO");
            adiv=prompt("PRUEBA CON OTRO NUMERO,TE QUEDAN MUCHAS OPORTUNIDADES");
            int++;
            texto="INTENTALO DE NUEBO ";
        }
    }
    document.getElementById("resp1").innerHTML=texto;
    document.getElementById("num").innerHTML=num;
}

function juego3() {
    let texto;
    let adiv=prompt('adiviana el numero menor de 10','')
    num=Math.floor(Math.random()*10);
    console.log(num)
    int=1;
    while (int<5){
        if (adiv == num)
        {
            texto="LO LOGRASTE BIEN ECHO";
            break;
        }
        else
        {
            console.log("PRUEBA CON OTRO NUMERO");
            adiv=prompt("PRUEBA CON OTRO NUMERO, TE QUEDAN "+(5-int)+" INTENTOS");
            int++;
            texto= "INTENTALO DE NUEBO ";
        }
    }
    document.getElementById("resp3").innerHTML=texto;
    document.getElementById("num").innerHTML=num;
}
