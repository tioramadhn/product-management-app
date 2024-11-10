# Product Management App

This project is a frontend application built with React and Vite + TypeScript. It enables users to manage product data, including adding, editing, and deleting product details. The app includes authentication functionality, allowing users to log in and out securely.

## Project Features

The application includes the following key features:

- **Login**: User authentication to access and manage product data.
- **Logout**: User logout to ensure secure session management.
- **Product List**: Display a list of products with essential details.
- **Add Product**: Form to input new product details, including attributes like name, SKU, brand, and description.
- **Edit Product**: Update existing product information.
- **Delete Product**: Remove products from the list.

### Product Attributes

Each product contains the following attributes:

- **Name**: Product name (text input)
- **SKU**: Unique identifier for the product (text input)
- **Brand**: Product brand (dropdown selection)
- **Description**: Product description (WYSIWYG editor for rich text formatting)
- **Variations**: Dynamic list of variations, each with:
  - **Name**: Variation name (text input)
  - **SKU**: SKU for each variation (text input)
  - **Selling Price**: Price for each variation (number input)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: Version 14 or higher
- **npm** or **yarn**: For managing dependencies

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. **Install Dependecies**:
   ```bash
   npm install
   ```
3. **Run Application**:
   ```bash
   npm run dev
   ```

### Credentials

use this credentials to run app

```bash
username : admin
password : password
```
