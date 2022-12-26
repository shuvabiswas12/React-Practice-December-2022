import { Box, Stack, TextField } from "@mui/material";
import {
    DateTimePicker,
    DesktopDatePicker,
    LocalizationProvider,
    MobileDatePicker,
} from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import * as React from "react";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro";

const MuiDateTime = () => {
    const [date, setDate] = React.useState<Date | null>(null);
    const [time, setTime] = React.useState<Date | null>(null);
    const [datetime, setDateTime] = React.useState<Date | null>(null);
    const [datetimeRange, setDateTimeRange] = React.useState<DateRange<any>>([null, null]);

    return (
        <React.Fragment>
            <hr />
            <p>Date and Time: (Native Date and Time)</p> <hr />
            <TextField
                label="Native Date"
                type="date"
                sx={{ width: 250 }}
                defaultValue=""
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                label="Native Time"
                type="time"
                sx={{ width: 250 }}
                defaultValue="09:42"
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 300 }}
            />
            <hr />
            <p>Date and Time: (Material Date and Time)</p>
            <hr />
            {/* we have to use LocalizationProvider in order to use Material Date and Time picker. */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack direction="row" spacing={2}>
                    <DatePicker
                        label="Material Date Field"
                        onChange={(value) => setDate(value)}
                        value={date}
                        renderInput={(props) => <TextField {...props} />}
                    />
                    <TimePicker
                        label="Material Time Field"
                        onChange={(value) => setTime(value)}
                        value={time}
                        renderInput={(props) => <TextField {...props} />}
                    />
                    <DesktopDatePicker
                        onChange={(value) => setDate(value)}
                        renderInput={(props) => <TextField {...props} />}
                        label="Desktop Date Picker"
                        value={date}
                    />
                    <MobileDatePicker
                        onChange={(value) => setDate(value)}
                        renderInput={(props) => <TextField {...props} />}
                        label="Mobile Date Picker"
                        value={date}
                    />

                    <DateTimePicker
                        onChange={(value) => setDateTime(value)}
                        renderInput={(props) => <TextField {...props} />}
                        label="Date Time Picker"
                        value={datetime}
                    />
                </Stack>
                <hr />
                <p>Date and Time: (Material Date and Time)</p>
                <hr />
                <Stack direction="row" spacing={2}>
                    <DateRangePicker
                        onChange={(value) => setDateTimeRange(value)}
                        renderInput={(startProps, endProps) => {
                            return (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}>To</Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                            );
                        }}
                        value={datetimeRange}
                    />
                </Stack>
            </LocalizationProvider>
        </React.Fragment>
    );
};

export default MuiDateTime;
