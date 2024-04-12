import {IPage} from "~/types/TableTypes";

export interface IValueConverting {
    id: number,
    displayName: string,
    fromApplicationId: number,
    fromTypeId: string,
    toApplicationId: string,
    toTypeId: string,
    convertingMap: Record<string, string>
}

export interface IValueConvertingPage extends IPage<IValueConverting> {}