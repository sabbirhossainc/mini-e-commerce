# 🛍️ React E-commerce SPA

A modern, responsive Single Page Application (SPA) built with **React.js** to simulate an e-commerce storefront with basic cart and checkout functionalities.

## 🚀 Live Demo

🔗 [Live Website](https://my-mini-e-commerce.netlify.app/)

## 📂 GitHub Repository

🔗 [GitHub Repo](https://github.com/sabbirhossainc/mini-e-commerce.git)

---

## 📌 Features

- ⚛️ Built with React.js
- 📱 Responsive design using Flexbox and CSS Grid
- 🛒 Cart management with quantity controls
- 🧾 Product detail view
- 💳 Simulated checkout process using a modal
- 🎯 SPA (Single Page Application) experience
- 🌐 Deployed on Netlify

---

## 🖥️ Pages Overview

### 1. Home Page

- Displays 6 dummy products.
- Each product card includes:
  - Image
  - Title
  - Price
  - "Add to Cart" button
- Clicking on a product navigates to its detailed view.

### 2. Product Detail Page

- Full product details including:
  - Product image
  - Title
  - Description
  - Price
- "Add to Cart" button

### 3. Cart Sidebar

- Slide-in/out sidebar with:
  - List of added products
  - Quantity increment/decrement controls
  - Total price summary
  - "Checkout" button

### 4. Checkout Modal

- Appears when clicking “Checkout”
- Form fields:
  - Name
  - Email
  - Address
- Simulated order placement

---

## 🛠️ Tech Stack

- **React.js** – Frontend framework
- **React Router DOM** – Routing management
- **TailwindCSS** – Styling
- **React Context API** – Global state management for cart
- **Vite**

---

## 📥 How to Run Locally

1. **Clone the Repository**

```bash
git clone https://github.com/sabbirhossainc/mini-e-commerce.git
cd mini-e-commerce
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

Open in Browser
Navigate to http://localhost:5173 (Vite)

---

## 📁 Project Structure

```bash
src/
├── components/ # Reusable components (Navbar, ProductCard, CartSidebar, etc.)
| ├── common/ # Reusable components (Field, Footer, Sidebar, etc.)
| | ├── Field.jsx
| | ├── Footer.jsx
| | ├── Header.jsx
| | ├── ProductGrid.jsx
| | └── SideBar.jsx
| ├── forms/ # Checkout form
| | └── CheckoutForm.jsx
| ├── modal/ # Modal Components
| | └── CheckoutModal.jsx
| ├── CartItem.jsx
| ├── ProductDetails.jsx
| ├── ProductGrid.jsx
| └── SideBarContent.jsx
├── contexts/
| └── index.js
├── db/
| └── products.json
├── pages/
| ├── HomePage.js
| └── ProductDetailsPage.jsx
├── hooks/
| ├── index.js
| ├── useCart.js
| ├── useClickOutside.js
| └── usePortal.js
├── Providers/
| ├── CartProvider.jsx
| └── PortalProvider.jsx
├── Routes/
| └── Layout.jsx
├── utils/
| ├── cart-utils.jsx
| └── svgs.jsx
├── App.jsx
├── index.css
└── main.jsx
```
