data.forEach(element => {
    
    let checkboxes = '';

    element.itens.forEach(item =>{
        checkboxes += `<label><input type="checkbox">${item}</label>`;      
    });

    let template = `<fieldset>      
                        <legend>${element.local}</legend> 
                        ${checkboxes}
                    </fieldset>`;

    document.body.innerHTML += template;                    

});