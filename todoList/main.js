let kitcheninput = document.getElementById('kitchen-input')
let addbtn = document.getElementById('add-btn')
let kitchenitemslist = document.getElementById('kitchen-items-list')

let result = []

function addItems() {
    let inputData = kitcheninput.value

    let li = document.createElement('li')
    let Span = document.createElement('span')
    li.appendChild(Span)
    Span.innerText = inputData
    console.log(Span);

    kitchenitemslist.appendChild(li);
    kitcheninput.value = "";
    kitcheninput.focus()
    result.push(inputData)

    //create delete button
    let Dltbtn = document.createElement('li')
    Dltbtn.classList.add("fas", "fa-trash")
    li.appendChild(Dltbtn);
    
    //create edit button 
    let Editbtn = document.createElement('li')
    Editbtn.classList.add('fas', 'fa-edit')
    li.appendChild(Editbtn);
}

// delete from items
function DeleteItems(event) {
    console.log(event.target.classList[1]);
    if (event.target.classList[1] === 'fa-trash') {
        let Data = event.target.parentElement;
        Data.remove()
    }

}

//edite items
function EditItems(event) {
    if (event.target.classList[1] === 'fa-edit') {
        let Data = event.target.parentElement
        let NewValue = prompt('enter new value');
        let Span = Data.querySelector('span');
        Span.innerText = NewValue

    }

}
console.log(result);

addbtn.addEventListener('click', addItems)
kitchenitemslist.addEventListener('click', DeleteItems)
kitchenitemslist.addEventListener('click', EditItems)

