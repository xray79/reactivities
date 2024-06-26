import {Button, Card, CardContent, CardDescription, CardHeader, CardMeta} from "semantic-ui-react";
import { Image } from 'semantic-ui-react';
import {useStore} from "../../../app/stores/store.ts";
import LoadingIndicator from "../../../app/layout/LoadingIndicator.tsx";
import {observer} from "mobx-react-lite";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";

export default observer(function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);
    
    if (loadingInitial || !activity) return <LoadingIndicator />;
    
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button.Group widths={'2'}>
                    <Button as={Link} to={`/manage/${activity.id}`} basic={true} color={'blue'} content={'Edit'}></Button>
                    <Button as={Link} to={'/activities'} basic={true} color={'grey'} content={'Cancel'}></Button>
                </Button.Group>
            </CardContent>
        </Card>
    );
})