import {Grid, GridColumn} from "semantic-ui-react";
import ActivityList from "./ActivityList.tsx";
import {useStore} from "../../../app/stores/store.ts";
import { observer } from "mobx-react-lite";
import {useEffect} from "react";
import LoadingIndicator from "../../../app/layout/LoadingIndicator.tsx";

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])

    if (activityStore.loadingInitial) return <LoadingIndicator inverted={true} content={'Loading...'} />

    return (
        <Grid>
            <GridColumn width={'10'}>
                <ActivityList />
            </GridColumn>
            <GridColumn width={'6'}>
                <h2>Activity filters</h2>
            </GridColumn>
        </Grid>
    )
})