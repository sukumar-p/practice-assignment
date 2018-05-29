// var Life= new Object()
// Life.heart=1;
// Life.face=1;
// Life.hands=2;
// Life.legs=2;
// Life.eyes=2;
// // var person=Object.create(Life);
// var person=new Object(Life);
// console.log(person.legs);
// // console.log(Life)



// function myDisplay(fname, lname){
//     var List=[
//         {
//             firstName:fname, lastName:lname, nickName:'suku'
//         }
//     ]
//     // firstname=fname;
//     // lastname=lname;
//     this.firstname=fname;
//     this.lastname=lname;
//     console.log(List[0].firstName,List[0].nickName);
//     this.middleName = middleName();
//     console.log(firstname +" "+lastname+" "+"is having"+" "+person.legs+" "+"legs"+" "+"and even"+" "+this.middleName+" "+"also having same");

// } myDisplay('sukumar','patchala');



//  function middleName(){
//      var addmid='sunil';
//      return addmid;
//  }

var todos = [
            { data: 'ggsggsgsgsg', done: false, delete: false },
            { data: 'dgsd', done: false, delete: false },
            { data: 'dddsr', done: true, delete: false },
]
console.log(todos)

var activeList=document.getElementById("activeList");
  var   deleteList=document.getElementById("deleteList");
  var  newInfo=document.getElementById("newInfo");

    newInfo.style.display='none';


    function ubdateButton(){
        deleteList.innerHTML='';
        activeList.innerHTML='';

        for(var i=0;i<todos.length; i++){
            if(todos[i].done){
                
                deleteList.innerHTML+= '<li>'+todos[i].data+'<button onclick="deleteTodo('+i+')">X</button>'+'</li>';
            }
            else{
                activeList.innerHTML+='<li>'+todos[i].data+'<button onclick="deleteTodo('+i+')">X</button>'+'<button onclick="doneTodo('+i+')"> &#10004;</button>'+'</li>';
                
            }
            
        }

    }ubdateButton();


    function createTodo(){
        var newtodoElement=document.getElementById("textField");
        var newTodo=newtodoElement.value;
        if(newTodo){
            todos.unshift({data:newTodo,done:false,isTrash:false});
            ubdateButton();
            newtodoElement.value='';
            newInfo.style.display='none';
        }
        else{
            newInfo.style.display='block';
        }
    }

    function doneTodo(index){
        todos[index].done=true;
        ubdateButton();

    }
    function deleteTodo(index){
        todos.splice(index,1);
        ubdateButton();
    }



