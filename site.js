function validaInscricao(){
    if(document.frmInscricao.name.value==""){
        alert("Preencha o campo Nome.");
        document.frmInscricao.name.focus();
        return false;
    }

    if(document.frmInscricao.sexo.value==""){
        alert("Preencha o sexo.");
        document.frmInscricao.sexo.focus();
        return false;
    }

    
    if(document.frmInscricao.email.value==""){
        alert("Preencha o campo e-mail.");
        document.frmInscricao.email.focus();
        return false;
    }

    if(document.frmInscricao.password.value==""){
        alert("Preencha o campo senha.");
        document.frmInscricao.password.focus();
        return false;
    }

    if(document.frmInscricao.fone.value==""){
        alert("Preencha o campo telefone.");
        document.frmInscricao.fone.focus();
        return false;
    }

    if(document.frmInscricao.selproduto.value==""){
        alert("Escolha algum Produto.");
        document.frmInscricao.selproduto.focus();
        return false;
    }
}

function validarCheckBox(){

    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
        var checkbox = document.getElementById('desehi');
        if (!checkbox.checked) {
            alert('Por favor, aceite os termos e condições antes de enviar.');
            event.preventDefault(); // Impede o envio do formulário
        }
    });
}