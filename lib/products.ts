export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  badge?: 'mas-vendido' | 'oferta' | 'nuevo'
  discount?: number
}

export const categories = [
  { id: 'all', name: 'Todos', icon: 'grid' },
  { id: 'medicamentos', name: 'Medicamentos', icon: 'pill' },
  { id: 'cuidado-personal', name: 'Cuidado Personal', icon: 'sparkles' },
  { id: 'dermocosmetica', name: 'Dermocosmética', icon: 'droplet' },
  { id: 'bebes-maternidad', name: 'Bebés y Maternidad', icon: 'baby' },
  { id: 'perfumeria', name: 'Perfumería', icon: 'flower' },
  { id: 'suplementos', name: 'Suplementos', icon: 'leaf' },
] as const

export const products: Product[] = [
  // Medicamentos
  {
    id: '1',
    name: 'Ibuprofeno 400mg x 20',
    category: 'medicamentos',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    badge: 'mas-vendido',
  },
  {
    id: '2',
    name: 'Paracetamol 500mg x 16',
    category: 'medicamentos',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Vitamina C 1000mg x 30',
    category: 'medicamentos',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    badge: 'nuevo',
  },
  // Cuidado Personal
  {
    id: '4',
    name: 'Crema Hidratante Facial',
    category: 'cuidado-personal',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    badge: 'oferta',
    discount: 20,
  },
  {
    id: '5',
    name: 'Protector Solar FPS 50',
    category: 'cuidado-personal',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=400&h=400&fit=crop',
    badge: 'mas-vendido',
  },
  {
    id: '6',
    name: 'Gel de Baño Nutritivo',
    category: 'cuidado-personal',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop',
  },
  // Dermocosmética
  {
    id: '7',
    name: 'Sérum Vitamina C',
    category: 'dermocosmetica',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    badge: 'nuevo',
  },
  {
    id: '8',
    name: 'Crema Antiedad Premium',
    category: 'dermocosmetica',
    price: 24900,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    badge: 'oferta',
    discount: 15,
  },
  {
    id: '9',
    name: 'Agua Micelar 400ml',
    category: 'dermocosmetica',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop',
  },
  // Bebés y Maternidad
  {
    id: '10',
    name: 'Pañales Premium x 44',
    category: 'bebes-maternidad',
    price: 15900,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    badge: 'mas-vendido',
  },
  {
    id: '11',
    name: 'Crema Antipañalitis',
    category: 'bebes-maternidad',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1597854710218-d2f9b1de4c8c?w=400&h=400&fit=crop',
  },
  {
    id: '12',
    name: 'Shampoo Bebé Suave',
    category: 'bebes-maternidad',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    badge: 'nuevo',
  },
  // Perfumería
  {
    id: '13',
    name: 'Perfume Floral 100ml',
    category: 'perfumeria',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
    badge: 'oferta',
    discount: 25,
  },
  {
    id: '14',
    name: 'Colonia Fresh Sport',
    category: 'perfumeria',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop',
  },
  {
    id: '15',
    name: 'Set Regalo Premium',
    category: 'perfumeria',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop',
    badge: 'nuevo',
  },
  // Suplementos
  {
    id: '16',
    name: 'Omega 3 x 60 cápsulas',
    category: 'suplementos',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop',
    badge: 'mas-vendido',
  },
  {
    id: '17',
    name: 'Colágeno Hidrolizado',
    category: 'suplementos',
    price: 14500,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
  },
  {
    id: '18',
    name: 'Multivitamínico Completo',
    category: 'suplementos',
    price: 11200,
    image: 'https://images.unsplash.com/photo-1550572017-4e7d8e12d10b?w=400&h=400&fit=crop',
    badge: 'oferta',
    discount: 10,
  },
]

export const WHATSAPP_NUMBER = '5491112345678'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function getWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price)
}

export function getDiscountedPrice(price: number, discount: number): number {
  return price - (price * discount) / 100
}
