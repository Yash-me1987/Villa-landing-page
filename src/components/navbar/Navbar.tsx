import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
    return (
        <AppBar
        position="absolute"
        elevation={0}
        sx={{
            background: "transparent",
            boxShadow: "none",
            py: 1,
        }}
        >
        <Container maxWidth="xl">
            <Toolbar
            disableGutters
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "80px",
            }}
            >
            {/* Logo */}

            <Typography
                sx={{
                color: "#FFFFFF",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                letterSpacing: "2px",
                fontSize: {
                    xs: "1.4rem",
                    sm: "1.7rem",
                    lg: "2rem",
                },
                }}
            >
                NATRAJ RETREAT
            </Typography>

            {/* Desktop Navigation */}

            <Box
                sx={{
                display: {
                    xs: "none",
                    md: "flex",
                },
                alignItems: "center",
                gap: 4,
                }}
            >
                {[
                "Home",
                "Overview",
                "Amenities",
                "Location",
                "Contact",
                ].map((item) => (
                <Typography
                    key={item}
                    sx={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "0.3s",

                    "&:hover": {
                        color: "#D4AF37",
                    },
                    }}
                >
                    {item}
                </Typography>
                ))}

                <Button
                variant="contained"
                sx={{
                    ml: 2,
                    bgcolor: "#58181A",
                    color: "#FFFFFF",
                    borderRadius: "40px",
                    px: 3.5,
                    py: 1.4,
                    textTransform: "none",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    boxShadow: "none",

                    "&:hover": {
                    bgcolor: "#451214",
                    },
                }}
                >
                Book Site Visit
                </Button>
            </Box>

            {/* Mobile Menu */}

            <IconButton
                sx={{
                display: {
                    xs: "flex",
                    md: "none",
                },

                color: "#FFFFFF",
                }}
            >
                <MenuIcon fontSize="large" />
            </IconButton>
            </Toolbar>
        </Container>
        </AppBar>
    );
}

export default Navbar;