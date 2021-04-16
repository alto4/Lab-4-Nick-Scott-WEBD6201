\*- get DB connection running on cluster - create a users table 💯

- update logo and images/resources 💯

- Home Page

  - Needs a welcome message 💯
  - Mission Statement 💯

- About Page

  - Name 💯
  - Image 💯
  - Paragraph describing the person 💯

- Projects Page

  - Images of 3 Projects 💯
  - Descriptions of 3 Projects 💯
  - links to demos/repos of 3 Projects 💯

- Services Page

  - Short list of services offered (3 each) 💯
  - Images 💯

- Contact Page

  - Contains our Contact Information to the top 💯
  - Create a Contact Class 💯
  - Should act like a register Page 💯
  - Should allow the user to input First Name, Last NAme, Contact Number, Email Address, and an optional message 💯
  - Doesn't need to email but does need to record their Information 💯

- Express Server Site Structure

  - Generate site structure with Express Generator 💯
    **\*\*** - Javascript, CSS and Multimedia Asset Files should be moved to seperate folders within the public folder TODO -> Extract css from h1s

- MongoDB Server, Mongoose and Passport

  - Create a DB MongoDB Atlas 💯
  - Install Mongoose 💯
  - Create a Contact Schema to enable CRUD (modify Router and Controller) 💯
  - Install Passport using npm 💯
  - Create a User Schema to enable Login, Registration and Logout functionality💯
  - Create an AuthGuard Method to secure pages from un-authenticated users💯

- Server Side Routing and Content Views

  - Each page in the website will be split into its own partial file and reside in the Views/partials (components/content)💯
  - Express route must exist for each page (router.get and router.post)💯
  - Page logic should reside in a controller file name index.js (index controller)💯

- Site Security - Login/Register Views

  - Login view should have a username and password field, and a login button (and a link to redirect to the register page)💯
  - Register view should allow the user to input their information (first and last name, email, username and password) as well as a register button (success will create a new user) 💯
  - DB will contain a user collection. the user Schema will include the display name (user first and last name) 💯
  - If the user is authenticated, they will be redirected to the Business Contacts List View (a collection of all contacts), if the login fails, they are redirected to the login page💯
  - if an un-authenticated user tries to navigate to business contact page, they should be redirected to the login page💯

- Business Contacts View Page

  - List of all existing contacts should appear on this page (Name, number and email)💯
  - Allow the user to edit and delete an existing contact💯
  - Delete, removes the contact from the dbe💯
    -Edit, transfers the contact info to a new 'register' page where the user can update the info (looks the same as add contact)💯
  - Include an add contact (looks the same as edit contact)💯

- Update View (Edit Page?)
  - Allow the user to update a contact details💯
  - Include an edit button💯 \***\*\*\*\*\*\*\***- Include a delete button, which will delete the contact and redirect them to business contact view page
  - Include a cancel button💯
