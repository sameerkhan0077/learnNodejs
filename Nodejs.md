# Nodejs Theory 

### 1.Nodejs hm kyu use krte hain? Nodejs ke benefits?
```
nodejs  async programming ke liye use krte h or isme Data store kra skte h.
nodejs javascript ka engien chrome V8 use krta h .
*benefits
- nodejs javascript ke code ko server said pr run krta h
- nodejs se Database me se  data export, import kar sakte hai.
```
### 2. Nodejs and JavaScipt me kya difference hai?
```
javascript-
javasctipt client side language hai language h jiska use web page ko build script k ly kiya jata yhai ak oop language h jise browser me run kiya jata h java script sync programing k ly use hoti iska code line by line chlta h 
Client-side applications ko  dynamically typed bnane k ly javascript ka use kiya jata h.
Nodejs-
Nodejs ki madad se javascript ke code ko browser k bhar run kiya ja skta h 
server said development  me nodejs ko use kiya jata h .Nodejs me API create kar sakte hai
```

### 3. Module kya hota hai ? Nodejs me module kitni trah se import kr skte hain ?
```
 module ek tarah ka packge hota hai jo specific facilities provide karata hai functions, objects, ya variables ko export karke dusre files me reuse karne ki anumati deta hai. Modules ki madad se code organized aur maintainable banata hai.

import Module from './other.js';
import {sumfunction} from './other.js';
const module = import('./other.js');
const Module = require('./other.js');
```


### 4. Nodjes ke feature ke bare me likho 
### 5. File System module ka kya use hai ?
```
file system module encoding utf-8 ki madad se ham local machine/server me file read, update, create and delete file kr skte h .
```
### 6. Encoding kya hoti hai ? UTF-8 encoding ke bare me btayen 
```
Encoding ka mtlb hm chijo ko computer ko kis trh se dege ki computer ko smjh me aajay mtlb kesi chij ko bdl kr dusri trh se represent  krna hi encoding khlata h.encoding alg alg trh ki hoti h jisme se utf-8 ak h.
UTF-8
utf-8 ak format hota h jab hm computer pr koi pr koi programing krte h to computer us ko program ko bainary format me deta h fir agr program UTF-8 formate spotted h to use convet kr dega .utf-8 kuch softwere ya applications me hota h jisko hm koi si bhi language de to us language me convert kr dega.UTF-8 se hm koi bhi languageko smjh or read kr skte h.
```

### 7. Absolute and Relative path me kya differences hain 
```
Absolute = path ka mtlb hota h file ka part jisme file ka pura path likha hota h age hme kesi folder jana ho to us folder ke andr jitne bhi folder h vo sare Absolute path khate h 
ex- a\b\c\d\e ager hme e folder tk jitne bhi folder h vo sare e folder ke Absolute path  honge.

Relative= Relative path current working directory se file ya directory ka location specify karta hai.age current me hm c folder me h to e folder ko Relative path c\d\e hoga
```

### 8. File and Folder me kya differnce hai ?
```
File ek unit hoti hai jisme data, information, ya instructions stored hote hai.jise data text ya pictures ya koi code ,program,document ho skta h .Files me data  text ya formatted (binary) form me store ho sakta hai.File ek specific name,aur unique path ke saath hote hai,

Folder files aur sub-folders ko organize ya store karne ke liye use kiye jate hai.folders ek  multiple files aur sub-folders ko contain karte hai.
folder bhi unique name se ho skte h folder ka use file ko store krane k ly kiya jata h .
```

### 9. Differnce between callback and promise. Explain with example

Callback aur Promise dono asynchronous programming me use hone wale concepts hai.

callback:-
callback ak function hota h jo asynchronous programming ke bad run hota
h.yhai as argument kisi function ko pass kiya jata hai jo callback function ke rup me run hota h.
```
const sayhello = ()=>{
    console.log("hello")
}

function sum(a,b,callback){
  setTimeout(() => {
    callback();
    console.log(a+b)
   
    
  }, 2000);

}
sum(10,20,sayhello);
console.log("hello sameer")
```
promise :-
promise ek object hota h jo asynchronous oprestion ko resolve ya reject
ko deta h .yhai error ko heddal krne ya data ko print krane me madad krta h.Promises ko  three states me kr skte h.promise me response  ko handle  krene k ly .then ka use krte h to ak callback function leta h .error ko handle krne k ly .catch function ka use krte h jo ak parameter leta  h jiseme error ko dete h .
1.Pending 
2.Fulfilled 
3.Rejected 
```
let prom = new Promise(function (reject, success) {
  success();
});

prom.then(
  function () {
    console.log("Hello");
  },
  function () {
    console.log("Error");
  }
) .catch(function (value) {
    console.log(value);
  });
  ```


### 10. readFile and readFileSync me kya differences hain? Explain with example 
 readFile:-
readFile ak asynchronous file system run hota  h jo jo ki file ko read krne k ly use hota h isme filesystem module use hota h jo file ka path or encoding leta h file read krne k ly.
```
const fs = require("fs");
fs.readFile("input.txt", "utf-8", function (error, data) {
    console.log("this code error", error )
  console.log(data);
});
```
readFileSync:-
readFile ak synchronous  file system run hota h jo file ko read krne k ly use hota h isme bhi filesystem module use hota h jo file path or encoding "utf-8" leta h.
```
const fs = require('fs');
const data = readFileSync("input.txt", {encoding : "UTF-8"});
console.log(data);
console.log("readFileSync")
```

### 11. writeFile and writeFileSync me kya differences hain? Explain with example?

writeFile :-
writeFile ek function hai jo asynchronous behavior run hota hai. writeFile function exists file me data write karne or new file create kar ke data write karne ke liye use hota hai.
```
 const fs = require("fs");
 fs.writeFile("input.txt", "and bad",  { flags:["r+","a+"] }, function (error, data) {
   console.log(data);
   console.log("this error",error);
 });
console.log("Hello ");
```
writeFileSync:-
writeFileSync ek function hai jo synchronous behavior run hota hai. writeFileSync function exists file me data write karne or new file create kar ke data write karne ke liye use hota hai.
```
 const fs = require("fs");
 fs.writeFileSync("input.txt", "writeFileSync");
 ```
