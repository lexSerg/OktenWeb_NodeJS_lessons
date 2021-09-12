// // Fixed problem with promices
// let filePath = path.join(process.cwd(), 'dir', 'art.txt');
// function closureCounter(){
//     let counter = 0;
//     console.log(counter);
//     return function(){
        
//         return ++counter
//     } 
// };
// function asyncClosureCounter(cb){
//     setTimeout(cb, 5000);
//     return cb()
// }
// for(let i = 0; i < 5; i++) {
//     let lineCounter = asyncClosureCounter(closureCounter);
//     fs.appendFile(filePath, ` It is ${lineCounter()} line in Node lection \n`, err => {
//         if (err) console.log(err);
//     })
// }