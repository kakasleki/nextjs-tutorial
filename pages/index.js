import Head from "next/head";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import {Divider, Header} from "semantic-ui-react";

export default function Home({ list }) {
    return (
        <>
            <div>
                <Head>
                    <title>HOME | 채움씨앤아이</title>
                    <meta name="description" content="채움씨앤아이 홈입니다."/>
                </Head>

                <Header as="h3" style={{paddingTop: 40}}>베스트 상품</Header>
                <Divider />
                <ItemList list={list.slice(0, 9)} />

                <Header as="h3" style={{paddingTop: 40}}>신상품</Header>
                <Divider />
                <ItemList list={list.slice(9)} />
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            list: data
        },
    };
};
