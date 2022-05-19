"use strict"


//LOGIN

const LOGIN=()=>{
    let Email_address=document.getElementById('Email_id').value;
    let Password=document.getElementById('Password_id').value;
   
    var data_transfer=JSON.parse(localStorage.getItem('data'));

    for(let i=0;i<data_transfer.length;i++){
        if(Email_address==data_transfer[i].email  && Password==data_transfer[i].password){
            location.href='home.html';

        }
    }  
}




//To Create account

const createaccount=()=>{
    location.href='create_account.html'
}


const save=()=>{
    const firstnameInput=document.getElementById('First_name_id').value;
    const lastnameInput=document.getElementById('Last_name_id').value;
    const emailInput=document.getElementById('emailcreate_id').value;
    const passwordInput=document.getElementById('Passwordcreate_id').value;
    
   
    //to save them in localstorage
    const obj={
        email:emailInput,
        password:passwordInput,
        firstname:firstnameInput,
        lastname:lastnameInput,
    };

    //get data and save 
    if(localStorage.getItem('data')==null){
        localStorage.setItem('data','[]');
    }
        
    
    var old_data=JSON.parse(localStorage.getItem('data'));
    old_data.push(obj);

    localStorage.setItem('data',JSON.stringify(old_data));  
};


//back
const Back=()=>{
    location.href="login.html"
}










