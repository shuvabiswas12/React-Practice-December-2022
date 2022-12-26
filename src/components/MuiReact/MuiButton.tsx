import * as React from "react";
import { Stack, Button, ButtonGroup, IconButton } from "@mui/material";
import { Delete, Send } from "@mui/icons-material";

const MuiButton = () => {
    return (
        <React.Fragment>
            <hr />
            <p>Button: </p>
            <hr />

            <Stack spacing={3} direction="column">
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text Button</Button>
                    <Button variant="contained">Contained Button</Button>
                    <Button variant="outlined">Outlined Button</Button>
                    <Button href="https://google.com" target="_blank">
                        Google
                    </Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <Button color="error">Error</Button>
                    <Button color="info">Info</Button>
                    <Button color="success">Success</Button>
                    <Button color="warning">Warning</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button color="primary" variant="contained">
                        Primary
                    </Button>
                    <Button color="secondary" variant="contained">
                        Secondary
                    </Button>
                    <Button color="error" variant="contained">
                        Error
                    </Button>
                    <Button color="info" variant="contained">
                        Info
                    </Button>
                    {/* Button with elevation off */}
                    <Button color="success" variant="contained" disableElevation>
                        Success | Elevation off
                    </Button>
                    {/* off ripple effect */}
                    <Button color="warning" variant="contained" disableRipple>
                        Warning | Ripple effect off
                    </Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button color="primary" variant="outlined">
                        Primary
                    </Button>
                    <Button color="secondary" variant="outlined">
                        Secondary
                    </Button>
                    <Button color="error" variant="outlined">
                        Error
                    </Button>
                    <Button color="info" variant="outlined">
                        Info
                    </Button>
                    <Button color="success" variant="outlined">
                        Success
                    </Button>
                    <Button color="warning" variant="outlined">
                        Warning
                    </Button>
                </Stack>

                {/* Button group */}
                <Stack display="inline-block">
                    <ButtonGroup color="secondary" variant="contained">
                        <Button>Button 1</Button>
                        <Button>Button 2</Button>
                        <Button>Button 3</Button>
                    </ButtonGroup>
                </Stack>

                {/* Button sizes */}

                <Stack direction="row" spacing={2}>
                    <Button size="small" variant="contained">
                        Small
                    </Button>
                    <Button size="medium" variant="contained">
                        Medium
                    </Button>
                    <Button size="large" variant="contained">
                        Large
                    </Button>
                </Stack>

                {/* Icon Button with text */}
                <Stack spacing={2} direction="row">
                    <Button color="success" variant="contained" endIcon={<Delete />}>
                        Delete
                    </Button>
                    <Button variant="contained" startIcon={<Send />}>
                        Send
                    </Button>
                    {/* Icon button without text */}
                    <IconButton aria-label="delete">
                        <Delete />
                    </IconButton>
                    <IconButton area-aria-label="send">
                        <Send />
                    </IconButton>
                </Stack>

                {/* for extra spaces */}
                <Stack spacing={10}></Stack>
            </Stack>
        </React.Fragment>
    );
};

export default MuiButton;
