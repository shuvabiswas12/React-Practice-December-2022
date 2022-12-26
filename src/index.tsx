import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// adding bootstrap to this project.
import "bootstrap/dist/css/bootstrap.css";
import TruckApp from "./TruckApp";
import { RouterApp } from "./RouterApp";
import FormsApp from "./FormsApp";
import { ImageToPdfApp } from "./ImageToPdfApp";
import MuiTypography from "./components/MuiReact/MuiTypography";
import MuiButton from "./components/MuiReact/MuiButton";
import MuiTextfield from "./components/MuiReact/MuiTextfield";
import MuiBox from "./components/MuiReact/MuiBox";
import MuiStack from "./components/MuiReact/MuiStack";
import MuiGrid from "./components/MuiReact/MuiGrid";
import MuiPaper from "./components/MuiReact/MuiPaper";
import MuiCard from "./components/MuiReact/MuiCard";
import MuiNavbar from "./components/MuiReact/MuiNavbar";
import MuiDialog from "./components/MuiReact/MuiDialog";
import MuiAlert from "./components/MuiReact/MuiAlert";
import MuiDateTime from "./components/MuiReact/MuiDateTime";
import MuiTabs from "./components/MuiReact/MuiTabs";
import MuiList from "./components/MuiReact/MuiList";
import MuiLink from "./components/MuiReact/MuiLink";
import MuiResponsiveness from "./components/MuiReact/MuiResponsiveness";

// This is a virtual dom. This type of syntax is named as jsx.
// const element = <h1>Hello React using typescript!</h1>;

// Transferring virtual dom to real dom
// const root = createRoot(document.getElementById('root')!);
// root.render(element);

// rendering other components
const root = createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
        {/* <TruckApp /> */}
        {/* <RouterApp /> */}
        {/* <FormsApp /> */}
        {/* <ImageToPdfApp /> */}

        {/* React Material UI */}
        <MuiTypography />
        <MuiButton />
        <MuiTextfield />
        <MuiBox />
        <MuiStack />
        <MuiGrid />
        <MuiPaper />
        <MuiCard />
        <MuiNavbar />
        <MuiDialog />
        <MuiAlert />
        <MuiDateTime />
        <MuiTabs />
        <MuiList />
        <MuiLink />
        <MuiResponsiveness />

        <div className="mb-5"></div>
    </BrowserRouter>
);
