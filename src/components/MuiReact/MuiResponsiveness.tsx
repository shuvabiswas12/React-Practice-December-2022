import { Box, Stack } from "@mui/material";
import * as React from "react";

const MuiResponsiveness = () => {
    return (
        <React.Fragment>
            <hr />
            <p>Responsive way:-</p>
            <hr />
            <Stack
                sx={{ justifyContent: "center" }}
                // These are the responsive property. There are 5 responsive property out there.
                spacing={{ xs: 1, sm: 3, md: 4, lg: 6, xl: 10 }}
                direction={{ xs: "column", sm: "column", md: "row" }}
            >
                <Box bgcolor="greenyellow" width={{ xs: "100%", sm: "100%", md: "30%" }} p={5}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis
                    voluptatem assumenda ratione tenetur architecto exercitationem ad ipsa ea
                    dolorem.
                </Box>
                <Box bgcolor="green" width={{ xs: "100%", sm: "100%", md: "30%" }} p={5}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis
                    voluptatem assumenda ratione tenetur architecto exercitationem ad ipsa ea
                    dolorem.
                </Box>
                <Box bgcolor="red" width={{ xs: "100%", sm: "100%", md: "30%" }} p={5}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis
                    voluptatem assumenda ratione tenetur architecto exercitationem ad ipsa ea
                    dolorem.
                </Box>
            </Stack>
        </React.Fragment>
    );
};

export default MuiResponsiveness;
