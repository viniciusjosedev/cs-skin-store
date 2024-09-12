export interface Item {
  id: string;
  name: string;     
  image: string;    
  category: string; 
  float?: string;         
  price: number;          
  createdAt: Date;
  updatedAt: Date;
}
