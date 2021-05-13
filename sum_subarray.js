input = `3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`
input = input.split("\n")
var tcase = Number(input[0])
var line = 1
for(var t=0; t < tcase; t++){
    var [n,k] = input[line++].split(" ").map(Number)
    var arr = input[line++].split(" ").map(Number)
    var res = func(arr,n,k)
    console.log(res)
}

function func(arr, n, k){
    var sum = arr[0]
    var start = 0
    for(var i = 1; i <= n; i++){
        while(sum > k && start < i-1){
            sum = sum - arr[start]
            start++
        }
        if(sum == k){
            return "Yes"
        }
        if(i < n){
            sum = sum + arr[i]
        }
    }
    return "No"
}