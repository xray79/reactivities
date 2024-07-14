import {User, UserFormValues} from "../models/user.ts";
import {makeAutoObservable} from "mobx";
import Agent from "../api/agent.ts";

export default class UserStore {
    user:  User | null = null
    
    constructor() {
        makeAutoObservable(this);
    }
    
    get IsLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        const user = await Agent.Account.login(creds);
        console.log(user);
    }
}