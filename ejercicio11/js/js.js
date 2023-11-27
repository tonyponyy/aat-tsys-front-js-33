var lanza_dados = ()=>{
    return parseInt(Math.random()*6) +1 
}
resultado=[0,0,0,0,0,0,0];
for (let i = 0; i < 3600; i++) {
    resultado[lanza_dados()] += 1 ;
}
for (let e = 1; e < resultado.length; e++) {
   console.log("El numero "+e+" ha salido "+ resultado[e]+" veces");
}