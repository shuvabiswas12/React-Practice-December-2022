import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const MuiGrid = () => {
    return (
        // In the grid system, it is using flexbox by default.
        // There are one of parent which is 'container' and
        // the container has children which are 'item'.
        <React.Fragment>
            <hr />
            <p> Grid:</p>
            <hr />
            <Box p={2}>
                <Grid container spacing={2} sx={{ backgroundColor: "black" }} p={2}>
                    <Grid item md="auto" xs={12}>
                        <Box sx={{ backgroundColor: "pink" }} height="150px">
                            Box 1
                        </Box>
                    </Grid>
                    <Grid item md xs={12}>
                        <Box sx={{ backgroundColor: "yellow" }} height="150px">
                            Box 2
                        </Box>
                    </Grid>
                    <Grid item md="auto" xs={12}>
                        <Box sx={{ backgroundColor: "blue" }} height="150px">
                            Box 3
                        </Box>
                    </Grid>
                    <Grid item md xs={12}>
                        <Box sx={{ backgroundColor: "orange" }} height="150px">
                            Box 4
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default MuiGrid;
