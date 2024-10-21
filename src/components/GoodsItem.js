import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
    const { name, poster, price, setOrder } = props;

    return (
        <Grid2 item size={{ xs: 12, md: 4}}>
            <Card sx={{ height:'100%'}}>
                <CardMedia
                    component="img"
                    src={poster}
                    title={name}
                    alt={name}
                />
                <CardContent>
                    <Typography variant="h5" component="h3">
                        {name}
                    </Typography>
                    <Typography variant="body1"> 
                        Цена: {price} руб.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid2>
    );
};

export default GoodsItem;