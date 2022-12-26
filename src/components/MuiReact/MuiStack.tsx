import { Box, Divider, Stack } from "@mui/material";
import * as React from "react";

const MuiStack = () => {
    return (
        <React.Fragment>
            <hr />
            Stack:
            <hr />
            {/* Stack is working only one dimentional. Either horizontal or vertical. */}
            <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
            >
                <Box
                    width="150px"
                    height="150px"
                    bgcolor="primary.main"
                    sx={{
                        "&:hover": {
                            backgroundColor: "primary.light",
                        },
                    }}
                ></Box>
                <Box
                    width="150px"
                    height="150px"
                    bgcolor="secondary.main"
                    sx={{
                        "&:hover": {
                            backgroundColor: "secondary.light",
                        },
                    }}
                ></Box>
                <Box width={1}>
                    <Divider orientation="horizontal">This is the divider</Divider>
                </Box>
            </Stack>
        </React.Fragment>
    );
};

export default MuiStack;
