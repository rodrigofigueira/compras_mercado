const btnOcultarItensNaoSelecionados = document.querySelector('#ocultarItensNaoSelecionados');

btnOcultarItensNaoSelecionados.addEventListener('click', function(){
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    checkboxes.forEach(e => {
        if(!e.checked)
            e.parentElement.style.display = 'none';
    });
});

data.forEach(element => {
    
    let checkboxes = '';

    element.itens.forEach(item =>{
        checkboxes += `<label><input type="checkbox">${item}</label>`;      
    });

    let template = `<fieldset>      
                        <legend>${element.local}</legend> 
                        ${checkboxes}
                    </fieldset>`;

    document.querySelector('#itens').innerHTML += template;

});