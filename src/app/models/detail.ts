import { Customer } from './customer';
import { Product } from './product';

export interface Detail {
    firstName?: string,
    lastName?: string,
    productId?: Product,
    email?: string,
    tel?: string
}
