
// myclick();
// mydelete();

// function myclick(){
//     var newUser=document.getElementById("newitem").value;
    
//     if(newUser!=''){
//         document.getElementById("demo2").innerHTML='';
//         document.getElementById("userlist").style.color="green";
//         document.getElementById("userlist").innerHTML+="<li>"+newUser+" "+" "+"<button id='delete' onclick='mydelete()'>delete</button>"+" "+" "+"<button id='add' onclick='mydone()'>done</button>"+"</li>"+"<br>";
//        // console.log(newUser);
//         document.getElementById("userlist").style.listStyleType="circle";
//     }
//     else{
        
//         document.getElementById("demo2").innerHTML="<ins>"+"Please enter some data"+"</ins>";
//         userlist2
    
//     }document.getElementById("demo").value=''; 
//     mydelete();
//     function mydelete() {
       
//         var newUser=document.getElementById('userlist').innerText;
//         console.log(newUser)
//         var newArra=[];
//     //    var x= document.getElementById("userlist").innerHTML;
      
//        newArra.push(newUser);
//        console.log(newArra);
       
//         // var newUser=document.getElementById('userlist').innerHTML;
//         for(i=0;i<newArra.length; i++){
//           delete newArra[i];
//         // newArra.splice(0,i);
//            console.log(newArra);
//        } 
        
      
    
//     }
   
// }

// function  mydone(id){
//     var newUser=document.getElementById('demo').value;
//         document.getElementById("userlist2").innerHTML+="<li>"+newUser+"</li>"
// }
// document.getElementById("delete").onclick=function Addition(id){
//     var x= document.getElementById("userlist");
//     console.log(x);
//     if(newUser==x){
//         document.getElementById("userlist").value='';
//     }
// }

// (function(){

//     var todo = document.querySelector( '#todolist' ),
//         form = document.querySelector( 'form' ),
//         field = document.querySelector( '#newitem' ),
//         temp=document.querySelector('#demo2'),
//         natr=document.querySelector('#newButton'),
//        x=document.querySelector("element4"),
//         Arra=[];
//         button = document.createElement("button");
//         button.innerHTML="delete";
//         button.setAttribute("id","element4");
//         todo.appendChild(button);


//         button2 = document.createElement("button");
//         button2.innerHTML="select";
//         button2.setAttribute("id","element");
//         todo.appendChild(button2);
//         console.log(button2);
//         console.log(x);


// console.log(natr);
        
//         // var newButton=giveElement('button');
//         // newButton.setAttribute('id','button');
//         // document.body.appendChild(newButton);
      
//     form.addEventListener( 'submit', function( ev ) {
//       var text = field.value;
//       if ( text !== '' ) {
//         temp.innerHTML='';
//         todo.innerHTML += '<li>' + text + +"  "+ "  "+"  "+'</li>';
//         field.value = '';
//         field.focus();
      
       
// }
//       else{
//         temp.innerHTML= "<ins>"+"Please enter some data"+"</ins>";
//       }
//       ev.preventDefault();
//     }, false);
  
//     // todo.addEventListener( 'click', function( ev ) {
//     //   var t = ev.target;
//     //   if ( t.tagName === 'LI' ) {
//     //     if ( t.classList.contains( 'done' ) ) {
//     //       t.parentNode.removeChild( t );
//     //     } else {  
//     //       t.classList.add( 'done' );
//     //     }
//     //   };
//     //   ev.preventDefault();
//     // }, false);
// //     todo.addEventListener( function myclick() {
// // //         var listItem = this.parentNode;
// // //   var ul = listItem.parentNode;
// // // var t = ev.target;
// // //  if ( t.tagName === 'LI' ) {
// // //      t.delete(li);
// // //  }

  
// //   ul.removeChild(listItem);  
        
// //     })

// // function myclick(){
// //     Arra.push(todo);
// //     for(i=0; i<Arra.length;i++){
// //        delete Arra[i];
// //     }
// // }
//   button.removeEventListener('click', myFunction)
//      function myFunction(){
//         Arra.push(todo);
//             for(i=0; i<Arra.length;i++){
//           todo.innerHTML= delete Arra[i];
//         }
         
//      }
  
//    })();


function todoList() {
    var item = document.getElementById('todoInput').value;
    var text = document.createTextNode(item);
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    var newItem = document.createElement("div");
    var p=document.getElementsByTagName(p);
    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    p.appendChild()
    document.getElementById("todoList").appendChild(newItem);
  }
