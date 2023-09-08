function login(element){
    if(element.innerText != "Logout"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
}


function addDefinition(element){
    element.remove();
}
function ninjalike(){
    alert("Ninja was liked");
}