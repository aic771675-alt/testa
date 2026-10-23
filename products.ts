export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
};

export const newArrivals: Product[] = [
  { id: 'na1', name: 'Солитер Дроп', price: '1290 ₽', image: 'https://images.pexels.com/photos/28389453/pexels-photo-28389453.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'НОВИНКА' },
  { id: 'na2', name: 'Гало Крафф', price: '2450 ₽', image: 'https://images.pexels.com/photos/12026053/pexels-photo-12026053.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'НОВИНКА' },
  { id: 'na3', name: 'Жемчужный Чокер', price: '890 ₽', image: 'https://images.pexels.com/photos/21235148/pexels-photo-21235148.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'НОВИНКА' },
  { id: 'na4', name: 'Вечность Бэнд', price: '3200 ₽', image: 'https://images.pexels.com/photos/11504786/pexels-photo-11504786.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'НОВИНКА' },
  { id: 'na5', name: 'Стелла Кнопки', price: '1150 ₽', image: 'https://images.pexels.com/photos/20943478/pexels-photo-20943478.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'НОВИНКА' },
  { id: 'na6', name: 'Кольцо Каскад', price: '2890 ₽', image: 'https://images.pexels.com/photos/8306529/pexels-photo-8306529.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'НОВИНКА' },
];

export const bestSellers: Product[] = [
  { id: 'bs1', name: 'Каскад Бриллиант', price: '4500 ₽', image: 'https://images.pexels.com/photos/28389455/pexels-photo-28389455.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'ХИТ ПРОДАЖ' },
  { id: 'bs2', name: 'Золотой Монарх', price: '2100 ₽', image: 'https://images.pexels.com/photos/8891954/pexels-photo-8891954.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'ХИТ ПРОДАЖ' },
  { id: 'bs3', name: 'Королевская Закрепка', price: '5800 ₽', image: 'https://images.pexels.com/photos/8398911/pexels-photo-8398911.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'ХИТ ПРОДАЖ' },
  { id: 'bs4', name: 'Браслет Паве', price: '3650 ₽', image: 'https://images.pexels.com/photos/8306528/pexels-photo-8306528.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'ХИТ ПРОДАЖ' },
  { id: 'bs5', name: 'Маркиз Кёт', price: '4990 ₽', image: 'https://images.pexels.com/photos/11504788/pexels-photo-11504788.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'ХИТ ПРОДАЖ' },
  { id: 'bs6', name: 'Вечное Кольцо', price: '1750 ₽', image: 'https://images.pexels.com/photos/20943476/pexels-photo-20943476.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'ХИТ ПРОДАЖ' },
];

export type Category = {
  id: string;
  name: string;
  count: string;
  image: string;
};

export const categories: Category[] = [
  { id: 'cat1', name: 'СЕРЬГИ', count: '42 ИЗДЕЛИЯ', image: 'https://images.pexels.com/photos/37601638/pexels-photo-37601638.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'cat2', name: 'КОЛЬЕ', count: '36 ИЗДЕЛИЙ', image: 'https://images.pexels.com/photos/9645737/pexels-photo-9645737.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'cat3', name: 'КОЛЬЦА', count: '58 ИЗДЕЛИЙ', image: 'https://images.pexels.com/photos/18092913/pexels-photo-18092913.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'cat4', name: 'БРАСЛЕТЫ', count: '29 ИЗДЕЛИЙ', image: 'https://images.pexels.com/photos/27206257/pexels-photo-27206257.jpeg?auto=compress&cs=tinysrgb&w=900' },
];
