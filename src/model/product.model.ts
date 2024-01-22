export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
}

export interface ProductInCart {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  color: string;
}
