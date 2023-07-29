# API E-Commerce



This is an E-Commerce project that consumes an external API to fetch product information and dynamically display it on the web page. The product details are retrieved using the asynchronous function `fetchPrdoucts` with JavaScript's `fetch` method.

## Functionality

The project utilizes asynchronous JavaScript to fetch product information from an external API and display it on the HTML page. The relevant JavaScript code can be found in the `index.js` file.

## Technologies Used

- JavaScript: Programming language
- HTML: Markup language for structuring the page
- CSS: Styling language for visual enhancements

## Usage

To view the project in action, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/api-eccomerce.git`
2. Open the `index.html` file in your web browser.

## How It Works

The JavaScript code contained in the `index.js` file is responsible for consuming the external API and displaying the product information on the page. The asynchronous function `fetchPrdoucts` is the key piece for fetching data from the API. Below is a brief explanation of what happens in the code:

1. The `DOMContentLoaded` event is used to ensure that the code is executed only when the content of the page is fully loaded.

2. The function `fetchPrdoucts(url)` is defined with the `async` keyword, indicating that it is an asynchronous function.

3. The `fetchPrdoucts` function takes a URL as an argument, which is the location of the external API containing product information.

4. The function uses the `fetch` method to fetch data from the API using the provided URL as an argument. The use of `await` makes this call asynchronous, waiting for the API response before proceeding.

5. The API response is then converted to JSON format using `await data.json()`. This is possible because the `json()` method is also an asynchronous operation.

6. The `response` object contains the product details returned by the API. A `for...in` loop is used to iterate over the indices of the `response` object.

7. Within the loop, relevant information about the products, such as title, description, category, image, and price, is extracted from the `response` object and used to create corresponding HTML elements.

8. The HTML elements are added to the element with the class "products" on the page using `products.innerHTML += ...`.

9. As a result, product details are dynamically displayed on the web page after full loading.

## Contribution

Contributions are welcome! If you want to contribute improvements, bug fixes, or new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

![License](https://img.shields.io/badge/license-MIT-blue)
