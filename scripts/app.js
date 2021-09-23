data.forEach(element => {
    
    let checkboxes = '';

    element.itens.forEach(item =>{
        checkboxes += `<input type="checkbox">${item}<br>`;      
    });

    let template = `<fieldset>      
                        <legend>${element.local}</legend> 
                        ${checkboxes}
                    </fieldset>`;

    document.body.innerHTML += template;                    

});