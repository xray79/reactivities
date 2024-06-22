import {Button, Container, Menu} from "semantic-ui-react";
import {useStore} from "../stores/store.ts";


export default function Navbar() {
    const {activityStore} = useStore();
    return (
        <Menu inverted={true} fixed={"top"}>
            <Container>
                <Menu.Item header={true}>
                    <img src="assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivites
                </Menu.Item>
                <Menu.Item name={'Activities'}></Menu.Item>
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive={true} content={'Create Activity'}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}