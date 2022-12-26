import { InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";

const MuiTextfield = () => {
    const [values, setValues] = React.useState("");

    return (
        <React.Fragment>
            <hr />
            <p>Textfield: </p>
            <hr />
            <Stack spacing={2} direction="column">
                <Stack spacing={2} direction="row">
                    <TextField label="Name" type="text" />
                    <TextField
                        label="Email"
                        size="small"
                        color="secondary"
                        variant="filled"
                        type="email"
                    />
                    <TextField label="Address 1" color="info" variant="standard" type="text" />
                    <TextField
                        label="Address 2"
                        color="warning"
                        variant="outlined"
                        type="text"
                        required
                        helperText="Do not share your password with anyone."
                    />
                    <TextField
                        label="Disabled Textfield"
                        color="warning"
                        variant="outlined"
                        type="text"
                        disabled
                    />
                    <TextField
                        label="Readonly Textfield"
                        color="success"
                        variant="filled"
                        type="text"
                        inputProps={{ readOnly: true }}
                    />
                </Stack>
                {/* Input Adorment */}
                <Stack spacing={2} direction="row">
                    <TextField
                        label="Amount"
                        color="warning"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Weight"
                        color="warning"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
                        }}
                    />
                </Stack>

                {/* Error showing */}
                <Stack spacing={2} direction="row">
                    <TextField
                        label="Something"
                        value={values}
                        onChange={(e) => setValues(e.target.value)}
                        error={!values}
                        helperText={!values ? "Required" : "This is a sample for showing error."}
                    />
                </Stack>
            </Stack>
        </React.Fragment>
    );
};

export default MuiTextfield;
