import {createContext, useContext} from "react";
import CommonStore from "./commonStore";
import ActivityStore from "./ActivityStore.ts";
import UserStore from "./userStore.ts";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}