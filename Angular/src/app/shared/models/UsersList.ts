import { User } from '../models/User';

export class UsersList{
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    data:[User];
}