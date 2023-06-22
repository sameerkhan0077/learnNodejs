### 1.Api to register a student 
 ```sql

 URL : www.wecodeacademy.in/api/v1/student/register
Method Type : post
Request Param : No 
Path Param : No
Request Boby :yes
Request Headers : yes 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Request Body : {
    name : "Sajid",
    mobile : 943543545,
    email: "sajid@gmail.com",
    address : "Jaipur",
    subject : ["Nodejs", "Js", "Java"]
}
Response Body : {
      status : true ,
      massage : student addmission sucessfully
}{
      name : "Sajid",
      id :1,
    mobile : 943543545,
    email: "sajid@gmail.com",
    address : "Jaipur",
    subject : ["Nodejs", "Js", "Java"]

}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
### 2.Api to get all student details
```sql
 URL : www.wecodeacademy.in/api/v1/student
Method Type : GET
Request Param : No 
Path Param : No
Request Body : NO 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    data : [{
          name : "SAMEER",
    id : 1,
    mobile : 70141010416,
    email: "sameer@gmail.com",
    address : "Jaipur",
    subject : ["Nodejs", "Js", "Java"]
    },
    {
          name : "aarif",
    id : 2,
    mobile : 1010121452,
    email: "aarif@gmail.com",
    address : "Jaipur",
    subject : ["Nodejs", "Js"]
    },
     {
          name : "khlil",
    id : 3,
    mobile : 786086444,
    email: "khlil@gmail.com",
    address : "merta",
    subject : ["Nodejs", "Js"]
    },
     {
          name : "sohil",
    id : 4,
    mobile : 7860866455,
    email: "sohil@gmail.com",
    address : "sikar",
    subject : ["Nodejs", "Js"]
    },
        
    ],
    message : "Student successfully created",
    statusCode :200
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
### 3.Api to get student detail by id
```sql
 URL : www.wecodeacademy.in/api/v1/student/id
Method Type : GET
Request Param : No 
Path Param : student id
Request Body : NO 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    data : [
     {
          name : "khlil",
    id : 3,
    mobile : 786086444,
    email: "khlil@gmail.com",
    address : "merta",
    subject : ["Nodejs", "Js"]
    }  
    ],
    message : "successfully",
    statusCode :200
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
### 4.Api to get student detail by id, by name, by age 
```sql
URL :www/wecodeacademy/api/v1/student/id=1&name=sameer&age=21
Method Type : GET
Request Param : No 
Path Param : student id,name,age
Request Body : NO 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    data : [
     {
          name : "sameer",
    id : 1,
    age:21,
    mobile : 786086444,
    email: "sameer@gmail.com",
    address : "jaipur",
    subject : ["Nodejs", "Js"]
    }  
    ],
    message : "Student data ",
    statusCode :200
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```

### 5.Api to get student detail by id, by name, by age, by mobile, by email, by fathername, by address, by pincode 
```sql
URL : www.wecodeacademy.in/api/v1/student?id=1&name="sameer"&age=18&email="sameerkhan@gmail.com"&fathername="b.khan"&address="Jaipur"&pincode=341303

Method type : GET,
Request Param : Yes ,
Path Param : student id name age mobile email fname address,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    id : 1,
    name : "sameer",
    fathername="b.khan",
    email="sameerkhan@gmail.com",
    age : 18
    pincode=341303,
    address : "Jaipur",
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
###  5.Api to get all teacher details 
```sql
 URL : www.wecodeacademy.in/api/v1/teacher
Method Type : GET
Request Param : No 
Path Param : No
Request Body : NO 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    data : [{
          teacherName : "sajid ali khan",
    id : 1,
    mobile : 9785797865,
    email: "sajidkhan@gmail.com",
    address : "Jaipur",
    subject :["js","nodejs"]
    },
    {
          teacherName : "shrukh khan",
    id : 2,
    mobile : 8698657856,
    email: "shrukh123@gmail.com",
    address : "Jaipur",
    subject :["web designing "]
    },
     {
          teacherName : "ar khan",
    id : 3,
    mobile : 7864860868,
    email: "sajidkhan@gmail.com",
    address : "Jaipur",
    subject :["mongodb",computer science]
    },
        
    ],
    message : "show teacher details",
    statusCode :200
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
### 6.Api to get teacher details by id 
```sql
 URL : www.wecodeacademy.in/api/v1/teacher/id=1
Method Type : GET
Request Param : No 
Path Param : teacher    
Request Body : NO 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    data : [
     {
          teacherName : "ar khan",
    id : 1,
    mobile : 7864860868,
    email: "arkhan@gmail.com",
    address : "Jaipur",
    subject :["mongodb",computer science]
    }, 
    ],
    message : "successfully data show",
    statusCode :200
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
### 7.Api to get teacher details by name 
```sql
 URL : www.wecodeacademy.in/api/v1/teacher/name="sajidkhan"
Method Type : GET
Request Param : No 
Path Param : teacher name
Request Body : NO 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    data : [
     {
          teacherName : "sajid khan",
    id : 2,
    mobile : 7864860868,
    email: "sajidkhan@gmail.com",
    address : "Jaipur",
    subject :["mongodb",computer science]
    }, 
    ],
    message : "successfully data show",
    statusCode :200
}
```
### 8.Api to get all batch details 
```sql
 URL : www.wecodeacademy.in/api/v1/batch
Method Type : GET
Request Param : No 
Path Param : No
Request Body : NO 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    data : [
     {
          batchName: "Javascript",
    id : 1,
    totaleStudent:15,
    time: 9am,
    fees :3000
    }, 
     {
          batchName: "Java",
    id : 2,
    totaleStudent:20,
    time: 10am,
    fees :5000
    }, 
     {
          batchName: "nodejs",
    id : 3,
    totaleStudent:18,
    time: 7am,
    fees :4000
    }, 
    ],
    message : "successfully data show",
    statusCode :200
}
```
### 9.Api to get batch details by batchName
```sql
 URL : www.wecodeacademy.in/api/v1/batch/batchName
Method Type : GET
Request Param : No 
Path Param : batch batchname
Request Body : NO 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
          batchName: "Javascript",
    id : 1,
    totaleStudent:15,
    time: 9am,
    fees :3000
    }
      message : "successfully data show",
    statusCode :200
  ```
  ### 10.Api to update student Data 
```sql
 URL : www.wecodeacademy.in/api/v1/student
Method Type : put
Request Param : yes
Path Param : No
Request Body : Yes
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body :   {
          name : "sameer",
    id : 1,
    age:21,
    mobile : 786086444,
    email: "sameer@gmail.com",
    address : "jaipur",
    subject : ["Nodejs", "Js"]
    }  
Response Body :   {
          name : "sameer",
    id : 1,
    age:21,
    mobile : 3214563251,
    email: "sameer@gmail.com",
    address : "jaipur",
    subject : ["Nodejs", "Js"]
    
      message : "successfully update data",
    statusCode :200
    }

    when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```

### 11.Api to add teacher salary 
```sql
URL : www.wecodeacademy.in/api/v1/teacher
Method type : put,
Request Param : No ,
Path Param : NO,
Request Body : yes,
Responce Body : No,
Request Headers : No 
Response Headers  :Content Type :Yes application/json

Request Body : {
          teacherName : "sajid khan",
    id : 2,
    mobile : 7864860868,
    email: "sajidkhan@gmail.com",
    address : "Jaipur",
    subject :["mongodb",computer science],
    salary :10000

    }, 
when Respnose Code is 200
Responce Body :
 status : true ,
     massage : "Salary update successfully"
     data :{
    teacherName : "sajid khan",
    id : 2,
    mobile : 7864860868,
    email: "sajidkhan@gmail.com",
    address : "Jaipur",
    subject :["mongodb",computer science],
    salary :10000
},
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while uppdating data",
    statusCode : 500
}
```
### 12.Api to add a new teacher 
```sql
URL : www.wecodeacademy.in/api/v1/teacher
Method Type : post
Request Param : No 
Path Param : No
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 
request Body : {
     teacherName : "sam khan",
    id : 4,
    mobile : 78648677555,
    email: "samkhan@gmail.com",
    address : "sikar",
    subject :["mongodb","sql"],
    salary :5000,
}
Response Body : {
      status : true ,
      massage : new teacher add sucessfully
      data:{
        teacherName : "sam khan",
    id : 4,
    mobile : 78648677555,
    email: "samkhan@gmail.com",
    address : "sikar",
    subject :["mongodb","sql"],
    salary :5000,

      }
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```

### 13.Api to update batch details
```sql
URL : www.wecodeacademy.in/api/v1/batch
Method Type : put
Request Param : No 
Path Param : No
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json

request Body :{
    id:1,
    Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :10000,
    TotelStudent :14
}
when Respnose Code is 200
Response Body : {
      status : true ,
      massage : "sucessfully update Batch details "
      data : {
   Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :10000,
    TotelStudent :14
}
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while updating data",
    statusCode : 500
}
```

### 14.Api to delete batch 
```sql 
URL : www.wecodeacademy.in/api/v1/Betch/3
Method Type : DELETE
Request Param : no
Path Param : betchid 3
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json


request Body :{
    id :3
  Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :10000,
    TotelStudent :14
}

Response Body :
when Respnose Code is 200
    massage : "Betch Successfully deleted"
    data : {
        id:3,
    Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :10000,
    TotelStudent :14
}

when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "betch Not deleted. betch Not Exict",
    statusCode : 500
}

```
### 15.Api to delete student 
```sql
URL : www.wecodeacademy.in/api/v1/student/1
Method Type : DELETE
Request Param : no
Path Param : student 3
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json


request Body :{
          name : "khlil",
    id : 1,
    mobile : 786086444,
    email: "khlil@gmail.com",
    address : "merta",
    subject : ["Nodejs", "Js"]
    } 

Response Body :
when Respnose Code is 200
    massage : "student Successfully deleted"
    data : {
          name : "khlil",
    id : 1,
    mobile : 786086444,
    email: "khlil@gmail.com",
    address : "merta",
    subject : ["Nodejs", "Js"]
    } 

when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "betch Not deleted. betch Not Exict",
    statusCode : 500
}
```
### 16.Api to delete teacher
```sql
URL : www.wecodeacademy.in/api/v1/teacher/1
Method Type : DELETE
Request Param : no
Path Param : teacherid 1
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json


request Body :{
  teacherName : "sam khan",
    id : 1,
    mobile : 78648677555,
    email: "samkhan@gmail.com",
    address : "sikar",
    subject :["mongodb","sql"],
    salary :5000,
}

Response Body :
when Respnose Code is 200
    massage : "teacher Successfully deleted"
    data : {
       teacherName : "sam khan",
    id : 1,
    mobile : 78648677555,
    email: "samkhan@gmail.com",
    address : "sikar",
    subject :["mongodb","sql"],
    salary :5000,
}

when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "betch Not deleted. betch Not Exict",
    statusCode : 500
}
```
