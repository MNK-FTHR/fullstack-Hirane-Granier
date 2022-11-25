import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckBoxComponent} from "my-lib-ui";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeaderComponent";
import TopNavComponent from "../components/TopNavComponent"
const Home = () => {
    return (
        <div>
            <HeadComponent />
            <TopNavComponent />
            {/* <ButtonComponent text="HAHA" /> */}
            <InputTextComponent />
            <RadioButtonComponent />
            <SelectComponent />
            <CheckBoxComponent />
            <main></main>
            <FooterComponent />
        </div>
    );
};

export default Home;