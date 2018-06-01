//===========================================================================
//----------------------==----CANCELAR SENHA---------------------------------
//===========================================================================
function cancelarSenha() {
    swal({
      title: "Finalizar atendimento?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "painelAdm.html";
      } else {
        
      }
    });
    
}


//===========================================================================
//---------------------------------SAIR--------------------------------------
//===========================================================================
function sair(){
    swal({
      title: "Dejesa sair?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "index.html";
      } else {
        
      }
    });
}


//===========================================================================
//-----------------------------PEGAR SENHA-----------------------------------
//===========================================================================
function pegarSenha(){
    window.location.href = "painelAdm2.html";
}