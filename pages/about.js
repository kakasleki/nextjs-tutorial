import {Divider, Header, List} from "semantic-ui-react";

const About = () => {
    return (
        <>
            <div>
                <Header as="h3" style={{paddingTop: 40}} color="teal">
                    회사소개
                </Header>
                <Divider />
                <List>
                    <List.Item>
                        <List.Icon name="users" />
                        <List.Content>채움씨앤아이</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="marker" />
                        <List.Content>Seoul</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="email" />
                        <List.Content>
                            <a href="mailto:kakasleki@cucon.co.kr">kakasleki@cucon.co.kr</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="linkify" />
                        <List.Content>
                            <a href="http://cucon.kr">http://cucon.kr</a>
                        </List.Content>
                    </List.Item>
                </List>
                <Header as="h3" style={{paddingTop:40}} color="teal">
                    문의사항
                </Header>
                <Divider />
            </div>
        </>
    )
}

export default About;