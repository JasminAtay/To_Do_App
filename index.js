function Add(){
    let input = document.getElementById('myInput');
    let itemList = document.getElementById('myUL');
    let icon = document.createElement('i');
    icon.className="fas fa-trash";
    if(input.value===""){
        alert('Please enter some text');
    }else{
        let item = document.createElement('li');
        item.className = 'item';
        item.innerHTML= input.value;
        
        let closeBtn = document.createElement('a');
        closeBtn.setAttribute('href','#');
        closeBtn.id='close';
        closeBtn.innerHTML =`<i class="fas fa-trash"></i>`;
        
        item.appendChild(closeBtn);
        input.value="";
        itemList.appendChild(item);
        item.addEventListener('click', deleteBtn);
    }
    
}

function deleteBtn(e){
    this.classList.add('lineThrough');
    if(e.target.innerHTML===`<i class="fas fa-trash"></i>`){
        this.parentNode.removeChild(this)
    }
}

function deleteAll(){
    let element = document.getElementById('myUL');
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}