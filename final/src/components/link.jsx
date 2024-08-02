import React, { createContext, useState, useEffect } from 'react';

// User Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUserId = localStorage.getItem('userId');
    return savedUserId ? { id: savedUserId } : null;
  });

  useEffect(() => {
    if (user && user.id) {
      localStorage.setItem('userId', user.id);
    } else {
      localStorage.removeItem('userId');
    }
  }, [user]);

  useEffect(() => {
    console.log("Current User:", user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Cart Context

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/cartItems');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCartItems();
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:3000/cartItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      setCartItems([...cartItems, data]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await fetch(`http://localhost:3000/cartItems/${productId}`, {
        method: 'DELETE',
      });
      setCartItems(cartItems.filter(item => item.id !== productId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, products, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const getProducts = async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  return response.json();
};

export const addProduct = async (product) => {
  const response = await fetch("http://localhost:3000/products", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

export const signUp = async (user) => {
  const response = await fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};


export const getUsers = async () => {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  return data;
};

export const getUserById = async (id) => {
  const response = await fetch(`http://localhost:3000/users/${id}`);
  const data = await response.json();
  return data;
};


export const login = async (credentials) => {
  const users = await getUsers();

  const user = users.find(
    (user) => user.email === credentials.email && user.password === credentials.password
  );

  if (user) {
    return { message: 'Login successful!', user: { id: user.id } };
  } else {
    return { message: 'Invalid email or password' };
  }
};



export const deleteProduct = async (productId) => {
  await fetch(`http://localhost:3000/products/${productId}`, {
    method: 'DELETE',
  });
};







