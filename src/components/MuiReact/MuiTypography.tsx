import { Typography } from "@mui/material";
import * as React from "react";

const MuiTypography = () => {
    return (
        <React.Fragment>
            <p>Typography:</p> <hr />
            {/*  */}
            {/* h1 -> h6 */}
            <Typography variant="h1">h1 heading.</Typography>
            <Typography variant="h2">h2 heading.</Typography>
            <Typography variant="h3">h3 heading.</Typography>
            <Typography variant="h4">h4 heading.</Typography>
            {/* Can be defined any tag using component props like bellow. */}
            <Typography variant="h4" component={"h1"}>
                h4 heading. This is working as a h1 tag as I replace this tag to h1 from default
                tag.
            </Typography>
            {/* I used gutterBottom for giving some spaces after this component. */}
            <Typography variant="h5" gutterBottom>
                h5 heading. Here are some spaces after this.
            </Typography>
            <Typography variant="h6">h6 heading.</Typography>
            {/*  */}
            {/* sub title-1, sub title-2 both are similar to h6 but they have different styles.*/}
            <Typography variant="subtitle1">sub title 1</Typography>
            <Typography variant="subtitle2">sub title 2</Typography>
            {/*  */}
            {/* body1 and body2 which is similar to p tag. Both have different styles.*/}
            <Typography variant="body1">body 1</Typography>
            <Typography variant="body2">body 2</Typography>
        </React.Fragment>
    );
};

export default MuiTypography;
