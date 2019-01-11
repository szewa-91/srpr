# SRPRarghhh



## Requirements
To run the project, you need to install and run an SQL server. The most common (and advised) solution is MySQL 
([get from website](https://www.mysql.com/downloads/)) or download using your package manager.

Then, you have to create a table (named for example `srpr`). Also create a user and grant them all privileges on this table

Provide details of the database and the user in `application.properties` file (in `/src/main/resources`). 

```
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/{table_name}
spring.datasource.username={name_of_user}
spring.datasource.password={password_of_user}
spring.jpa.hibernate.ddl-auto=create
```
You can use default value for all fields: `srpr`. 

You can use different SQL implementation, but then you have to provide your own configuration.


### Run the application
```
./mvnw
```
or
```
mvn install 
mvn spring-boot:run
```

### Run frontend separately
To run frontend in development mode go to `/src/main/vue` directory and run `npm install` and `npm run serve`. 
It will enable hot reload.
