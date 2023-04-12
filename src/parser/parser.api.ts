import axios from "axios";
import { IParser } from "./parser.interface";

export class ApiParser implements IParser{
    
    public async loadData(){
        const response = await axios.get("https://randomuser.me/api/")
        return response.data
    }
}