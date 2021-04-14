import { Fragment, h } from "preact";
import { LayoutType } from "@components/layout/index";

const Default: LayoutType = ({ route: string, children }) => {
    return <Fragment>{children}</Fragment>;
};

export default Default;
