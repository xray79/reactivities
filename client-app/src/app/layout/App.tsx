import {useEffect} from "react";
import {Container} from "semantic-ui-react";
import Navbar from "./Navbar.tsx";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";
import LoadingIndicator from "./LoadingIndicator.tsx";
import {useStore} from "../stores/store.ts";
import { observer } from "mobx-react-lite";


function App() {
    const {activityStore} = useStore();
    
    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore])
    
    if (activityStore.loadingInitial) return <LoadingIndicator inverted={true} content={'Loading...'} />
    
  return (
    <>
        <Navbar />
        <Container style={{marginTop: '7em'}}>
            <ActivityDashboard />
        </Container>
    </>
  )
}

export default observer(App);
