import {Header, Menu} from "semantic-ui-react";
import {Calendar} from "react-calendar";

interface ActivityFiltersProps {
    
}

export default function ActivityFilters({}: ActivityFiltersProps) {
    return (
        <>
            <Menu vertical size={'large'} style={{width: '100%'}}>
                <Header icon={'filter'} attached color={'teal'} content={'Filters'} />
                <Menu.Item content={'All Activities'} />
                <Menu.Item content={"I'm Going"} />
                <Menu.Item content={"I'm Hosting"} />
            </Menu>
            <Header />
            <Calendar />
        </>
    );
}