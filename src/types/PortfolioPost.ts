export interface IPropsPost {
    url: string;
    name: string;
    describe: string;
    categories: string[];
}

export interface IPost {
    name: string;
    url_photo: string;
    describe: string;
    categories: string[];
    link: string;
}

export interface IPortfolioPost {
    posts: IPost[];
}
