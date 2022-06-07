import {User} from "../../user/model-user/User";

export class Product {
  id: number;
  name: string;
  img: string;
  ownerId: number;
  activities: Array<string>;
  description: string;
}
