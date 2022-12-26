import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import * as React from "react";

const MuiDialog = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleDialog = () => {
        setOpen(true);
    };

    const handleOnClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <hr />
            <p>Dialog:</p> <hr />
            <Button onClick={handleDialog}>Open Dialog</Button>
            <Dialog
                open={open}
                area-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle id="dialog-title">This is a simple Dialog.</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="dialog-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione unde
                        officia sit quos aliquid in illo animi iure recusandae obcaecati, esse
                        perspiciatis ut earum sed?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOnClose} color="inherit">
                        Save
                    </Button>
                    <Button onClick={handleOnClose} color="inherit">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default MuiDialog;
