import { CatchingPokemonRounded, KeyboardArrowDownRounded } from "@mui/icons-material";
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import * as React from "react";

const MuiNavbar = () => {
    // dropdown menu functions start
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => setAnchorEl(null);
    // dropdown menu functions end

    return (
        <React.Fragment>
            <hr />
            <p>Navbar:</p>
            <hr />
            <AppBar position="static">
                <Toolbar>
                    <Stack flexGrow={1}>
                        <Box display="flex" justifyItems="center" color="inherit">
                            <CatchingPokemonRounded
                                sx={{ marginRight: "10px", marginTop: "3px" }}
                            />
                            <Typography variant="h5">MUI Learning_APP</Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        {/* dropdown menu for feature button starts */}
                        <Button
                            onClick={handleClick}
                            color="inherit"
                            endIcon={<KeyboardArrowDownRounded />}
                        >
                            Feature
                        </Button>
                        <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>Latest Post</MenuItem>
                            <MenuItem onClick={handleClose}>Login</MenuItem>
                            <MenuItem onClick={handleClose}>Signup</MenuItem>
                        </Menu>
                        {/* dropdown menu for feature button ends */}
                        <Button color="inherit">Price</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Blog</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default MuiNavbar;
