//===========================================================================
//----------------------==----CANCELAR SENHA---------------------------------
//===========================================================================
function cancelarSenha() {
    swal({
      title: "Cancelar senha?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "painel.html";
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
    window.location.href = "painelUser.html";
}