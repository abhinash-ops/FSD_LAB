function mergeArrays(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        // if(!res.includes(arr[i])){
        //     res.push(arr[i])
        // }
        for(let j=0;j<arr[i].length;j++){
            res.push(arr[i][j]);
        }
    }
    console.log(res);
}

let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
mergeArrays(arr);