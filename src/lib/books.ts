import crimsonVows from "@/assets/book-crimson-vows.jpg";
import velvetThrone from "@/assets/book-velvet-throne.jpg";
import gildedSins from "@/assets/book-gilded-sins.jpg";
import moonlitHeir from "@/assets/book-moonlit-heir.jpg";
import ashesEden from "@/assets/book-ashes-eden.jpg";
import empireThorns from "@/assets/book-empire-thorns.jpg";

export type Book = {
  id: string;
  title: string;
  cover: string;
  genre: string;
  rating: number;
  blurb: string;
  links: {
    amazon: string;
    wattpad: string;
    inkitt: string;
    goodreads: string;
    apple: string;
  };
};

export const books: Book[] = [
  {
    id: "crimson-vows",
    title: "Crimson Vows",
    cover: crimsonVows,
    genre: "Dark Romance",
    rating: 4.9,
    blurb:
      "She swore to destroy him. He swore to make her his. A vow written in blood, sealed in gold — and impossible to break.",
    links: {
      amazon: "https://www.amazon.com/s?k=crimson+vows",
      wattpad: "https://www.wattpad.com/search/crimson%20vows",
      inkitt: "https://www.inkitt.com/search?q=crimson+vows",
      goodreads: "https://www.goodreads.com/search?q=crimson+vows",
      apple: "https://books.apple.com/search?term=crimson+vows",
    },
  },
  {
    id: "velvet-throne",
    title: "The Velvet Throne",
    cover: velvetThrone,
    genre: "Fantasy Romance",
    rating: 4.8,
    blurb:
      "A stolen crown. A forbidden king. In the kingdom of velvet and ruin, only the cruel survive — and only love can dethrone them.",
    links: {
      amazon: "https://www.amazon.com/s?k=velvet+throne",
      wattpad: "https://www.wattpad.com/search/velvet%20throne",
      inkitt: "https://www.inkitt.com/search?q=velvet+throne",
      goodreads: "https://www.goodreads.com/search?q=velvet+throne",
      apple: "https://books.apple.com/search?term=velvet+throne",
    },
  },
  {
    id: "gilded-sins",
    title: "Gilded Sins",
    cover: gildedSins,
    genre: "Mafia Romance",
    rating: 4.9,
    blurb:
      "He owns the city. She owns his ruin. A mafia heir built of gold and grief meets the one woman he cannot kill, cannot keep — cannot forget.",
    links: {
      amazon: "https://www.amazon.com/s?k=gilded+sins",
      wattpad: "https://www.wattpad.com/search/gilded%20sins",
      inkitt: "https://www.inkitt.com/search?q=gilded+sins",
      goodreads: "https://www.goodreads.com/search?q=gilded+sins",
      apple: "https://books.apple.com/search?term=gilded+sins",
    },
  },
  {
    id: "moonlit-heir",
    title: "Moonlit Heir",
    cover: moonlitHeir,
    genre: "Paranormal Romance",
    rating: 4.7,
    blurb:
      "Born under a cursed moon, bound to an immortal prince. The night remembers every promise — and demands every debt.",
    links: {
      amazon: "https://www.amazon.com/s?k=moonlit+heir",
      wattpad: "https://www.wattpad.com/search/moonlit%20heir",
      inkitt: "https://www.inkitt.com/search?q=moonlit+heir",
      goodreads: "https://www.goodreads.com/search?q=moonlit+heir",
      apple: "https://books.apple.com/search?term=moonlit+heir",
    },
  },
  {
    id: "ashes-of-eden",
    title: "Ashes of Eden",
    cover: ashesEden,
    genre: "Dark Romance",
    rating: 4.8,
    blurb:
      "He was the angel sent to save her. She became the sin he could not survive. A love that ends worlds.",
    links: {
      amazon: "https://www.amazon.com/s?k=ashes+of+eden",
      wattpad: "https://www.wattpad.com/search/ashes%20of%20eden",
      inkitt: "https://www.inkitt.com/search?q=ashes+of+eden",
      goodreads: "https://www.goodreads.com/search?q=ashes+of+eden",
      apple: "https://books.apple.com/search?term=ashes+of+eden",
    },
  },
  {
    id: "empire-of-thorns",
    title: "Empire of Thorns",
    cover: empireThorns,
    genre: "Fantasy Romance",
    rating: 4.9,
    blurb:
      "Two empires. One blade. A love forged where roses bloom in blood and crowns are won by ruin.",
    links: {
      amazon: "https://www.amazon.com/s?k=empire+of+thorns",
      wattpad: "https://www.wattpad.com/search/empire%20of%20thorns",
      inkitt: "https://www.inkitt.com/search?q=empire+of+thorns",
      goodreads: "https://www.goodreads.com/search?q=empire+of+thorns",
      apple: "https://books.apple.com/search?term=empire+of+thorns",
    },
  },
];

export const genres = [
  "All",
  "Romance",
  "Dark Romance",
  "Fantasy Romance",
  "Mafia Romance",
  "Paranormal Romance",
];
