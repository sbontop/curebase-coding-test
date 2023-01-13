function validateMountainNumber(arr){
    if (arr.length < 3) return false
    
    let noPeaks = 0
    for (let i = 0; i < arr.length - 1; i++){
        let isPeak = arr[i] > arr[i - 1] && arr[i] > arr[i + 1]
        
        if (isPeak) noPeaks += 1
        if (arr[i] == arr[i+1]) return false
        if (arr[i] < 0 || arr[i] > 10000) return false
        if (arr.length < 1 || arr.length > 10000) return false
    }
    return noPeaks == 1
}


function testOutput() {
    arr = [0,2,3,4,5,2,1,0]
    resolved = validateMountainNumber(arr)
    return resolved == true
}

function test2Output() {
    arr = [0,2,3,3,5,2,1,0]
    resolved = validateMountainNumber(arr)
    return resolved == true
}

function test3Output() {
    arr = [0, 2, 3, 4, 5]
    resolved = validateMountainNumber(arr)
    return resolved == true
}

function test4Output() {
    arr = [0, 1, 2, 3, 4, 5, 1]
    resolved = validateMountainNumber(arr)
    return resolved == true
}

function test5Output() {
    arr = [-1, 0, 2, 3, 2, 0]
    resolved = validateMountainNumber(arr)
    return resolved == true
}

function test6Output() {
    arr = [5, 3, 2, 0]
    resolved = validateMountainNumber(arr)
    return resolved == true
}

function test7Output() {
    arr = [0, 2, 67, 100000, 32, 1]
    resolved = validateMountainNumber(arr)
    return resolved == true
}



test1 = testOutput()
console.log(test1)

test2 = test2Output()
console.log(test2)

test3 = test3Output()
console.log(test3)

test4 = test4Output()
console.log(test4)

test5 = test5Output()
console.log(test5)

test6 = test6Output()
console.log(test6)

test7 = test7Output()
console.log(test7)
