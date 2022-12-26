import { Box } from "@mui/material";
import * as React from "react";

const MuiBox = () => {
    return (
        <React.Fragment>
            <br />
            <hr />
            <p>Box Component (default tag is 'div'):</p>
            <hr />
            <Box
                component="section"
                mb="10px"
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    padding: "10px",
                    width: "150px",
                    height: "150px",
                    "&:hover": {
                        backgroundColor: "primary.light",
                    },
                }}
            >
                Box Component
            </Box>

            <Box
                display="flex"
                width={1 / 3}
                height="150px"
                padding="10px"
                bgcolor="secondary.main"
                color="white"
                sx={{
                    "&:hover": { backgroundColor: "secondary.light" },
                }}
            >
                Flex Box
            </Box>
        </React.Fragment>
    );
};

export default MuiBox;
