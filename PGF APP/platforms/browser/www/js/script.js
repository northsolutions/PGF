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