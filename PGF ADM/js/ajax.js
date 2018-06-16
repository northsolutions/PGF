    function disableF5(e) { if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) e.preventDefault(); };
$(document).ready(function(){
    $(document).on("keydown", disableF5);
    
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.has('guiche');
        let guiche = searchParams.get('guiche');
        $('.guiNum').text(guiche);
    /*======================================================================================*/
    /*==========================CHAMAR SENHA================================================*/
    /*======================================================================================*/
   $('.chamaSenha').on('click', function(){
       var guiche = $('.guiNum').text();
      $.ajax({
         url: "https://projectgf.000webhostapp.com/pegaSenha.php?acao=chamaSenha",
          type: 'POST',
          data: {guiche: guiche},
          dataType: 'json',
          success: function(data){
                            
              if(data.ret == 1){
                  swal("SEM SENHAS PARA ATENDIMENTO","","error");
                  }else{
                      $('.painelChama').fadeOut('slow');
                      $('.senhaChamada').fadeIn('slow');
                      $('.senha').text(data.senha);
                      $('#idSenha').val(data.idSenha);
                      var notif = document.getElementById('notif').play();
                      }
          }
      });
   });
    
    /*======================================================================================*/
    /*==========================FINALIZAR ATENDIMENTO=======================================*/
    /*======================================================================================*/
    $(".finAte").on('click', function(){
        var idSenha = $('#idSenha').val();
        swal({
      title: "Finalizar atendimento?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        $.ajax({
         url: "https://projectgf.000webhostapp.com/pegaSenha.php?acao=finAte",
          type: 'POST',
            data: {idSenha: idSenha},
          dataType: 'text',
          success: function(data){
              var guiche = $('.guiNum').text();
                window.location.href = "painelAdm.html?guiche="+guiche+"";
          }
      });
      } else {
        
      }
    });
        
    });
    /*======================================================================================*/
    /*==========================SELECAO DO GUICHÊ===========================================*/
    /*======================================================================================*/
    $('.entrar').on('click', function(){
       var select = $('.select').val();
        if(select > 0){
            window.location.href = "painelAdm.html?guiche="+select+"";
        }else{
            swal("SELECIONE UM GUICHÊ","","error");
        }
      
    });
    
});

    /*======================================================================================*/
    /*==========================ATUALIZACAO AUTOMATICA DO PAINEL============================*/
    /*======================================================================================*/
lista();
function lista(){
    $.ajax({
        url:"https://projectgf.000webhostapp.com/pegaSenha.php?acao=lista",
        type: 'POST',
        dataType: 'text',
        success: function (retorno){
            
            $('.painel').html(retorno);
        }
 	});
        
    timerI = setTimeout("lista()", 1000);//tempo de espera
    			        timerR = true;
    
}

$(function(){
    
            /*===============================ACAO NA TECLA ENTER====================================*/
            /*======================================================================================*/
            $('input, textarea').on('keypress', function(e){
                if (e.keyCode == 13) {
                    e.preventDefault();
                    $('#entrar').click();
                    $('#reset').click();
                }
            });
            
            /*======================================================================================*/
            /*==========================RESETA BANCO DE DADOS DE SENHA==============================*/
            /*======================================================================================*/            
            $('#reset').on('click', function(){
                var user = $('#user').val();
                var pass = $('#pass').val();
                if(user == 'admin' && pass == 'admin'){
                    swal({
                          title: "Banco resetado!",
                          text: "Clique em OK para continuar!",
                          icon: "success",
                        })                    
                    .then((willDelete) => {
                          if (willDelete) {
                            $.ajax({
                                url: "https://projectgf.000webhostapp.com/pegaSenha.php?acao=reset",
                               type: 'POST',
                               dataType: 'text',
                               success: function(retorno){
                                   window.location.href = "index.html";
                               }
                            });
                              
                              
                          }
                        });
                   }else if(user == "" && pass == ""){
                      swal('Campo vazio',"","error");      
                }else{
                      swal('Senha incorreta',"","error");
                   }
            });
});