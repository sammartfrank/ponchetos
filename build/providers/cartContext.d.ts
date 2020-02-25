import React from 'react';
import { Color, Size } from '../components/Item/MemoItem';
export declare type Item = {
    count: number;
    id: string;
    name: string;
    color: Color;
    size: Size;
    url?: string;
    price: number;
};
interface IState {
    cart: Item[];
    cartCount: number;
    addNew?: (product: any) => void;
    removePd?: (index: number) => void;
    getSubTotal?: () => void;
    subtotal?: number;
}
declare const cartContext: React.Context<IState>;
export default cartContext;
//# sourceMappingURL=cartContext.d.ts.map