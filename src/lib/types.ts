export interface PlaceTypes {
  title: string;
  content: string;
  rating: 'do' | 'dont' | 'average';
  dollarSigns: number;
  link?: string;
  address?: string;
}
