import {Container} from "semantic-ui-react";
import {Link} from "react-router-dom";

interface HomePageProps {
    
}

export default function HomePage({}: HomePageProps) {
    return (
        <>
            <Container style={{marginTop: '7em'}} >
                <h1>home page</h1>
                <h3>Go to <Link to={'/activities'}>Activities</Link></h3>
            </Container>
        </>
    );
}