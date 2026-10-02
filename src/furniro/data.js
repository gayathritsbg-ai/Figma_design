export const products = [
  { id: 1, name: 'Syltherine', subtitle: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, badge: '-30%', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=700&q=85' },
  { id: 2, name: 'Leviosa', subtitle: 'Stylish cafe chair', price: 2500000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85' },
  { id: 3, name: 'Lolito', subtitle: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, badge: '-50%', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85' },
  { id: 4, name: 'Respira', subtitle: 'Outdoor bar table and stool', price: 500000, badge: 'New', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=85' },
  { id: 5, name: 'Grifo', subtitle: 'Night lamp', price: 1500000, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85' },
  { id: 6, name: 'Muggo', subtitle: 'Small mug', price: 150000, badge: 'New', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=85' },
  { id: 7, name: 'Pingky', subtitle: 'Cute bed set', price: 7000000, oldPrice: 14000000, badge: '-50%', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=85' },
  { id: 8, name: 'Potty', subtitle: 'Minimalist flower pot', price: 500000, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85' },
];

export const categories = [
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85' },
  { name: 'Living', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85' },
];

export const blogs = [
  { title: 'Going all-in with millennial design', date: '14 Oct 2022', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85' },
  { title: 'Exploring new ways of decorating', date: '08 Oct 2022', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85' },
  { title: 'Handmade pieces that took time to make', date: '02 Oct 2022', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=85' },
];

export const formatPrice = (value) => `Rp ${value.toLocaleString('id-ID')}`;
