let imprimir_hora= ()=> {
    const ahora = new Date();
    const horas = formatear_tiempo(ahora.getHours().toString());
    const minutos = formatear_tiempo(ahora.getMinutes().toString());
    const segundos = formatear_tiempo(ahora.getSeconds().toString());
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
  }

  let formatear_tiempo = (tiempo)=>{
    return parseInt(tiempo) < 10 ? "0" + tiempo : tiempo.toString();
  }

  setInterval(imprimir_hora, 1000);
  imprimir_hora();