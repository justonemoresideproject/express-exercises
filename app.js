const express = require('express')
const app = express();

function findMean(nums){
    let num;
    for(let i = 0; i < nums.length; i++){
        num += num[i]
    }
    return num / nums.length;
}

function findMedian(nums){
    return nums[Math.round(nums.length / 2) - 1]
}

function findMode(nums){
    let obj = {}

    for(let num in nums){
        if(obj[`${num}`]){
            obj[`${num}`] += 1
        } 
        obj[`${num}`] = 0
    }

    let highestNum = 0;
    for(let num in nums){
        if(obj[`${num}`] > highestNum){
            highestNum = num
        }
    }
    return highestNum;
}

app.get('/mean', (req, res) => {
    res.send({response: {operation: 'mean', value: findMean(req.params.nums)}})
})

app.get('/median', (req, res) => {
    res.send({response: {operation: 'median', value: findMedian(req.params.nums)}})
})

app.get('/mode', (req, res) => {
    res.send({response: {operation: 'mode', value: findMode(req.params.nums)}})
})

app.get('/all', (req, res) => {
    res.send({response: {operation: 'all', mean: findMean(req.params.nums), median: findMedian(req.params.nums), mode: findMode(req.params.nums)}})
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})