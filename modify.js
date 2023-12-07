let pass = document.getElementById("password");
let mess = document.getElementById("message");
let str = document.getElementById("strength");
let icon=document.getElementById("icon");

icon.onclick=function(){
if(pass.type=="password"){
    pass.type="text";
}
else{
    pass.type="password";
}

}



pass.addEventListener("input",()=>
{
    if(pass.value.length >0){
        mess.style.display="block";
    }
    else{
        mess.style.display="none";
    }

    if(pass.value.length<8){
        str.innerHTML=" weak";
        pass.style.borderColor="#ff5925";
        mess.style.color="#ff5925";
    }
    if((/[!^A-Za-z0-9]/.test(pass.value))&&(/[A-Z]/.test(pass.value))&&(/[a-z]/.test(pass.value)) && pass.value.length>=8){
        str.innerHTML=" medium";
        pass.style.borderColor="yellow";
        mess.style.color="yellow"
    }
    if( (/[^A-Za-z0-9]/.test(pass.value))&&(/[A-Z]/.test(pass.value))&&(/[a-z]/.test(pass.value))&& pass.value.length>=8){
        str.innerHTML=" strong";
        pass.style.borderColor="#26d730";
        mess.style.color="#26d730"
    }
    if(pass.value==''){
        pass.style.borderColor="white";
        mess.style.color="white";
        }
}
)
