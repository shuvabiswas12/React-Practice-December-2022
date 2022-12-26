import { Drafts, ExpandLess, ExpandMore, Inbox, StarBorder } from "@mui/icons-material";
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import * as React from "react";

const MuiList = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleClick = () => setOpen(!open);

    return (
        <React.Fragment>
            <hr />
            <p>Mui List:-</p>
            <hr />
            <Box width={350} border="2px solid black" marginLeft={2}>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="List - 1 Primary Text"
                            secondary="List - 1 Secondary Text."
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="List - 2 Primary Text"
                            secondary="List - 2 Secondary Text."
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton>
                            <ListItemText
                                primary="List Item Button - Primary text"
                                secondary="List Item Button - Secondary text"
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <Drafts />
                            </ListItemIcon>
                            <ListItemText primary="Icon Button Primary Text" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItemButton component="a" href="https://www.google.com" target="_blank">
                        <ListItemText primary="Google" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="Expandable List" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </React.Fragment>
    );
};

export default MuiList;
