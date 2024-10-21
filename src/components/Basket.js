import { ShoppingBag } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const Basket = (props) => {
    const {
        order,
        removeFromOrder,
        cartOpen,
        closeCart = Function.prototype
    } = props;
    return (
        <Drawer
         anchor="right"
         open={cartOpen}
         onClose={closeCart}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBag/>
                    </ListItemIcon>
                    <ListItemText primary="Корзина"/>
                </ListItem>
            </List>
        </Drawer>
    )
};

export default Basket;
