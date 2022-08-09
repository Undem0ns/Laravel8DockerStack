import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:8100/api/products';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get(baseURL, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer YV8CNXZ2a6YeryNuCsjCwHsOtNEAi9FjirwQvA8p'
      }})
      .then(res => {
        setProducts(res.data);
      }).catch(err => {
        console.log(err);
      }
    );
  } , []);
  return (
    <div>
      <h1>Product List ({products.length})</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Price</th>
            <th>CreatedDate</th>
            <th>ModifiedDate</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(element => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.slug}</td>
                  <td>{element.price}</td>
                  <td>{element.created_at}</td>
                  <td>{element.updated_at}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
