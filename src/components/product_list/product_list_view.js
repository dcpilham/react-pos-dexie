import { useEffect, useState } from "react";
import { getProducts } from "../../repository/product";
import { Card, Button } from "react-bootstrap";
import * as productRepository from "../../repository/product";

export function ProductListView() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const initData = async () => {
        const result = await productRepository.getProducts();
        setProducts(result);
      }
      initData();
    }, [])
  
    //const products = useLiveQuery(() => db.products.toArray());
  
    if (!products) {
      return null;
    }
  
    console.log(products);

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>  
    );
}