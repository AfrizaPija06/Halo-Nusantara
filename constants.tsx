
import { Destination, Package, Testimonial } from './types';

// Extended type for internal use to include numeric price
export interface DestinationWithPrice extends Destination {
  basePrice: number;
}

export const DESTINATIONS: DestinationWithPrice[] = [
  {
    id: '1',
    name: 'Labuan Bajo',
    region: 'Nusa Tenggara Timur',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    category: 'adventure',
    price: 'Rp 4.500.000',
    basePrice: 4500000,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Ubud, Bali',
    region: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    category: 'family',
    price: 'Rp 3.200.000',
    basePrice: 3200000,
    rating: 4.8
  },
  {
    id: '3',
    name: 'Raja Ampat',
    region: 'Papua Barat',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=800',
    category: 'adventure',
    price: 'Rp 8.500.000',
    basePrice: 8500000,
    rating: 5.0
  },
  {
    id: '4',
    name: 'Bromo',
    region: 'Jawa Timur',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800',
    category: 'budget',
    price: 'Rp 1.500.000',
    basePrice: 1500000,
    rating: 4.7
  },
  {
    id: '5',
    name: 'Lombok',
    region: 'Nusa Tenggara Barat',
    image: 'https://images.unsplash.com/photo-1512100356956-c1227c331f01?auto=format&fit=crop&q=80&w=800',
    category: 'halal',
    price: 'Rp 2.800.000',
    basePrice: 2800000,
    rating: 4.8
  },
  {
    id: '6',
    name: 'Yogyakarta',
    region: 'D.I. Yogyakarta',
    image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80&w=800',
    category: 'family',
    price: 'Rp 2.100.000',
    basePrice: 2100000,
    rating: 4.9
  }
];

export const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=800', title: 'Borobudur Morning', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?auto=format&fit=crop&q=80&w=800', title: 'Tropical Vibes', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800', title: 'Balinese Temple', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=800', title: 'Underwater Raja Ampat', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1571732154671-b23047196994?auto=format&fit=crop&q=80&w=800', title: 'Komodo Island Hike', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&q=80&w=800', title: 'Traditional Dance', size: 'small' },
];

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    title: 'Family Wonders Bali',
    duration: '4 Hari 3 Malam',
    includes: ['Hotel 4*', 'Sarapan & Makan Siang', 'Private Car', 'Tiket Wisata'],
    price: 'Rp 5.250.000/Pax',
    type: 'Family',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Labuan Bajo Adventure',
    duration: '3 Hari 2 Malam',
    includes: ['Live on Board (Phinisi)', 'Snorkeling Gear', 'Makan Lengkap', 'Guide Lokal'],
    price: 'Rp 4.500.000/Pax',
    type: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    title: 'Study Tour Budaya Jogja',
    duration: '3 Hari 2 Malam',
    includes: ['Bus Pariwisata', 'Penginapan Group', 'Workshop Batik', 'Sertifikat'],
    price: 'Rp 1.200.000/Pax',
    type: 'Study Tour',
    image: 'https://images.unsplash.com/photo-1601614741369-0268481308a9?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Andi Pratama',
    role: 'Young Professional',
    text: 'Pengalaman ke Labuan Bajo bareng Halo Nusantara beneran seamless. Gak perlu pusing urus apa-apa, semua rapi!',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: 't2',
    name: 'Siti Rahayu',
    role: 'Ibu Rumah Tangga',
    text: 'Paket family ke Bali sangat ramah anak. Pemandu wisatanya sabar banget sama anak-anak saya. Terima kasih!',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: 't3',
    name: 'Budi Santoso',
    role: 'Corporate HR',
    text: 'Gathering kantor kami ke Bromo sukses berat. Koordinasi tim Halo Nusantara sangat profesional dan on-time.',
    avatar: 'https://i.pravatar.cc/150?u=3'
  }
];
