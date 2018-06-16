//===========================================================================
//-----------------------------CADASTRO--------------------------------------
//===========================================================================
function ajaxCadastro(ale0, ale1, ale2, ale3, ale4, ale5, ale6, ale7) {
            // Create our XMLHttpRequest object
            var http = new XMLHttpRequest();
            // Create some variables we need to send to our PHP file
            var url = "https://projectgf.000webhostapp.com/cadastro.php";
            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;
            var senha2 = document.getElementById("senha2").value;
            var check = document.getElementById("mycheck");
            var emailFilter=/^.+@.+\..{2,}$/;
            var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
            var vars =  "nome="+nome+
                        "&email="+email+
                        "&senha="+senha+
                        "&senha2="+senha2;
    
                    if(nome == false){
                        var display = document.getElementById(ale0).style.display;
                        document.getElementById(ale0).style.display = 'block';
                        document.getElementById(ale1).style.display = 'none';
                        document.getElementById(ale2).style.display = 'none';
                        document.getElementById(ale3).style.display = 'none';
                        document.getElementById(ale4).style.display = 'none';
                        document.getElementById(ale5).style.display = 'none';
                        document.getElementById(ale6).style.display = 'none';
                        
                    }else if(email == false){
                        var display = document.getElementById(ale1).style.display;
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'block';
                        document.getElementById(ale2).style.display = 'none';
                        document.getElementById(ale3).style.display = 'none';
                        document.getElementById(ale4).style.display = 'none';
                        document.getElementById(ale5).style.display = 'none';
                        document.getElementById(ale6).style.display = 'none';
                        
                    }else if(senha == false){
                        var display = document.getElementById(ale2).style.display;
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'none';
                        document.getElementById(ale2).style.display = 'block';
                        document.getElementById(ale3).style.display = 'none';
                        document.getElementById(ale4).style.display = 'none';
                        document.getElementById(ale5).style.display = 'none';
                        document.getElementById(ale6).style.display = 'none';
                        document.getElementById(ale7).style.display = 'none';
                        
                    }else if(senha2 != senha){
                        var display = document.getElementById(ale3).style.display;
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'none';
                        document.getElementById(ale2).style.display = 'none';
                        document.getElementById(ale3).style.display = 'block';
                        document.getElementById(ale4).style.display = 'none';
                        document.getElementById(ale5).style.display = 'none';
                        document.getElementById(ale6).style.display = 'none';
                        document.getElementById(ale7).style.display = 'none';
                        
                    }else if(senha.length < 6){
                        var display = document.getElementById(ale4).style.display;
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'none';
                        document.getElementById(ale2).style.display = 'none';
                        document.getElementById(ale3).style.display = 'none';
                        document.getElementById(ale4).style.display = 'block';
                        document.getElementById(ale5).style.display = 'none';
                        document.getElementById(ale6).style.display = 'none';
                        document.getElementById(ale7).style.display = 'none';
                        
                    }else if(check.checked == false){
                        var display = document.getElementById(ale5).style.display;
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'none';
                        document.getElementById(ale2).style.display = 'none';
                        document.getElementById(ale3).style.display = 'none';
                        document.getElementById(ale4).style.display = 'none';
                        document.getElementById(ale5).style.display = 'block';
                        document.getElementById(ale6).style.display = 'none';
                        document.getElementById(ale7).style.display = 'none';
                        
                    }else if(!(emailFilter.test(email))||email.match(illegalChars)){
                        var display = document.getElementById(ale5).style.display;
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'none';
                        document.getElementById(ale2).style.display = 'none';
                        document.getElementById(ale3).style.display = 'none';
                        document.getElementById(ale4).style.display = 'none';
                        document.getElementById(ale5).style.display = 'none';
                        document.getElementById(ale6).style.display = 'none';
                        document.getElementById(ale7).style.display = 'block';
                    }else{
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'none';
                        document.getElementById(ale2).style.display = 'none';
                        document.getElementById(ale3).style.display = 'none';
                        document.getElementById(ale4).style.display = 'none';
                        document.getElementById(ale5).style.display = 'none';
                        document.getElementById(ale6).style.display = 'none';
                        document.getElementById(ale7).style.display = 'none';
                        
                    
    
            http.open("POST", url, true);
            // Set content type header information for sending url encoded variables in the request
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // Access the onreadystatechange event for the XMLHttpRequest object
            http.onreadystatechange = function() {
                /*=========ALERTA DE STATUS=========*/
                if(http.readyState == 4 && http.status == 200) {
                    
                    if(this.responseText == 'Cadastro realizado com sucesso'){
                    swal({
                          title: "Cadastro realizado com sucesso!",
                          text: "Clique em OK para continuar!",
                          icon: "success",
                        })
                    .then((willDelete) => {
                          if (willDelete) {
                            window.location.href = "index.html";
                          }
                        });
                    }else if(this.responseText == "O email já existe"){
                        var display = document.getElementById(ale6).style.display;
                        document.getElementById(ale6).style.display = 'block';
                    }
                    
                }//fim do if
            }//fim de function
            // Send the data to PHP now... and wait for response to update the status div
            http.send(vars); // Actually execute the request
}
}


//===========================================================================
//--------------------------------LOGIN--------------------------------------
//===========================================================================
function ajaxLogin(ale0, ale1) {
    // Create our XMLHttpRequest object
            var http = new XMLHttpRequest();
            // Create some variables we need to send to our PHP file
            var url = "https://projectgf.000webhostapp.com/login.php";
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;
            var vars =  "email="+email+
                        "&senha="+senha;
    
                    if(email == false){
                        var display = document.getElementById(ale0).style.display;
                        document.getElementById(ale0).style.display = 'block';
                        document.getElementById(ale1).style.display = 'none';
                    }else if(senha == false){
                        var display = document.getElementById(ale1).style.display;
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'block';
                    }else{
                        document.getElementById(ale0).style.display = 'none';
                        document.getElementById(ale1).style.display = 'none';
            http.open("POST", url, true);
            // Set content type header information for sending url encoded variables in the request
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // Access the onreadystatechange event for the XMLHttpRequest object
            http.onreadystatechange = function() {
                if(http.readyState == 4 && http.status == 200){
                    if(this.responseText == "Logado"){
                        window.location.href = "painel.html?email1="+email+"";
                    }else if(this.responseText == "Usuário ou senha incorreta"){
                        swal(this.responseText,"","error");
                    }
                    
                }//fim do if
            }//fim do function
            // Send the data to PHP now... and wait for response to update the status div
            http.send(vars); // Actually execute the request
}
}

//===========================================================================
//-----------------------------SENHAS----------------------------------------
//===========================================================================


$(document).ready(function(){
    
    //-----------------------------PEGA SENHA-----------------------------------
	$('.pegaSenha').on('click', function(){
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.has('email1');
        let email = searchParams.get('email1');
       $.ajax({
          url: "https://projectgf.000webhostapp.com/pegaSenha.php?acao=pSenha",
           type: 'POST',
           data: {email:email},
           dataType: 'json',
           success: function(retorno){
               $('.divpSenha').fadeOut('slow');
               $('.divSuaSenha').fadeIn('slow');
               $('.sen').html(retorno.s);
               $('#idSenha').val(retorno.id);
               
           }
       });
    });
    
    //-----------------------------CANCELA SENHA-----------------------------------
    $('.cancel').on('click', function(){
        var idSenha = $('#idSenha').val();
        swal({
                  title: "Cancelar senha?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      
                    $.ajax({
                        url: "https://projectgf.000webhostapp.com/pegaSenha.php?acao=cSenha",
                        type: 'POST',
                        data: {idSenha:idSenha},
                        dataType: 'text',
                        success: function(retorno){
                            let searchParams = new URLSearchParams(window.location.search);
                            searchParams.has('email1');
                            let email = searchParams.get('email1');
                            window.location.href = "painel.html?email1="+email+"";
                        }
                    });                     
                    
                      
                  } else {

                  }
                });
    });
    
    
});


lista();
function lista(){
    var id = document.getElementById('idSenha').value;
    $.ajax({
        url:"https://projectgf.000webhostapp.com/pegaSenha.php?acao=upSenha",
        type: 'POST',
        data: {id: id},
        dataType: 'json',
        success: function (retorno){
          if(retorno.se == '1'){
              
              let searchParams = new URLSearchParams(window.location.search);
              searchParams.has('email1');
              let email = searchParams.get('email1');
              window.location.href = "painel.html?email1="+email+"";
              
              
          }
            if(retorno.cv == '2'){
                $('#gui').text('sem senha');
                $('#senhaPainel').text('');
            }else{
                $('#senhaPainel').text(retorno.senha);
                $('#gui').text(retorno.guiche);
            }
                
        }
 	});
        
    timerI = setTimeout("lista()", 1000);//tempo de espera
    			        timerR = true;
    
}