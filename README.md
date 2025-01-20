# Requirements

The user of the web application should be able to see a list of products and add them to the shopping cart.

They should:

- See a large list of products
- See stock availability for each product
- See the list of items in the cart
- Add a product to the cart
- Increase/decrease the quantity of the products already in the cart, decreasing down to 0 will remove the product from the cart
- See cart total amount

The web application needs to be responsive and adapt from a single view layout (desktop mockup) to a multiple view layout as in the mobile mockup. The user will be able to navigate from product list view to cart view using the navigation arrow buttons.

The following requirements are a plus:

- Add a product to favorite list
- List the favorite products

### Dev Requirements

You should use:

- Styled-Components/Emotion/Sass/Less/css or similar to style the components
  > Avoid using design systems or style components libraries and try to follow the look and feel in the mockup provided (pixel perfect not required).
- Typescript **(Is a plus)**
- React

Testing components is a plus, although a minimal unit test suite will be appreciated.

Available entry points:

- GET /grocery: get the list of products
- PATCH /grocery/:id: update the item stock
- GET /grocery?favorite=1: get the list of favorite items

Please refer to the README file inside `server-api` for details on how to run the API server locally.

# How to Run the Application

Follow these steps to run the web application:

1. **Install dependencies**:
   Open a terminal in the root directory of the project and run:
   ```bash
   npm install
   ```
2. **Start the API server**
   Navigate to the server-api directory:
   ```bash
   cd server-api
   ```
3. **Install its dependencies**:
   ```bash
   npm i
   ```
4. **Start the server**:
   ```bash
   npm start
   ```
5. **Return to the shopping-front directory**:
   Navigate back to the main application directory:
   ```bash
   cd ../shopping-front
   ``` 
6. **Build the application**:
   Create an optimized production build of the application:
   ```bash
   npm run build
   ```
7. **Preview the production build**:
   Launch a local server to preview the production build:
   ```bash
   npm run preview
   ```
    **The application will be available at: 
    ```browser
    http:localhost:4173
    ``` 