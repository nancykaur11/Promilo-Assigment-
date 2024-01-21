This code represents a basic React application with user authentication using React Router and API calls. Below is a breakdown of the key components and functionalities:

### Routing Setup:
The application uses react-router-dom for handling routing.
There are two main components: App and AuthenticatedApp.
The App component defines the overall structure, routes, and protected routes using ProtectedRoute.
The AuthenticatedApp component is the authenticated part of the application, rendering the main content when the user is logged in.

### Login Component:
The Login component is responsible for user login.
It includes form inputs for email and password, and it performs basic client-side validation for email format and password complexity.
Upon successful validation, it sends a POST request to an authentication endpoint using Axios.
If authentication is successful, it stores the access token in local storage and navigates to the authenticated part of the application.

### ProductDetails Component:
The ProductDetails component fetches and displays product details.
It uses the access token stored in local storage for authentication in the API request.
It includes a search functionality to filter products based on the user's input.

### Navbar Component:
The Navbar component displays a simple navigation bar with a logo, Home, About, and Logout links.
The navigation links are conditionally rendered based on the current route using react-router-dom and useLocation.
The Logout link clears the authentication token from local storage.

### Additional Notes:
The application uses SHA-256 hashing for password security before sending it to the authentication endpoint.
The authentication token is stored in local storage for subsequent API requests.
Axios is used for making HTTP requests to the authentication and product details endpoints.
The application UI  uses Bootstrap classes for styling.


### Deployment
This section has moved here: https://promilo-assigment.vercel.app/login

### LOGIN 
EMAIL:test45@yopmail.com 
PASSWORD:Test@123



