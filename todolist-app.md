# To Do List
## Features
### Must Haves
* Have a Main List that can have many items
* Items to be separated one after another in list form
* Be able to add an item to the list
* Be able to edit the item
* Be able to mark the item as “Done”, I.e. item deleted
* Able to add Custom Lists with all the features and functionality of the Main list

### Optional
* Have a due date against the item
* Item changes colour if past due date
* Able to re-order items with a list
* Able to select which list to view from the front-end
* Each list to be differentiated by a colour
* Able to assign an item to another list
* Add details to an item that will contain additional info about the item

## Solution Notes

- Create the project folder [done]
- initialise NPM [done]
- install NPM with defult settings [done]
- Create app.js and index.html [done]
- Add npm packages: express, body-parser, ejs [done]
  - ejs requires `views` folder with `*.ejs` file [done]
- Run node with nodemon [done]

>This should get the skeleton setup done to commence building the app

- get basic HTML and send/receive data between frontend and server [done]
- use ejs variables to send data [done]
- Add functionality to add new to do items [done]
- add Mongo database to the project to store the data
  - connect using Mongoose (install pkg via npm)
  - require mongoose
  - define Schema
  - 
- add functionality to ensure all CRUD operations are possible

> basic functionality of to do list should now be working

- style the page using CSS

> look and feel of page with a single list is now working

- add Custom List to the app that can be accessed via the url

> all functionality now enabled

- list all the to-do lists i.e. main list + all custom lists 
- the user should be able to click on the list name and navigate to the to-do list
