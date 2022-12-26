import { CheckCircleRounded } from "@mui/icons-material";
import { Alert, AlertTitle } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";

const MuiAlert = () => {
    return (
        <React.Fragment>
            <hr />
            <p>Alert:</p> <hr />
            <Stack spacing={2} direction="column" mb={5}>
                {/* Alert title if you want to use. */}
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert.
                </Alert>
                <Alert severity="info">This is an info alert.</Alert>
                <Alert severity="success">This is an success alert.</Alert>
                <Alert severity="warning">This is an warning alert.</Alert>
            </Stack>
            <Stack spacing={2} direction="column" mb={5}>
                {/* Way to closing alert using 'onClose'*/}
                <Alert variant="filled" severity="error" onClose={() => alert("Closing alert.")}>
                    This is an error alert.
                </Alert>
                <Alert variant="filled" severity="info">
                    This is an info alert.
                </Alert>
                {/* Way to change alert icon. */}
                <Alert
                    variant="filled"
                    severity="success"
                    icon={<CheckCircleRounded fontSize="large" />}
                >
                    This is an success alert.
                </Alert>
                <Alert variant="filled" severity="warning">
                    This is an warning alert.
                </Alert>
            </Stack>
            <Stack spacing={2} direction="column" mb={5}>
                <Alert variant="outlined" severity="error">
                    This is an error alert.
                </Alert>
                <Alert variant="outlined" severity="info">
                    This is an info alert.
                </Alert>
                <Alert variant="outlined" severity="success">
                    This is an success alert.
                </Alert>
                <Alert variant="outlined" severity="warning">
                    This is an warning alert.
                </Alert>
            </Stack>
        </React.Fragment>
    );
};

export default MuiAlert;
