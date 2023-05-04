let input = document.getElementById('input');
let addBtn = document.getElementById('addBtn');
let clearBtn = document.getElementById('clearBtn');
let sortBtn = document.getElementById('sortBtn');
let list = document.getElementById('list');
let sortImg = document.getElementById('sortImg');
let ascendingOrder = true;
let flag = true;

sortBtn.addEventListener('click',() =>{
    if(flag){
        sortImg.src = './sort2.svg'
        flag = !flag
    }else{
        sortImg.src = './sort1.svg'
        flag = !flag
    }

let items = Array.from(list.children).sort((a,b) =>{
    let aValue = a.firstElementChild.textContent.toLowerCase();
    let bValue = b.firstElementChild.textContent.toLowerCase();
    
    if(aValue < bValue){
        return ascendingOrder ? -1 : 1
    }else if(aValue > bValue){
        return ascendingOrder ? 1 : -1
    }else{
        return 0
    }
})
list.innerHTML = "";
items.forEach(item => {
    list.appendChild(item);
})
ascendingOrder = !ascendingOrder
})

clearBtn.addEventListener('click',() =>{
    input.value = "";
})
addBtn.addEventListener('click',() =>{
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent=input.value;
    let deleteBtn =document.createElement('button');
    deleteBtn.textContent='x';

    deleteBtn.addEventListener('click',() =>{
        list.removeChild(li)
    })
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})