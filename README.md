# SRPRarghhh



## Database
To run the project, you need to install and run an SQL server. The most common (and advised) solution is MySQL 
([get from website](https://www.mysql.com/downloads/)) or download using your package manager.

Then, you have to create a database (named for example `srpr`). Also create a user and grant them all privileges on this database.

Provide file `db.properties` (in `/src/main/resources`) with details of the database and the user. 

```
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/{table_name}
spring.datasource.username={name_of_user}
spring.datasource.password={password_of_user}
spring.jpa.hibernate.ddl-auto=create
```
You can use default value for all fields: `srpr`. 

You can use different SQL implementation, but then you have to provide your own configuration.


## Run the application
```
./mvnw
```
or
```
mvn install 
mvn spring-boot:run
```

### Init db on run
You can add some more properties to decide how the application should handle database initialization:
 
`spring.jpa.hibernate.ddl-auto=create` - create schema on startup
`spring.datasource.initialization-mode=always` - initialize data on startup (taken from `data.sql`)

You can add those properties to your db.properties file or execute once only when running application:

```
mvn spring-boot:run -D<property_name>=<property_value>
```

Be aware that this command can overwrite your changes in database.

### Run frontend separately
To run frontend in development mode go to `/src/main/vue` directory and run `npm install` and `npm run serve`. 
It will enable hot reload and development support in browsers.
