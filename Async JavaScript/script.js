// Wake up in morning
// Fresh-up yourself
// have your breakfast


//When we want to order our Async tasks.(as Async task has no specific order).
var p1 = new Promise((res,rej)=>{
    return res("Wake up in morning");
})

var p2 = p1.then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
        return res("Fresh-up yourself");
    })
})

var p3 = p2.then((data)=>{
        console.log(data);
        return new Promise((res,rej)=>{
            return res("Have your breakfast");
        })
})

p3.then((data)=>{
    console.log(data);
})