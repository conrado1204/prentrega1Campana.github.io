import React from 'react';
import { Badge } from 'react-bootstrap';

function CartWidget() {
  return (
    <Badge pill variant="secondary">
      Carrito: <span>5</span> 
    </Badge>
  );
}

export default CartWidget;
