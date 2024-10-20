import React from 'react';
import GoodsItem from './GoodsItem';
import { Grid2 } from '@mui/material';

const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
        <Grid2 container>
             {goods.map((item) => (
                    <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))}

        </Grid2>
    );
};

export default GoodsList;