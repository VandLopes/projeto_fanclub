function validaInscricao(){
    var nome = document.frmInscricao.name.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if (!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.frmInscricao.name.focus();
        return false;
    }

    if (document.frmInscricao.sexo.value==""){
        alert("Preencha o sexo.");
        document.frmInscricao.sexo.focus();
        return false;
    }

    var email = document.frmInscricao.email.value;
    var expRegEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    
    if (!expRegEmail.test(email)) {
        alert("Preencha o campo E-mail corretamente.");
        document.frmInscricao.email.focus();
        return false;
    }

    if (document.frmInscricao.password.value==""){
        alert("Preencha a senha.");
        document.frmInscricao.password.focus();
        return false;
    }

    var fone = document.frmInscricao.fone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!expRegFone.test(fone)){
        alert("Preencha o campo Telefone corretamente.");
        document.frmInscricao.fone.focus();
        return false;
    }

    
    if (!document.frmInscricao.desejo.checked){
        alert("Preencha o termo para Fâ-clube")
        return false;
    }


    if(document.frmInscricao.comentario.value==""){
        alert("Preencha o campo motivo.");
        document.frmInscricao.comentario.focus();
        return false;
    }

    return true;

}

//Assim que o documento HTML for carregado por completo...
$(document).ready(function(){
    //Carrega cabeçalho, menu e rodapé aos respectivos locais
    $("header").load("/general/cabecalho.html");
    
})

