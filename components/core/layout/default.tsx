import React from "react";
import { LayoutType } from "@components/core/layout/index";

const Default: LayoutType = ({ route, children }) => {

    return (
        <>
            {children}
        </>
    );
};

export default Default;
