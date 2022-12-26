import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Divider,
    Typography,
} from "@mui/material";
import * as React from "react";

const MuiCard = () => {
    return (
        <React.Fragment>
            <hr />
            <p> Card:</p>
            <hr />
            <Container>
                <Box width={1 / 3}>
                    <Card>
                        <CardHeader title="Card Header" />
                        <CardMedia
                            component="img"
                            image="sample.jpg"
                            sx={{
                                "&:hover": {
                                    transform: "scale(1.1)",
                                },
                            }}
                        />
                        <CardContent>
                            <Typography variant="h4" component="h2" fontSize={20} mb={2}>
                                Unsplash Random Image.
                            </Typography>

                            <Typography variant="subtitle1" component="div">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                nobis natus aperiam, error corporis soluta iusto ullam magni
                                recusandae in.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Button>Learn more</Button>
                            <Button>Order</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default MuiCard;
