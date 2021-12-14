import axios from "axios";
import Item from "../../src/component/Item";
import Head from "next/head";
import {useRouter} from "next/router";
import {Loader} from "semantic-ui-react";

const Post = ({item, name}) => {
    const router = useRouter();

    if(router.isFallback) {
        return (
            <>
                <div style={{ padding: "100px 0" }}>
                    <Loader active inline="centered">
                        Loading
                    </Loader>
                </div>
            </>
        );
    }

    return (
        <>
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name="description" content={item.description} />
                    </Head>
                    {name} 환경입니다.
                    <Item item={item} />
                </>
            )}
        </>
    );
};

export default Post;

export const getStaticPaths = async () => {
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        /*paths: [
            {params: {id: '740'}},
            {params: {id: '730'}},
            {params: {id: '729'}},
        ],*/
        paths : data.slice(0, 9).map(item => ({
            params : {
                id : item.id.toString()
            }
        })),
        fallback: true
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item : data,
            name : process.env.name
        },
    };
};