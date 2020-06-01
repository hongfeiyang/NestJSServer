# NestJSServer

#### This is a server written with NestJS, backed by mongodb and provides a BFF using GraphQL.

## Logic and Structure

This repo has 5 modules. There are 4 microservice modules, with each of them being:
    'Auth', which provides authentication and authorisation services;
    'Company', which provides services for any CRUD oprations to Company entities;
    'Vacancy', which provides services for any CRUD oprations to Vacancy entities;
    'User', which provides services for any CRUD oprations to User entities;
Among these 4 microservices, 'Company', 'User', 'Vacancy' services has each one directly connected to a seperate mongodb database for data storage.

The GraphQL module then communicates with each of these microservices to provide a set of APIs for managing users, companies, and mainly vacancies through a user-friendly web interface.

## Data

A set of data has already been injected into the databases at runtime to get you started.

###### User
| _id| name| address  |
| :---: |:---:|:---:|
|ObjectId(“5e5df7fc6953acd3dc50fe8f”)|PredictiveHire|15 Newton St|

###### Company
|_id|customerId|name|username|password|role|
| :---: |:---:|:---:| :---: |:---:|:---:|
|ObjectId(“5e5df7f450571fb3aecdcf21”)|ObjectId(“5e5df7fc6953acd3dc50fe8f”)|Bob Markle|bob|bob|user|
|ObjectId(“5ecfd064aadd1b78bbf12f99”)|ObjectId(“5e5df7fc6953acd3dc50fe8f”)|Mark Smith|mark|mark|admin|


### Usage

***You need to install `docker` and `npm` to run this packge***

To start, run:
```
docker-compose build
```
wait for everything to finsh compile, then run:
```
docker-compose up
```
to start all services, wait for all services to start, then open up your browser, go to this address:
```
http://localhost:3040/graphql
```
to access the graphql web interface


#### Login

The first thing you need to do is to login, otherwise you will not be able to do any anything with this server. To login, create this query to get your jwt access token:
```
query {
  login(credentials: { username: "mark", password: "mark" }) {
    user
    accessToken
  }
}
```
For your convenience, I have supplied an 'admin' user to you. You may create new users later by yourself.

If this user exits in the database, you will receive a access token like this:
```
{
  "data": {
    "login": {
      "user": "5e5df7f450571fb3aecdcf21",
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkZjdmNDUwNTcxZmIzYWVjZGNmMjEiLCJuYW1lIjoiTWFyayBTbWl0aCIsInVzZXJuYW1lIjoibWFyayIsInBhc3N3b3JkIjoibWFyayIsInJvbGUiOiJhZG1pbiIsImN1c3RvbWVySWQiOiI1ZTVkZjdmYzY5NTNhY2QzZGM1MGZlOGYiLCJfX3YiOjAsImlhdCI6MTU5MDk3MTI5NCwiZXhwIjoxNTkwOTc0ODk0fQ.V87laT2h5iNjDx9N8XcZkGJgZKbjNvM_ln75lYCcUD0"
    }
  }
}
```
otherwise both fields will be `null`.

Copy the accessToken part of the string, which is a Json Web Token and add that as the bearer token for the 'Authorization' field to all HTTP headers. You may find headers at the bottom of the query section.

```
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkZjdmNDUwNTcxZmIzYWVjZGNmMjEiLCJuYW1lIjoiTWFyayBTbWl0aCIsInVzZXJuYW1lIjoibWFyayIsInBhc3N3b3JkIjoibWFyayIsInJvbGUiOiJhZG1pbiIsImN1c3RvbWVySWQiOiI1ZTVkZjdmYzY5NTNhY2QzZGM1MGZlOGYiLCJfX3YiOjAsImlhdCI6MTU5MDk3MTI5NCwiZXhwIjoxNTkwOTc0ODk0fQ.V87laT2h5iNjDx9N8XcZkGJgZKbjNvM_ln75lYCcUD0"
}
```
You may proceed to any CRUD operations from now on. This token will expire in 1 hour.


#### View Vacancies

To view any vacancies, you create query
```
query {
  getAllVacanciesOfAllCompanies {
    _id
    title
    ...
  }
}

```
to view all vacanies for all companies (we only have 1 company here), or you create query
```
  getAllVacanciesOfThisCutomer {
    _id
    title
    description
    expiredAt
    company_id
    ...
  }
```
to view vacancies only pertaining to the company the current user belongs to

#### Create A Vacancy

to create a vacancy, you create mutation
```
mutation {
  createVacancy(
    input: {
      title: "example title 1"
      description: "example description 1"
      expiredAt: "01-01-2021"
    }
  ) {
    _id
    title
    description
    expiredAt
    company_id
  }
}
```
to create a single vacancy for your company(customer).
You need to supply a title, description and expiredAt value. The company_id will be automatically supplied to the system.


#### Update A Vacancy

To update a vacany, you create mutation
```
mutation {
  updateOneVacancy(id: "5ed437381c6451001f7386f8", update: { title: "updated title 1" }) 
}
```
with id being the '_id' of the vacancy you want to update, and 'update' being the new values of those fields you want to update.

You will receive either a 'success' or 'failed' response upon executing this mutation.


#### Delete A Vacancy

To delete a vacany, all you need to do is to provide the vacancy's id by executing this mutation:
```
mutation {
  deleteOneVacancy(id: "5ed437381c6451001f7386f8")
}
```
Similar to update, you will also receive either a 'success' or 'failed' response upon executing this mutation.

