import {Button, Card, CardContent, CardDescription, CardHeader, CardMeta} from "semantic-ui-react";
import {Activity} from "../../../app/models/activity.ts";
import { Image } from 'semantic-ui-react';

interface ActivityDetailsProps {
    activity: Activity,
    cancelSelectActivity: () => void,
    openForm: (id: string) => void,
    
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: ActivityDetailsProps) {
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
                    <Button onClick={cancelSelectActivity} basic={true} color={'grey'} content={'Cancel'}></Button>
                </Button.Group>
            </CardContent>
        </Card>
    );
}