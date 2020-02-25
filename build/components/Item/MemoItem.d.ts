import { FC } from 'react';
export declare enum Size {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}
export declare enum Color {
    AMARILLO = "AMARILLO",
    FUCSIA = "FUCSIA",
    VIOLETA = "VIOLETA",
    VERDEFLUOR = "VERDEFLUOR",
    AZULMARINO = "AZULMARINO",
    NEGRO = "NEGRO",
    CELESTE = "CELESTE",
    BORDO = "BORDO",
    ROJO = "ROJO",
    NARANJA = "NARANJA"
}
interface Props {
    ponchoName?: string;
    ponchoPrice?: number;
    ponchoColor?: Color;
    ponchoSize?: Size;
    ponchoImage?: string;
    ponchoDescription?: string;
}
declare const MemoItem: FC<Props>;
export default MemoItem;
//# sourceMappingURL=MemoItem.d.ts.map