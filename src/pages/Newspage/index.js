import React, { useMemo, useState } from 'react';
import { Row, Col } from 'antd';
import { NewsCard } from '../../components/card';
import Pagination from '../../components/pagination';
import NewsPageDiv from './styled';

let PageSize = 6;

const NewsPage = ({ data }) => {
    console.log(data.length);

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    return (
        <NewsPageDiv>
            <Row gutter={[24, 24]}>
                {currentTableData.map(
                    ({ description, publishedAt, url, title, urlToImage }) => {
                        return (
                            <Col
                                xs={24}
                                sm={24}
                                md={12}
                                lg={8}
                                key={urlToImage}
                            >
                                <NewsCard
                                    url={url}
                                    content={description}
                                    header={title}
                                    time={publishedAt}
                                />
                            </Col>
                        );
                    }
                )}
            </Row>
            <div className="pagination_div">
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={data.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </NewsPageDiv>
    );
};

export default NewsPage;
