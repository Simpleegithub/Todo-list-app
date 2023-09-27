const jstodoform=document.querySelector('#js-todo-form');
const todobody=document.querySelector('.todo-body');
const jscount=document.querySelector('.js-count');
const clearall=document.querySelector('.clear-all');
const firstinput=document.getElementById('first-input');
const li=document.querySelector('.todo-list li');
const todolist=document.querySelector('.todo-list');






let todos=[];
let counter=0;
let storedata=[];



jstodoform.addEventListener('submit', function(e){
    e.preventDefault();
    let data=firstinput.value;
    let li=document.createElement('li');
    li.innerHTML=`<li data-id="2" data-status="pending" id="pending">
    <label for="1">
        <input type="checkbox" name=""  id="1" class="checkbox" value="1">
        <input type="text" value="${data}" class="sub-input">
    </label>
    <div class="actions">
        <button class="js-edit" style="">
            <i class="fa fa-pencil"  ></i>
        </button>

        <button class="js-delete">
            <i class="material-icons" style="font-size: 13px;">&#xe872;</i>
        </button>
    </div>
</li>`;
    if(!data) return;
    
    storedata.push(data);
  
    localStorage.setItem('User-data', JSON.stringify(storedata));
    todolist.appendChild(li)
    counter=counter+1;
   
    jscount.innerHTML=`${counter} items left`;
    firstinput.value="";


    const checkbox=li.querySelector('.checkbox');
    
    checkbox.addEventListener('click',function(){
       const subinput=li.querySelector('.sub-input');

        subinput.classList.toggle('checked');
    })



    const jsedit=li.querySelector('.js-edit');
    jsedit.addEventListener('click',function(){
       
       const subinput=li.querySelector('.sub-input');
       console.log(subinput.value)
       subinput.classList.toggle('edit');
 

    
       
       
 
    })


    const jsdelete=li.querySelector('.js-delete');
    jsdelete.addEventListener('click',function(){
        todolist.removeChild(li);
        counter=counter-1;
   
        jscount.innerHTML=`${counter} items left`;
    })


   



})


clearall.addEventListener('click',function(){
  todolist.innerHTML="";
 
 counter=0;

  jscount.innerHTML=`${counter} items left`;
})

console.log(counter)

