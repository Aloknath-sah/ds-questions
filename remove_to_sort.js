input = `10
4 8 3 7 2 1 5 9 6 10`
input = input.split("\n")
var n = Number(input[0])
var arr = input[1].split(" ").map(Number)
for(var i=0; i < n; i++){
    for(var j=i+1; j < n; j++){
        if(arr[i] < arr[j]){
            break
        }
        else if(arr[i] > arr[j]){
            arr.splice(j, 1)
        }
        
    }
}
console.log(arr.join(" "))