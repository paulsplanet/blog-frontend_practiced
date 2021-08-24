import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid #d1d8e0;
    padding-top: 2rem;

    h4 {
        color: #778ca3;
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    border: 1px solid #778ca3;
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }
    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background-color: #d1d8e0;
        color: white;
        font-weight: bold;
        &:hover {
            background-color: #a5b1c2;
        }
    }
`;

const Tag = styled.div`
    margin-right: 0.5rem;
    color: #778ca3;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

const TagItem = React.memo(({ tag, onRemove }) => <Tag onClick={onRemove}>#{tag}</Tag>);

const TagList = React.memo(({ tags, onRemove }) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
    </TagListBlock>
));

const TagBox = ({ tags, onChangeTags }) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);
    const insertTag = useCallback(
        tag => {
            if (!tag) return;
            if (localTags.includes(tag)) return;
            const nextTags = [...localTags, tag];
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );
    const onRemove = useCallback(
        tag => {
            const nextTags = localTags.filter(t => t !== tag);
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );
    const onChange = useCallback(
        e => {setInput(e.target.value);}, []
    );
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            insertTag(input.trim());
            setInput('');
        },
        [input, insertTag],
    );

    useEffect(() => {
        setLocalTags(tags);
    }, [tags]);

    return(
        <TagBoxBlock>
            <h4>Tag</h4>
            <TagForm onSubmit={onSubmit}>
                <input placeholder="write a tag here" value={input} onChange={onChange} />
                <button type="submit">ADD</button>
            </TagForm>
            <TagList tags={localTags} onRemove={onRemove} />
        </TagBoxBlock>
    );
};


export default TagBox;