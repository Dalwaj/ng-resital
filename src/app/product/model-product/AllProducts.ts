import { Product } from "./Product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'bdd-52 (PostgreSQL)',
    img: '../../../assets/icons/cross.png',
    ownerId: 1,
    activities: [],
    description: 'description of my project'
  },
  {
    id: 2,
    name: 'my-new-product',
    img: './assets/icons/cross.png',
    ownerId: 1,
    activities: ['Deploiement du commit',
      'Build du commit',
      'Build du commit',
      'Deploiement du commit'],
    description: 'another description of project'
  },
  {
    id: 3,
    name: 'another-product',
    img: './assets/icons/cross.png',
    ownerId: 2,
    activities: [],
    description: 'still another description of project'
  }
]
