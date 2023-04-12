import { ParseDataType } from "./parse.type";


export interface IParser{
    loadData: () => Promise<ParseDataType>
}