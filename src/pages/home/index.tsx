import axios from '../../services/axios';
import { useEffect, useState } from 'react';
import { Post } from '../../components/post';
import { IPost } from '../../types/PortfolioPost';

export const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/post.json');
            setPosts(response.data.posts);
        }
        getData();
    }, []);

    const renderPosts = () => {
        return posts.map((post: IPost, index) => (
            <a href={post.link} key={index} target="_blank">
                <Post
                    name={post.name}
                    describe={post.describe}
                    url={post.url_photo}
                    categories={post.categories}
                />
            </a>
        ));
    };

    return (
        <>
            <section id="home" className="container-section background-color-3">
                <article className="container-content home-content">
                    <h1>
                        Olá, meu nome é <span>Samuel</span>.
                    </h1>
                </article>
            </section>
            <section id="posts" className="container-section background-white">
                <article className="container-content post-content">
                <h2>Portfólio</h2>
                    <div id="posts-gallery">{renderPosts()}</div>
                </article>
            </section>
        </>
    );
};
