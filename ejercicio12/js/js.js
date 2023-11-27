const regex_fecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
fechas = ["03/06/1995","42/06/1995","03/13/1995","03/06/2025"];
fechas.forEach(fecha => {
    regex_fecha.test(fecha)? console.log("fecha "+fecha+" valida.") : console.log("fecha "+fecha+" no valida");
});

const regex_correo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
correos=["usuario@test.com","usuar**p@test.com","usuario@test.como"];
correos.forEach(correo => {
    regex_correo.test(correo)? console.log("correo "+correo+" valido.") : console.log("correo "+correo+" no valido");
});

let escape_html=(text)=> {
    return text.replace(/[&\\<>]/g, function(match) {
      if (match === '&') {
        return '&amp;';
      } else if (match === '\\') {
        return '\\\\';
      } else if (match === '<') {
        return '&lt;';
      } else if (match === '>') {
        return '&gt;';
      }
    });
  }

  texto= "<div> HOLA & \ </div>";
  console.log("texto sin escapar : "+texto+ " texto escapado "+escape_html(texto));

  texto ="John Smith"
  texto_escapado = texto.split(" ").reverse().join(" ").replace(/(\S+)(\s+|$)/g, '$1,')
  console.log("texto sin escapar : "+texto+ " texto escapado "+texto_escapado);
