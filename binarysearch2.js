//I've invited you to fill out a form:
//Merge and Binary Search
//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6

function mergeSort (array){
    if(array.length<=1){
        return array;
    }

    let middle = Math.floor(array.length/2);
    let left = array.slice(0,middle);
    const right = array.slice(middle);
    return mergeSort(mergeSort(left),mergeSort(right));
}

 function merge(left,right){
let result =[];
let leftIndex = 0;
let rightIndex = 0;

while(leftIndex<left.length && rightIndex<right.length)
    if(left[leftIndex]<right[rightIndex]);
    leftIndex++;
}
return result.concat(left.slice(leftIndex),concat(right.slice(rightIndex)))





constNum = [45,12,6,89,2,5]
constsortedNum = merge.Sort(num);
console.log(sortedNum)


function binary(num, target){
    let left = 0;
    let right = num.length -1;
    
    while(left<=right){
    
        let middle = Math.floor((left+right)/2);
        if(num[middle] ===target){
            return middle
    
        }
    else if(num[middle] > target){
        right = middle - 1;
    
    }
    else{
        left = middle + 1;
    }
    }
    return null;
    
    }
    let number=[45,12,6,89,25];
    let target = 6;
    
    console.log(binary(num,target))


    


//Given an unsorted array of numbers return the sorted array in descending order
//let arr=[123,89,5,23,9,56]


function mergeSort (array){
    if(array.length<=1){
        return array;
    }

    let middle = Math.floor(array.length/2);
    let left = array.slice(0,middle);
    const right = array.slice(middle);
    return mergeSort(mergeSort(left),mergeSort(right));
}

 function merge(left,right){
let result =[];
let leftIndex = 0;
let rightIndex = 0;

while(leftIndex<left.length && rightIndex<right.length)
    if(left[leftIndex]<right[rightIndex]);
    leftIndex++;
}
return result.concat(left.slice(leftIndex),concat(right.slice(rightIndex)))





const Num = [123,89,5,23,9,56]
constsortedNum = merge.Sort(num);
console.log(sortedNum)

//Given the following array, search for the following target
//let target = 34
//let arr2 = [1,4,78,2,67,3];



function mergeSort (array){
    if(array.length<=1){
        return array;
    }

    let middle = Math.floor(array.length/2);
    let left = array.slice(0,middle);
    const right = array.slice(middle);
    return mergeSort(mergeSort(left),mergeSort(right));
}

 function merge(left,right){
let result =[];
let leftIndex = 0;
let rightIndex = 0;

while(leftIndex<left.length && rightIndex<right.length)
    if(left[leftIndex]<right[rightIndex]);
    leftIndex++;
}
return result.concat(left.slice(leftIndex),concat(right.slice(rightIndex)))





constNum = [1,4,78,2,67,3];
constsortedNum = merge.Sort(num);
console.log(sortedNum)




function binary(num, target){
    let left = 0;
    let right = num.length -1;
    
    while(left<=right){
    
        let middle = Math.floor((left+right)/2);
        if(num[middle] ===target){
            return middle
    
        }
    else if(num[middle] > target){
        right = middle - 1;
    
    }
    else{
        left = middle + 1;
    }
    }
    return null;
    
    }
    let num=[1,4,78,2,67,3];
    let targeted = 34;
    
    console.log(binary(num,target))


    
