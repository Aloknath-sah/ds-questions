console.log(checkSequence("effg"))
function checkSequence(input){
    for(var i=0;i<input.length;i++){
        if(input.charCodeAt(i) >= input.charCodeAt(i+1)){
            return false
        }  
    
    }
    return true
}




