

Hello Class,

After our lecture in Express and ES6, you will find below a challenge to practice a bit more what we saw in the previous lectures : 
#### Step 1: Setup and Initialization

- Initialize a new Node.js project by running ``npm init -y`` in your project directory.
- Install Express and EJS by running ```npm install express ejs```.
- Create a file named app.js - this will be your entry point

#### Step 2: Create a Mock Database

- Create a file named books.json in the root of your project directory. This will act as your mock database.
- create a books.json with an array of book objects and copy paste the information below 
      
   ```json
     [
	     {
	     "id": 1, 
	     "title": "Dune", 
	     "author": "Frank Herbert, 
	     "year": 1965
	     }, 
	     {
	    "id": 2,
	    "title": "Foundation",
	    "author": "Isaac Asimov",
	    "year": 1951
	    } 
	]  
    ```

####  Step 3: Implementing MVC

- Model: Create a model in a separate file (e.g., bookModel.js) to handle the logic for fetching data from books.json.
- View: Use EJS to create views for displaying the book list and book details. Create a views directory with EJS templates (e.g., index.ejs for the book list and book.ejs for book details).
- Controller: Implement a controller (e.g., bookController.js) that uses the model to fetch data and pass it to the views.

#### Step 4: Setting Up Routes and Views

- In app.js, set up your Express app to use EJS as the view engine and define routes for displaying the book list and individual book details. ( ex : ``/books``, ``/books/:id``)
- Implement routes in app.js that handle requests and use the controller to interact with the model and render the appropriate view.

#### Step 5: Displaying Books

- Your application should have at least two routes: one for displaying the list of all books and another for viewing details of a specific book by ID.
- The book list view should display all books and include links to view details for each book.
- The book detail view should display detailed information about a single book.

#### Step 6 : Add & Remove Books

- The application must have the capability to add and delete books both from the display and the `.json` file.
- Separate controllers should be implemented for the processes of adding and deleting books.