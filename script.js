let linhaSelecionada = null;

function onFormSubmit() {
    let formData = readFormData();
    if(linhaSelecionada == null){
        inserirDados(formData);
    } else {
        atualizarDados(formData);
    }                
    resetarFormulario();
}

function readFormData(){
    let formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["publicações"] = document.getElementById("publicações").value;
    formData["videos"] = document.getElementById("videos").value;
    formData["horas"] = document.getElementById("horas").value;
    formData["revisitas"] = document.getElementById("revisitas").value;
    formData["estudos"] = document.getElementById("estudos").value;
    return formData;
}   

function inserirDados(dados){
    let table = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = dados.nome;

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = dados.publicações;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = dados.videos;

    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = dados.horas;

    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = dados.revisitas;

    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = dados.estudos;

    let cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="editarDados(this)">Atualizar</a>
                        <a onClick="deletarDados(this)">Deletar</a>`;
}

function resetarFormulario(){
    document.getElementById("nome").value = "";
    document.getElementById("publicações").value = "";
    document.getElementById("videos").value = "";
    document.getElementById("horas").value = "";
    document.getElementById("revisitas").value = "";
    document.getElementById("estudos").value = "";
    linhaSelecionada = null;
}

function editarDados(td){
    let linhaSelecionada = td.parentElement.parentElement;
    document.getElementById("nome").value = linhaSelecionada.cells[0].innerHTML;
    document.getElementById("publicações").value = linhaSelecionada.cells[1].innerHTML;
    document.getElementById("videos").value = linhaSelecionada.cells[2].innerHTML;
    document.getElementById("horas").value = linhaSelecionada.cells[3].innerHTML;
    document.getElementById("revisitas").value = linhaSelecionada.cells[4].innerHTML;
    document.getElementById("estudos").value = linhaSelecionada.cells[5].innerHTML;
}

function atualizarDados(formData){
    linhaSelecionada.cells[0].innerHTML = formData.nome;
    linhaSelecionada.cells[1].innerHTML = formData.publicações;
    linhaSelecionada.cells[2].innerHTML = formData.videos;
    linhaSelecionada.cells[3].innerHTML = formData.horas;
    linhaSelecionada.cells[4].innerHTML = formData.revisitas;
    linhaSelecionada.cells[5].innerHTML = formData.estudos;
}

function deletarDados(td){
    if(confirm("Voce realmente quer deletar os dados?")){
        let row = td.parentElement.parentElement;
        document.getElementById("tabela").deleteRow(row.rowIndex);
        resetarFormulario();
    }
}
