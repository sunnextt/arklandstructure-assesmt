import React, { useEffect } from 'react';
import Layout from '../layout';
import newsService from '../services/newsService';
import NewsPage from './Newspage';
import { Divivder, Header } from './styled';

const api_key = '7d77d597bea349d69f0c5de546301116';

const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState([]);

    useEffect(() => {
        newsService
            .getAllNews(api_key)
            .then(({ articles }) => {
                if (articles) {
                    setData(articles);
                }
            })
            .catch((error) => {
                if (error) {
                    console.log(error.message);
                    setError(
                        'Requests from the browser are not allowed on the Developer plan, except from localhost.'
                    );
                }
            });
    }, []);
    return (
        <Layout>
            <Header>Latest news</Header>
            <Divivder />
            <div
                style={{
                    color: 'red',
                    textAlign: 'center',
                    padding: '10px',
                    fontSize: '16px'
                }}
            >
                {error && error}
            </div>
            {data.length && <NewsPage data={data} />}
        </Layout>
    );
};

export default HomePage;
