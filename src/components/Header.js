import { ShoppingBag } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

function headerComponent({handleCart}) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    MUI Shop
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <ShoppingBag/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default headerComponent;