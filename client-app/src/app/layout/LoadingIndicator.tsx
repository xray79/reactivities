import {Dimmer, Loader} from "semantic-ui-react";

interface LoadingIndicatorProps {
    inverted?: boolean,
    content?: string,
}

export default function LoadingIndicator({inverted = true, content = 'Loading...'}: LoadingIndicatorProps) {
    return (
        <>
            <Dimmer active={true} inverted={inverted}>
                <Loader content={content}/>
            </Dimmer>
        </>
    );
}