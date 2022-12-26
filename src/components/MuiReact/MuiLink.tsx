import { Link } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";

const MuiLink = () => {
    return (
        <React.Fragment>
            <hr />
            <p>Mui Link:-</p>
            <hr />
            <Stack spacing={2} direction="row">
                <Link href="https://www.google.com/" target="_blank">
                    {" "}
                    Google{" "}
                </Link>
                <Link href="https://www.facebook.com/" target="_blank" underline="hover">
                    {" "}
                    Facebook{" "}
                </Link>
                <Link href="https://www.twitter.com/" target="_blank" underline="none">
                    {" "}
                    Twitter{" "}
                </Link>
            </Stack>
        </React.Fragment>
    );
};

export default MuiLink;
