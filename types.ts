
export interface Destination {
  id: string;
  name: string;
  region: string;
  image: string;
  category: 'family' | 'adventure' | 'halal' | 'budget';
  price: string;
  rating: number;
}

export interface Package {
  id: string;
  title: string;
  duration: string;
  includes: string[];
  price: string;
  type: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}
