import { useState } from "react";

import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
    {
        label: "Story",
        id: "story",
    },
    {
        label: "Lifestyle",
        id: "lifestyle",
    },
    {
        label: "Villas",
        id: "villa",
    },
    {
        label: "Location",
        id: "location",
    },
    {
        label: "Gallery",
        id: "gallery",
    },
    ];

    function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);

        if (!element) return;

        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });

        setMobileOpen(false);
    };

    return (
        <>
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
            background: "transparent",
            boxShadow: "none",
            }}
        >
            <Container maxWidth="xl">

            <Toolbar
                disableGutters
                sx={{
                minHeight: "82px",

                px: {
                    xs: 2,
                    md: 0,
                },

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",
                }}
            >

                {/* Logo */}

                <Typography
                sx={{
                    fontFamily: "'Playfair Display', serif",

                    color: "#FFFFFF",

                    fontWeight: 500,

                    letterSpacing: "1px",

                    fontSize: {
                    xs: "2rem",
                    md: "2.2rem",
                    },

                    cursor: "pointer",

                    userSelect: "none",
                }}
                >
                NATRAJ RETREAT
                </Typography>

                {/* Desktop Navigation */}

                <Box
                sx={{
                    display: {
                    xs: "none",
                    lg: "flex",
                    },

                    alignItems: "center",

                    gap: 5,
                }}
                >
                {navItems.map((item) => (
                    <Typography
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                        position: "relative",

                        color: "#FFFFFF",

                        cursor: "pointer",

                        fontWeight: 500,

                        transition: ".3s",

                        "&::after": {
                        content: '""',

                        position: "absolute",

                        left: 0,

                        bottom: -7,

                        width: "0%",

                        height: "2px",

                        bgcolor: "#D4AF37",

                        transition: ".3s",
                        },

                        "&:hover": {
                        color: "#D4AF37",
                        },

                        "&:hover::after": {
                        width: "100%",
                        },
                    }}
                    >
                    {item.label}
                    </Typography>
                ))}

                <Button
                    variant="contained"
                    sx={{
                    ml: 3,

                    bgcolor: "#58181A",

                    color: "#FFFFFF",

                    borderRadius: "999px",

                    px: 4,

                    py: 1.3,

                    textTransform: "none",

                    fontWeight: 600,

                    boxShadow: "none",

                    "&:hover": {
                        bgcolor: "#431214",

                        boxShadow: "none",
                    },
                    }}
                >
                    Book Site Visit
                </Button>
                </Box>

                {/* Mobile Menu */}

                <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{
                    display: {
                    xs: "flex",
                    lg: "none",
                    },

                    color: "#FFFFFF",
                }}
                >
                <MenuIcon fontSize="large" />
                </IconButton>

            </Toolbar>

            </Container>
        </AppBar>
      {/* Mobile Drawer */}

        <Box
            sx={{
            position: "fixed",
            inset: 0,
            zIndex: 1300,

            bgcolor: "#131921",

            display: mobileOpen ? "flex" : "none",

            flexDirection: "column",

            p: 4,
            }}
        >
            {/* Header */}

            <Box
            sx={{
                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

                mb: 7,
            }}
            >
            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",

                color: "#FFFFFF",

                fontSize: "2rem",
                }}
            >
                NATRAJ RETREAT
            </Typography>

            <IconButton
                onClick={() => setMobileOpen(false)}
                sx={{
                color: "#FFFFFF",
                }}
            >
                <CloseIcon />
            </IconButton>
            </Box>

            {/* Navigation */}

            <Box
            sx={{
                display: "flex",

                flexDirection: "column",

                gap: 4,
            }}
            >
            {navItems.map((item) => (
                <Typography
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                    color: "#FFFFFF",

                    fontFamily: "'Playfair Display', serif",

                    fontSize: "2rem",

                    cursor: "pointer",

                    transition: ".3s",

                    "&:hover": {
                    color: "#D4AF37",

                    pl: 1,
                    },
                }}
                >
                {item.label}
                </Typography>
            ))}
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Bottom */}

            <Button
            variant="contained"
            fullWidth
            sx={{
                bgcolor: "#58181A",

                py: 1.8,

                borderRadius: "999px",

                textTransform: "none",

                fontWeight: 600,

                fontSize: "1rem",

                mb: 3,

                boxShadow: "none",

                "&:hover": {
                bgcolor: "#431214",

                boxShadow: "none",
                },
            }}
            >
            Book Site Visit
            </Button>

            <Typography
            sx={{
                color: "#D4AF37",

                textAlign: "center",

                letterSpacing: "3px",

                fontSize: ".82rem",

                textTransform: "uppercase",
            }}
            >
            Luxury • Nature • Spirituality
            </Typography>
        </Box>
        </>
    );
}

export default Navbar;