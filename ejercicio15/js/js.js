let click_miniaturas=(e)=>{
     document.getElementById("foto_grande").src = e.target.src;
     document.getElementById("descripcion").textContent =  e.target.alt;
    }
document.getElementById("miniaturas").addEventListener("click", click_miniaturas);