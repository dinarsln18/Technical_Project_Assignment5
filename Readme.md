# Membuat Restfull API Todolist CRUD 
## Features
- Register 
- Login 
- Create new todo
- Get all todo
- Show todo by id
- Update a todo by id
- Delete todo 


## API Documentation 
## Register 
  - URL : /register
  - Method : POST 
  - Request body : 
``` 
{
  "name" : "Dina",
  "email" : "dina@gmail.com",
  "password" : "123"
}
```
- Success Response :
  - Code : 201
  - Content : 
    ```
    { "message" : "User created succesfully" }
    ``` 
- Error Response :
  - Code : 400
  - Content :
    ``` 
    { "message" : "Email already exists."}
    ```

## Login 
- URL : /login
- Method : POST 
- Request body :
``` 
{
    "email": "dina@gmail.com",
    "password": "123"
}
```


## Create todo 
- URL : /tambahData
- Method : POST
- Request body 
``` 
{
    "name" : "Dina",
    "email": "Dina@gmail.com",
    "password": "123"
}
``` 
- Success Response :
   - Code : 201
   - Content : 
   ```
   {
    "message": "Data berhasil dibuat",
    "data": {
        "name": "Dina",
        "email": "Dina@gmail.com",
        "password": "123",
        "_id": "6375f7d1a0a39ca86708af26",
        "__v": 0
    }
   ```
   
- Error Response : 
  - Code : 400
  - Content : 
  ``` 
  "password" is not allowed to be empty
  ``` 

## Get all todo 
- URL : /getData
- Method : GET
- Success Response :
   - Code : 200
   - Content : 
   ```
  {
    "message": "Berikut ini adalah Datanya!",
    "data": [
        {
            "name": "Dina",
            "email": "Dina@gmail.com",
            "password": "123",
            "id": "6375f7d1a0a39ca86708af26"
        }
    ]
  }
   ```
   
- Error Response : 
  - Code : 400
  - Content : 
  ``` 
  {
    message: "Data tidak ada",  
        }
  ``` 
  
## Show todo by id 
- URL : /getData/:id
- Method : GET
- Success Response :
   - Code : 200
   - Content : 
   ```
  {
    "message": "Berikut ini adalah Datanya!",
    "data": [
        {
            "name": "Dina",
            "email": "Dina12@gmail.com",
            "password": "123",
            "id": "6375f7d1a0a39ca86708af26"
        }
    ]
  }
   ```
   
- Error Response : 
  - Code : 400
  - Content : 
  ``` 
  {
    message: "Data dengan id tersebut tidak terdaftar!",  
        }
  ``` 
  
## Update todo by id
- URL : /updateData/:id
- Method : PUT
- Success Response :
   - Code : 201
   - Content : 
   ```
  {
    "message": "Data ini berhasil diubah",
    "dataSebelumnya": {
        "name": "Dina",
        "email": "Dina@gmail.com",
        "password": "123",
        "id": "6375f7d1a0a39ca86708af26"
    },
    "dataSesudahnya": {
        "name": "Dina123",
        "email": "Dina123@gmail.com",
        "password": "123",
        "id": "6375f7d1a0a39ca86708af26"
    }
}
   ```
   
- Error Response : 
  - Code : 400
  - Content : 
  ``` 
  {
    message: "Data dengan id tersebut tidak terdaftar!",  
        }
  ``` 

  
## Delete data by id 
- URL : /deleteData/:id
- Method : DELETE
- Success Response :
   - Code : 200
   - Content : 
   ```
  {
    "message": "Data ini berhasil dihapus",
    "data": {
        "name": "Dina123",
        "email": "Dina123@gmail.com",
        "password": "123",
        "id": "6375f7d1a0a39ca86708af26"
    }
}
   ```
   
- Error Response : 
  - Code : 400
  - Content : 
  ``` 
  {
    message: "Data dengan id tersebut tidak terdaftar!",  
        }
  ``` 





