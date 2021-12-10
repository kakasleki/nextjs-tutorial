import {Header} from "semantic-ui-react";
import Gnb from "./Gnb";

const Top = () => {
    return (
        <>
            <div>
                <div style={{display:'flex', paddingTop: 20}}>
                    <div style={{flex: "100px 0 0"}}>
                        <img src="/images/point.png" alt="logo" style={{display: "black", width: 80}} />
                    </div>

                    <Header as="h1">채움씨앤아이</Header>
                </div>
                <Gnb />
            </div>
        </>
    );
};

export default Top;