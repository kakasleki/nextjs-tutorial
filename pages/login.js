import {Button, Form} from "semantic-ui-react";
import axios from "axios";
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter();

    const login = () => {
        axios.post("/api/login").then(res => {
                if(res.status === 200) {
                    router.push("/admin");
                }
            });
    };

    return (
        <>
            <div style={{ padding : "100px 0", textAlign: "center"}}>
                <Form>
                    <Form.Field inline>
                        <input placeholder="ID" />
                    </Form.Field>
                    <Form.Field inline>
                        <input type="password" placeholder="Password" />
                    </Form.Field>
                    <Button color="blue" onClick={login}>Login</Button>
                </Form>
            </div>
        </>
    );
};

export default Login;