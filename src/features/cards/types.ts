export interface Message {
  [key: string]: string;
}

export interface Images {
  svg: string;
  png: string;
}

export interface Card {
  id: number;
  code: string;
  image: string;
  images: Images;
  value: string;
  suit: string;
}

export interface Cards {
  cards: Card[];
}
