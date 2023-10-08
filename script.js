const inputBox = document.getElementById('input-box');

const listContainer = document.getElementById('list-container');


function addTask(){
    if(inputBox.value === ''){

        alert('You must Write Something');
    }else{
        let li =document.createElement('li');
        li.innerHTML = inputBox.value;
        // console.log(li.innerHTML);
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML ='\u00d7'
        li.appendChild(span);
    }
    inputBox.value ='';
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName ==)
})