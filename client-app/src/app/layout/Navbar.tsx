import {Button, Container, Menu} from "semantic-ui-react";

interface Props {
    openForm: (id? : string) => void,
}

export default function Navbar({openForm}: Props) {
    return (
        <Menu inverted={true} fixed={"top"}>
            <Container>
                <Menu.Item header={true}>
                    <img src="assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivites
                </Menu.Item>
                <Menu.Item name={'Activities'}></Menu.Item>
                <Menu.Item>
                    <Button onClick={openForm} positive={true} content={'Create Activity'}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}