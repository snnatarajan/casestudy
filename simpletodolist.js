let input = "";
let list= document.getElementById("list");
let minimalValue = 3;
let listNum = 0;
let chkcount = 0;
var responsearray = [];
var responsestatus = [];

addList=()=>{
    // get
    ajaxread();
    function ajaxread(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState==4 && this.status==200){
                var response = JSON.parse(this.responseText);
                var output = "";
                for (var i=0; i < response.length; i++ ){
                    responsearray[i] = response[i].title;
                    if (responsearray[i]) {
                        list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
                                <div class="row">
                                <div class="col-1">
                                <input class="" type="checkbox" id="check${listNum}"  onclick="done(${listNum})">
                                </div>
                                <div class="col-6">
                                    <span class=" h4" id="text${listNum}"> ${responsearray[i]} </span>
                                </div>
                                <div class="col-4">
                                     <button class=" btn btn-dark" onclick="deleteList(${listNum})">Delete</button>
                                     <button class=" btn btn-dark" onclick="editList(${listNum})">Edit</button>
                                </div>                  
                                </div>    
                                </li> `;
                        input.value=" ";
                        listNum++;
                    }
                }
            }
        }
    xhttp.open ("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
}

done=(listId)=>{ 
    let checkbox = document.getElementById(`check${listId}`);
    let current = document.getElementById(`text${listId}`);
    let classExit=current.classList.contains("text-decoration-line-through");
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
        chkcount = chkcount-1;
    }else{
        current.classList.add("text-decoration-line-through");
        chkcount = chkcount+1;
    }
    let fivetask = new Promise(function(resolve, reject){
        if(chkcount == 5) {
                    resolve(chkcount);
        }
        else{
            reject(chkcount);
    
        }
    });
    fivetask.then(function(chkcount){
        alert("Congrats. 5 Tasks have been Successfully Completed ");
    });
}

filterList=(x)=>{
    if (x) {
         if (x.length >= minimalValue) {
             return x;
         }
         else{
             alert("Please enter more than 3 words")
         }
    }
    else{
         return false;
    }
}

editList=(listId)=>{
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("Wanna Change list?",currentText.innerHTML);
    if (filterList(newText)) {
        currentText.innerHTML = newText; 
    }
}

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
       let deleteComfirm = confirm(`Are you sure to delete ${current}`);
    if (deleteComfirm) {
         let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
    }
    else{
        console.log("deleted");
    }
}

