### 1. What is the difference between fs.writeFile() and fs.appendFile() functions in Node.js?
# fs.writeFile()
```sql
writeFile file ko write kr ne k ya data store krna k ly kiya jata hai.
writeFile file ko write kr ne k ya data store krna k ly kiya jata hai 
writefile async programing ya code ko run krta h .
writefile agr file phle se create h to uska data ko hta kr new data store kra deta h.
or agr file create nhi h to usme data insert kr dega or new file bna dega.
```
# fs.appendFile()
```sql
appendFile bhi file me data insert krne k ly use me liya jata h yhai bhi
data store store krane ka function h appendFile system bhi ak callback function leta h or
async kam krta h isme  agr koi file phle se create h or data insert h to use  data ko 
remove na krke uske aage new data add krta h.
yhai bhi file name ,data,callback function leta h.
```
### 2. How can you recursively create directories using the fs module?
```sql
const fs = require('fs');

fs.mkdir("other", function(error,data){
  if(error){
    console.log(error,"error")
  }else{
    console.log(data,"success")
  }
});
```
### 3. Write a Node.js program to create a new directory and then create a new file within that directory
```
const fs = require("fs");
let folderName = "createDir";
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
  fs.writeFile(folderName +"/"+"node.txt","hello",function(err,Data){
    if(err){
      console.log(err,"message")
    }else{
      console.log(Data,"succese full")
    }
  })
}
```
### 4. Write a Node.js program to check if a file exists, and if it does, display its size and last modified date
```sql
const efile = "other.sql";
if(fs.existsSync(efile)){
  fs.stat(efile,function(err,stats){
    if(err){
      console.log(err)
    }else{
      console.log(stats.mtime)
      console.log(stats.size/1000/1024)

    }
  })
}
```
### 5. Write a Node.js program to list all files and directories within a given directory
```sql
fs.readdir("createDir",(error,data)=>{
  if(error){
    console.log("error",error)
  }else{
    console.log(data)
  }
})
```
### 6. What is the difference between require() and import in Node.js?
* require:-
```
require synchronous kam krta hai.
require file ke pure path ko satring ki trah load krta hoga
require CommonJS module ko hisa  hai.
require me module loaded hone tk baki ka code run nhi hota hai.
```

* import:-
```
import asynchronous trike se  kam krta hai.
import es6 ka hisa hai yhai module ka new version  hai.
isme module load hone tk baki ka run hota rhta hai.
```
### 7. Write difference between callbacks and promise?
* promise :-
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
* callback:-
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

### 9. Question: Write a Node.js program that reads the contents of a text file, capitalizes the text, writes the modified content to a new file, prints the modified content on the console, renames the new file, and finally deletes the original file. Implement the solution using the fs module in Node.js.
### Your program should perform the following steps:
* Read the contents of a text file called "input.txt".
* Convert the text to uppercase.
* Write the modified content to a new file called "output.txt".
* Print the modified content on the console.
* Rename "output.txt" to "newfile.txt".
* Delete the original file, "input.txt".
* Implement the program in Node.js, ensuring error handling and appropriate logging of each step.
```sql
const readifl =fs.readFileSync("input.txt",{encoding:"utf-8"})
const Convert = readifl.toUpperCase()
const writefl = fs.writeFileSync("output.txt",readifl)
console.log(writefl)
const rename = fs.renameSync("output.txt","newfile.txt");
const deletefl =fs.unlinkSync("input.txt")
console.log(deletefl)
```
### 10. Print the last modified date of each file in a folder.
```sql
const mdfloder = function(folderName){
 const fls = fs.stat(folderName,(err,fl)=>{
    if(err){
      console.log(err)
    }else{
      console.log(fl.mtime)
    }

  })

}
mdfloder("test");

 ```

