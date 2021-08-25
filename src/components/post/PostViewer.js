import React from "react";
import styled from "styled-components";

const PostViewerBlock = styled.div`
    margin-top: 4rem;
`;

const PostHead = styled.div`
    border-bottom: 1px solid #a5b1c2;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;

const SubInfo = styled.div`
    margin-top: 1rem;
    color: #4b6584;

    span + span::before {
        color: #d1d8e0;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const Tags = styled.div`
    margin-top: 0.5rem;
    .tag {
        display: inline-block;
        color: #fed330;
        text-decoration: none;
        margin-right: 0.5rem;
        &:hover {
            color: #f7b731;
        }
    }
`;

const PostContent = styled.div`
    font-size: 1.125rem;
    color: #778ca3;
`;

const PostViewer = ({ post, error, loading }) => {
    if (error) {
        if (error.response && error.response.status === 404) {
            return <PostViewerBlock>This is not existing post.</PostViewerBlock>
        }
        return <PostViewerBlock>There is Error!</PostViewerBlock>
    }

    if (loading || !post) {
        return null;
    }

    const { title, body, user, publishedDate, tags } = post;

    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>
                <SubInfo>
                    <span><b>{user.username}</b></span>
                    <span>{new Date(publishedDate).toLocaleDateString()}</span>
                </SubInfo>
                <Tags>
                    {tags.map(tag => (
                        <div className="tag">#{tag}</div>
                    ))}
                </Tags>
            </PostHead>
            <PostContent dangerouslySetInnerHTML={{ __html: body}} />
        </PostViewerBlock>
    )
};

export default PostViewer;