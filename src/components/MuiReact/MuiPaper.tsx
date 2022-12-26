import { Box, Grid, Paper, Typography } from "@mui/material";
import { bgcolor, Container } from "@mui/system";
import * as React from "react";

const MuiPaper = () => {
    return (
        <React.Fragment>
            <hr />
            <p>Paper:</p>
            <hr />
            <Container>
                <Grid container spacing={2}>
                    <Grid item>
                        <Paper
                            sx={{
                                width: "550px",
                                height: "550px",
                                "&:hover": {
                                    backgroundColor: "secondary.light",
                                },
                            }}
                            elevation={2}
                        >
                            <Typography variant="h4">Paper 1</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            sx={{
                                width: "450px",
                                height: "450px",
                                "&:hover": {
                                    backgroundColor: "primary.light",
                                },
                            }}
                            elevation={4}
                        >
                            <Typography variant="h4">Paper 2</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default MuiPaper;
