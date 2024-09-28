export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "РОМЕО И ДЖУЛЬЕТТА",
    image: "/romeo.jpg",
    price: 1000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "САЛОМЕЯ",
    image: "/salomea.jpg",
    price: 1500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "БУРЯ",
    image: "/buria.jpg",
    price: 1500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Николай Ульянов. Искусство без манифеста",
    image: "/tretiak1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 1500,
  },
  {
    id: 5,
    title: "Юрий Злотников. Сигнальная система",
    image: "/tretiak2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 1500,
  },
  {
    id: 6,
    title: "Васнецовы. Связь поколений.",
    image: "/tretiak3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 1500,
  },
];

export default products;
