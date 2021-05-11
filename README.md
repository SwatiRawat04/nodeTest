# nodeTest
Please upload database with database name "node_crud_test" and table name is "users".

In the project folder, please run: npm install

Please run "nodemon start" OR "npm start" to start the server.

Runs the app with http://localhost:8000 to view it in the postman.(Authorization- no auth)

Method - GET; URL - http://localhost:8000/api/v1/users; Output - all user stored in database.

Method - GET; URL - http://localhost:8000/api/v1/users/<userid>; Output - specific user with that user id.

Method - POST; URL - http://localhost:8000/api/v1/users; in Body tag please select x-www-form-urlencoded and fill these details-first_name,last_name,age,dob(yyyy-mm-dd),mobile, email, address ; Output - add the user in database.

Method - PUT; URL - http://localhost:8000/api/v1/users/<userid>; Output - update a user.
	
Method - DELETE; URL - http://localhost:8000/api/v1/users/<userid>; Output - delete a user.