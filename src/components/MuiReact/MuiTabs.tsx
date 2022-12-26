import { Tab, Tabs, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import * as React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...others } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...others}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const MuiTabs = () => {
    const [currentTabs, setCurrentTabs] = React.useState<number>(0);
    const handleCurrentTab = (event: React.SyntheticEvent, value: number) => {
        setCurrentTabs(value);
        console.log(currentTabs);
    };
    return (
        <React.Fragment>
            <hr />
            <p>Tabs:-</p>
            <hr />
            <Stack spacing={2} direction="column">
                <Tabs
                    onChange={handleCurrentTab}
                    value={currentTabs}
                    aria-label="basic tabs example"
                >
                    <Tab label="Tab 1" />
                    <Tab label="Tab 2" />
                    <Tab label="Tab 3" />
                </Tabs>
                <TabPanel index={0} value={currentTabs}>
                    First Tabs Content!
                </TabPanel>
                <TabPanel index={1} value={currentTabs}>
                    Second Tabs Content!
                </TabPanel>
                <TabPanel index={2} value={currentTabs}>
                    Third Tabs Content!
                </TabPanel>
            </Stack>
        </React.Fragment>
    );
};

export default MuiTabs;
