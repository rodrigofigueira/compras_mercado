const btnOcultarItensNaoSelecionados = document.querySelector('#ocultarItensNaoSelecionados');

btnOcultarItensNaoSelecionados.addEventListener('click', function(){
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    checkboxes.forEach(e => {
        if(!e.checked)
            e.parentElement.style.display = 'none';
    });
});

function marcarItem(a, b){
    data[a].itens[b].selected = !data[a].itens[b].selected;
}

function popularItens(){

    document.querySelector('#itens').innerHTML = '';

    data.forEach((element, indexLocal) => {
        
        let checkboxes = '';

        element.itens.forEach((item, indexItem) =>{

            item.selected = false;

            checkboxes += `<label>
                                <input type="checkbox" 
                                onclick='marcarItem(${indexLocal}, ${indexItem})'
                                >${item.name}</label>`;      
        });

        let template = `<fieldset>      
                            <legend>${element.local}</legend> 
                            ${checkboxes}
                        </fieldset>`;

        document.querySelector('#itens').innerHTML += template;

    });
}

popularItens();


document.querySelector('#resetarItens').addEventListener('click', _ => popularItens());