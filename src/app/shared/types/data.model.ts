export interface DataInterface {
  type: string;
  name: string;
  price: number;
  main_image: string; // Replace with appropriate data type (e.g., string for image URL)
  product_images: string[]; // Replace with appropriate data type (e.g., string[] for array of image URLs)
  priority: number;
  product_id: string;
  description: string;
  rating: number;
  review_count: number;
  stock: number;
}
export interface CartInterface extends DataInterface{
  quantity: number;
}
