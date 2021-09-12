//*1) Environment
// const {var2, greatingMax, createUser} = require('./dir/file2');
// // const {var1} = require('./dir/file2');

// greatingMax();
// // console.log(var1);
// console.log(var2, createUser('Andrew', 27));

// console.log('*******************************');
// console.log(__filename);
// console.log(__dirname);
// console.log('*******************************');
// console.log(global.globalVariable);
// // console.log(process);
// // console.log(process.env);
// console.log(process.cwd(), '**process.cwd()**');


//*2) FILE SYSTEM

const fs = require('fs');
const path = require('path');

// // This code has error 'ENOENT: no such file or directory', because direcories 'photos' & 'user2152' not exist
// let filePath = path.join(process.cwd(), 'photos', 'user2152', 'art.txt');
// console.log(filePath);
// fs.writeFile(filePath, 'This is first lection form NodeJS', err => {
//     if (err) console.log(err);;
// })

// // It works because directory 'dir' exist
// let filePath = path.join(process.cwd(), 'dir', 'art.txt');
// console.log(filePath);
// fs.writeFile(filePath, 'This is first lection form NodeJS', err => {
//     if (err) console.log(err);;
// })

// // Alternative library
// const fse = require('fs-extra'); 
// let filePath = path.join(process.cwd(), 'photos', 'user2152', 'art.txt');
// console.log(filePath);
// fse.writeFile(filePath, 'This is first lection from NodeJS', err => {
//     if (err) console.log(err);;
// })

let filePath = path.join(process.cwd(), 'dir', 'art.txt');
let filePathNew = path.join(process.cwd(), 'dir', 'newArt.txt');

// fs.appendFile(filePath, ` It is new line line in Node lection \n`, (err) => {
//     if (err) console.log(err);
// })
// fs.mkdir(path.join(__dirname, 'zoom', 'video', '12.09'), {recursive : true}, err => {
//     console.log('Folder created');
//     console.log(err);
// })

// fs.rmdir(path.join(__dirname, 'dir2'), {recursive : true}, err => {
//     if (err) console.log(err);
    
// })

// fs.readdir(path.join(process.cwd(), 'dir'), (dirErr, files) => {
//     if (dirErr) console.log(dirErr);
//     else {
//         files.forEach(file => {
//             fs.stat(path.join(process.cwd(), 'dir', file), (fileErr, fileStat) => {
//                 if (fileErr) console.log(fileErr);
//                 console.log(fileStat.isDirectory());
//             })
//         })
//     } 
// })

// fs.unlink(filePath, err => {
//     if (err) throw err
// })

// fs.rename(filePath, filePathNew, err => {
//     if (err) throw err
// })

// for (let i = 0; i < 8000; i++) {
//     fs.appendFile(filePath, 'I am new line \n', err => {
//         if (err) console.log(err); 
//     })
// }

// fs.readFile(filePath, (err, data) => {
//     if (err) {
//         throw err;
//         return
//     } 
//     console.log(data.toString());
// } )

const readStream = fs.createReadStream(filePath);
const writeStream = fs.createWriteStream(filePathNew);
// readStream.on('open', () => {
//     console.log('Open chank');
// })
// readStream.on('data', (chank) => {
//     console.log(chank);
//     console.log('************');
// })
// readStream.on('close', () => {
//     console.log('Close chank');
// })
// writeStream.write('I am write Stream')

// readStream.on('data', (chank) => {
//     writeStream.write(chank)
// })
// writeStream.write('I am write Stream')

console.time('stream');
readStream.pipe(writeStream)
console.timeEnd('stream');
















