input = `2
4 5
3 5 3 4
4 3
1 2 2 3`
input = input.split("\n")
var tcase = Number(input[0])
var line = 1
for(var t=0; t < tcase; t++){
    var [n,k] = input[line++].split(" ").map(Number)
    var arr = input[line++].split(" ").map(Number).sort((a,b)=> a > b? 1: -1)
    var boats = 0
    var sum = 0
    for(var i=0; i < n; i++){
        if(sum <= k){
            sum += arr[i]
        }
        if(sum > k){
            sum = 0
            boats += 1
        }
    }
    console.log(boats)

}