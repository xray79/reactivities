import {Button, Header, Segment} from "semantic-ui-react";
import {Activity} from "../../../app/models/activity.ts";
import {useEffect, useState} from "react";
import {useStore} from "../../../app/stores/store.ts";
import {observer} from "mobx-react-lite";
import {Link, useNavigate, useParams} from "react-router-dom";
import LoadingIndicator from "../../../app/layout/LoadingIndicator.tsx";
import {Formik, Form} from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput.tsx";
import MyTextArea from "../../../app/common/form/MyTextArea.tsx";
import MySelectInput from "../../../app/common/form/MySelectInput.tsx";
import {categoryOptions} from "../../../app/common/options/categoryOptions.ts";
import MyDateInput from "../../../app/common/form/MyDateInput.tsx";
import { v4 as uuid } from 'uuid';

export default observer(function ActivityForm() {
    
    const {activityStore} = useStore();
    const {selectedActivity, createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: null,
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The event title is required'),
        category: Yup.string().required('The event category is required'),
        description: Yup.string().required(),
        date: Yup.string().required('Date is required').nullable(),
        venue: Yup.string().required(),
        city: Yup.string().required(),
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity]);

    function handleFormSubmit(activity: Activity) {
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        }
        else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        }
    }
    
    if (loadingInitial) return <LoadingIndicator content={'Loading Activity...'} />

    return (
        <>
            <Segment clearing>
                <Header content={'Activity Details'} sub color={'teal'} />
                <Formik 
                    validationSchema={validationSchema} 
                    enableReinitialize 
                    initialValues={activity} 
                    onSubmit={values => handleFormSubmit(values)}>
                    {({handleSubmit, isValid, isSubmitting, dirty}) => (
                        <Form className={'ui form'} onSubmit={handleSubmit} autoComplete='off'>
                            <MyTextInput placeholder={'Title'} name={'title'} />
                            <MyTextArea placeholder='Description' name='description' rows={3}/>
                            <MySelectInput options={categoryOptions} placeholder='Category' name='category'/>
                            <MyDateInput 
                                placeholderText='Date' 
                                name='date'
                                showTimeSelect
                                timeCaption={'time'}
                                dateFormat={'MMMM d, yyyy h:mm aa'}
                            />
                            <Header content={'Activity Details'} sub color={'teal'} />
                            <MyTextInput placeholder='City' name='city'/>
                            <MyTextInput placeholder='Venue' name='venue'/>
                            <Button 
                                disabled={isSubmitting || !isValid || !dirty}
                                loading={loading} 
                                floated='right' 
                                positive 
                                type='submit' 
                                content='Submit'
                            />
                            <Button as={Link} to={'activities'} floated='right' type='button' content='Cancel'/>
                        </Form>
                    )}
                </Formik>
            </Segment>
        </>
    );
})