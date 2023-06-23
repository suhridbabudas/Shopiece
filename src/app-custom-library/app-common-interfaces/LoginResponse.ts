import { User } from "./User";
import { Menu } from "./Menu";

export interface LoginResponse {
    data: User;
    menu: Array<Menu>;
    message: string;
    token: string;
}