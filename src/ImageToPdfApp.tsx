import React from "react";
import { PdfConversion } from "./components/ImageToPdf/PdfConversion";
import Navbar from "./components/Navbar";

export const ImageToPdfApp = () => {
    return (
        <React.Fragment>
            <Navbar brandName="ImageToPdf" notificationsValue={0} />
            <PdfConversion />
        </React.Fragment>
    );
};
