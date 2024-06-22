import {Button, Card, CardContent, CardDescription, CardHeader, CardMeta} from "semantic-ui-react";
import { Image } from 'semantic-ui-react';
import {useStore} from "../../../app/stores/store.ts";
import LoadingIndicator from "../../../app/layout/LoadingIndicator.tsx";

export default function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;
    
    if (!activity) return <LoadingIndicator />;
    
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
                    <Button onClick={() => {openForm(activity.id)}} basic={true} color={'blue'} content={'Edit'}></Button>
                    <Button onClick={cancelSelectedActivity} basic={true} color={'grey'} content={'Cancel'}></Button>
                </Button.Group>
            </CardContent>
        </Card>
    );
}