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
