export interface PlaceTypes {
  title: string;
  content: string;
  rating: 'do' | 'dont' | 'meh';
  dollarSigns: number;
  link?: string;
  address?: string;
}
