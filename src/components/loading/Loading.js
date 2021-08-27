import {LoadingContainer, LoadingContent, LoadingTitle} from "../../styled-components/elements/loading/loading";

/**
 * @returns {JSX.Element} - loading screen
 */
export const Loading = () => {
    return <LoadingContainer>
        <LoadingTitle>Loading...</LoadingTitle>
        <LoadingContent>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
        </LoadingContent>
    </LoadingContainer>
};