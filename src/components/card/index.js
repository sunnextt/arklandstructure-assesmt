import { Card } from 'antd';
import styled from 'styled-components';
import { FaRegStar } from 'react-icons/fa';
import LinkButton from '../Button';
import truncateSentence from '../../utils/truncate';
import { MomentTimeFromNow } from '../../utils/formatTime';

const Bookmark = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h6 {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #7d7d81;
    }

    .bs_icon {
        margin-right: 5px;
    }
`;

const Time = styled.h6`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7d7d81;
`;

const ContentDiv = styled.div`
    margin-bottom: 2rem;
    height: 8.5em;
`;
const Bdiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NewsCard = ({ url, header, content, time }) => {
    return (
        <Card title={header} bordered={false}>
            <ContentDiv>
                <p>{truncateSentence(content, 100)}</p>
            </ContentDiv>
            <Bdiv>
                <LinkButton name="read more" url={url} />
                <Bookmark>
                    <FaRegStar size="16" className="bs_icon" />
                    <h6>Add to bookmarks</h6>
                </Bookmark>
                <Time>{MomentTimeFromNow(time)}</Time>
            </Bdiv>
        </Card>
    );
};
