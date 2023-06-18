### 1. What is the difference between fs.writeFile() and fs.appendFile() functions in Node.js?
fs.writeFile()
```sql
writeFile file ko write kr ne k ya data store krna k ly kiya jata hai.
writeFile file ko write kr ne k ya data store krna k ly kiya jata hai 
writefile async programing ya code ko run krta h .
writefile agr file phle se create h to uska data ko hta kr new data store kra deta h.or agr file create nhi h to usme data insert kr dega or new file bna dega.
```
fs.appendFile()
```sql
appendFile bhi file me data insert krne k ly use me liya jata h yhai bhi
data store store krane ka function h appendFile system bhi ak callback function leta h or async kam krta h isme  agr koi file phle se create h or data insert h to use  data ko remove na krke uske aage new data add krta h.
yhai bhi file name ,data,callback function leta h.
```
