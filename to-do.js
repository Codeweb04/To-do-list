document.onload = loadStorage()

function addItem() {
    inputBox = document.getElementById("work-text-input").value
    addAsListItem()
    clearButton()
    localList()
}

function addAsListItem() {
    inputBox = document.getElementById("work-text-input").value;
    if (inputBox != "") {
        listItem = document.createElement('li')
        listItem.setAttribute("class","work-list-items")
        listItemContent = `
            ${inputBox}
            <div class="li-btns">
                <button onclick = "removeItem()"class="remove-btn">&#10005</button>
                <button onclick = "editItem()" class="edit-btn">&#9998</button>
            </div>    
            `
        listItem.innerHTML = listItemContent
        document.querySelector('.list').appendChild(listItem)     
    } else {
        alert("Enter Some Input")
    }
   
}


function removeItem() {
    rmvBtn = document.getElementsByClassName("remove-btn")
    for (var i = 0; i < rmvBtn.length; i++) {
        var button = rmvBtn[i]
        button.addEventListener('click', removeListItem)
        button.addEventListener('click', localList)

    }

}

function removeListItem(event) {
    buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

function editItem() {
    editBtn = document.getElementsByClassName("edit-btn")
    for (var i = 0; i < editBtn.length; i++) {
        var ebutton = editBtn[i]
        ebutton.addEventListener('click', editListItem)
        ebutton.addEventListener('click', localList)
    }
}

function editListItem(event) {
    addBtn = document.getElementById('add-btn')
    addBtn.style.display = 'none'
    changeBtn = document.getElementById('change-btn')
    changeBtn.style.display = 'block'
    ebuttonClicked = event.target
    inputBox = document.getElementById("work-text-input")
    listItems = document.getElementsByClassName("work-list-items")
    listContent = ebuttonClicked.parentElement.parentElement
    eString = listContent.innerText
    editedString = eString.substr(0, eString.length - 3)
    inputBox.value = editedString
}

function commitChange() {
    inputBox = document.getElementById("work-text-input")
    listItems = document.getElementsByClassName("work-list-items")
    listContent.innerHTML = ` ${inputBox.value}
    <div class="li-btns">
        <button onclick = "removeItem()"class="remove-btn">&#10005</button>
        <button onclick = "editItem()" class="edit-btn">&#9998</button>
    </div>  ` 
    localList()
    exitCommit()
}

function exitCommit() {
    addBtn.style.display = 'block'
    changeBtn.style.display = 'none'
    inputBox.value = null
}

function clearButton() {
    inputBox = document.getElementById("work-text-input")
    inputBox.value = null
}

function localList() {
    localStorage.clear()
    listItems = document.getElementsByClassName("work-list-items")
    litems = []
    for (var i = 0; i < listItems.length; i++) {
        var litem = listItems[i].innerHTML
        litems.push(litem)   
    }
    localStorage.setItem('localListItems', JSON.stringify(litems)) 
}

function loadStorage() {
    alert("This site uses cookies to save your list locally")
    variable = JSON.parse(localStorage.getItem('localListItems'))
    variable.map(displayLocalStorage)
}

function displayLocalStorage(arrayval) {
    listItem = document.createElement('li')
    listItem.setAttribute("class","work-list-items")
    listItem.innerHTML = arrayval
    document.querySelector('.list').appendChild(listItem) 
}
    