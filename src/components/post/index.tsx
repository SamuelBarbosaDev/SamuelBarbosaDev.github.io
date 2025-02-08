import axios from '../../services/axios';
import { useEffect, useState } from 'react';
import { IPropsPost } from '../../types/PortfolioPost';
import { ICategories } from '../../types/PortfolioCategories';

export const Post = (props: IPropsPost) => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/category.json');
            setCategories(response.data);
        }
        getData();
    }, []);

    const renderCategory = (categories: ICategories) => {
        return props.categories.map((category, index) => (
            <div key={index} className="category">
                <img src={categories[category]} alt={category} />
            </div>
        ));
    };

    return (
        <div className="post">
            <img src={props.url} alt="zoin_company" />
            <figcaption>
                <h3>{props.name}</h3>
                <p className="description-post">{props.describe}</p>

                <div className="categories">{renderCategory(categories)}</div>
            </figcaption>
        </div>
    );
};
