import {Button, Header, Icon, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

interface NotFoundProps {

}

export default function NotFound({}: NotFoundProps) {
    return (
        <>
            <Segment placeholder>
                <Header icon>
                    <Icon name={'search'} />
                        Oops - We've looked everywhere but we could not find what you are looking for!
                </Header>
                <Segment.Inline>
                    <Button as={Link} to={'/activities'}>
                        Return to activities page
                    </Button>
                </Segment.Inline>
            </Segment>
        </>
    );
}