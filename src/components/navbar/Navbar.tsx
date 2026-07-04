import { useEffect, useState } from "react";

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
import logoCrown from "../../assets/logos/logo-crown.png";

const navItems = [
    { label: "HOME", id: "hero" },
    { label: "STORY", id: "story" },
    { label: "LIFESTYLE", id: "lifestyle" },
    { label: "VILLAS", id: "villa" },
    { label: "LOCATION", id: "location" },
    { label: "GALLERY", id: "gallery" },
    { label: "CONTACT", id: "footer" },
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > window.innerHeight - 100);
            console.log({
                scroll: window.scrollY,
                hero: document.getElementById("hero")?.offsetTop,
                story: document.getElementById("story")?.offsetTop,
                lifestyle: document.getElementById("lifestyle")?.offsetTop,
                villa: document.getElementById("villa")?.offsetTop,
                location: document.getElementById("location")?.offsetTop,
                gallery: document.getElementById("gallery")?.offsetTop,
            });
            
        const sections = [
                "hero",
                "story",
                "lifestyle",
                "villa",
                "location",
                "gallery",
                "footer",
            ];

            let current = "hero";

            for (const id of sections) {
                const section = document.getElementById(id);

                if (!section) continue;

                if (window.scrollY >= section.offsetTop - 140) {
                    current = id;
                }
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);

        if (!element) return;

        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
        });

        setMobileOpen(false);
    };

    return (
    <>
        <AppBar
        position="fixed"
        elevation={0}
        sx={{


            bgcolor: "rgba(19,25,33,.20)",

            backdropFilter: "blur(18px)",

            WebkitBackdropFilter: "blur(16px)",

            transition: ".4s ease",

            borderBottom: "1px solid rgba(255,255,255,.08)",

            boxShadow: "0 8px 30px rgba(0,0,0,.12)",
        }}
        >
        <Container
            maxWidth="xl"
            sx={{
                px: {
                xs: 2,
                md: 4,
                },
            }}
            >
            <Toolbar
            disableGutters
            sx={{
                height: scrolled ? 72 : 82,

                transition: ".35s ease",

                justifyContent: "space-between",
            }}
            >
            {/* Logo */}

            <Box
                sx={{
                display: "flex",
                alignItems: "center",

                width: {
                    xs: 80,
                    md: 150,
                },
                }}
            >
                <Box
                component="img"
                src={logoCrown}
                alt="Natraj Retreat"

                sx={{
                    display: {
                    xs: "none",
                    md: "block",
                    },

                    width: 130,

                    objectFit: "contain",

                    transition: ".3s ease",
                }}
                />

                <Box
                component="img"
                src={logoCrown}
                alt="Natraj Retreat"

                sx={{
                    display: {
                    xs: "block",
                    md: "none",
                    },

                    width: 80,

                    objectFit: "contain",
                }}
                />
            </Box>

            {/* Desktop Navigation */}

            <Box
            sx={{
                display: {
                    xs: "none",
                    md: "flex",
                },

                alignItems: "center",

                justifyContent: "center",

                flex: 1,

                gap: 6,
            }}
            >   
                {navItems.map((item) => (
                <Typography
                    key={item.id}
                    onClick={() =>
                    scrollToSection(item.id)
                    }

                    sx={{
                    cursor: "pointer",

                    color:
                        activeSection === item.id
                            ? "#D4AF37"
                            : "#FFFFFF",

                    fontFamily: "Poppins",

                    fontSize: ".92rem",

                    fontWeight: 600,

                    position: "relative",

                    transition: ".3s",

                    "&::after": {
                        content: '""',

                        position: "absolute",

                        left: 0,

                        bottom: -8,

                        width:
                            activeSection === item.id
                                ? "100%"
                                : 0,

                        height: 2,

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
            </Box>
            {/* Desktop CTA */}
            

            <Button
                onClick={() => scrollToSection("footer")}
                variant="contained"
                sx={{
                display: {
                    xs: "none",
                    md: "flex",
                },

                opacity: scrolled ? 1 : 0,

                pointerEvents: scrolled
                ? "auto"
                : "none",

                transform: scrolled
                    ? "translateX(0)"
                    : "translateX(24px)",

                transition: ".35s ease",

                bgcolor: "#58181A",

                color: "#FFFFFF",

                px: 4,

                py: 1.3,

                borderRadius: "999px",

                textTransform: "none",

                fontWeight: 600,

                boxShadow: "none",

                "&:hover": {
                    bgcolor: "#441214",
                },
                }}
            >
                Book Visit →
            </Button>

            {/* Mobile Menu Button */}

            <IconButton
                onClick={() =>
                setMobileOpen(true)
                }
                sx={{
                display: {
                    xs: "flex",
                    md: "none",
                },

                color: "#FFFFFF",
                }}
            >
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </Container>
        </AppBar>

        {/* Mobile Drawer */}

        {mobileOpen && (
        <Box
            sx={{
            position: "fixed",

            inset: 0,

            zIndex: 2000,

            bgcolor: "rgba(19,25,33,.96)",

            backdropFilter: "blur(16px)",

            display: {
                xs: "flex",
                md: "none",
            },

            flexDirection: "column",

            p: 4,
            }}
        >
            {/* Header */}

            <Box
            sx={{
                display: "flex",

                justifyContent: "flex-start",

                alignItems: "center",

                mb: 7,
            }}
            >
            <Box
                component="img"
                src={logoCrown}
                alt="Logo"
                sx={{
                width: 80,
                }}
            />

            <IconButton
                onClick={() =>
                setMobileOpen(false)
                }
                sx={{
                color: "#FFFFFF",
                }}
            >
                <CloseIcon />
            </IconButton>
            </Box>

            {/* Links */}

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
                onClick={() =>
                    scrollToSection(item.id)
                }
                sx={{
                    color: "#FFFFFF",

                    fontSize: "1.35rem",

                    fontWeight: 500,

                    cursor: "pointer",
                }}
                >
                {item.label}
                </Typography>
            ))}
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* CTA */}

            <Button
            fullWidth
            variant="contained"
            onClick={() => scrollToSection("footer")}
            sx={{
                bgcolor: "#58181A",

                py: 1.7,

                borderRadius: "999px",

                textTransform: "none",

                fontWeight: 600,

                mb: 2,

                "&:hover": {
                bgcolor: "#441214",
                },
            }}
            >
            Book Site Visit
            </Button>

            <Button
            fullWidth
            variant="outlined"
            onClick={() => {
                window.open("/brochure.pdf", "_blank");
            }}
            sx={{
                color: "#FFFFFF",

                borderColor: "rgba(255,255,255,.35)",

                py: 1.7,

                borderRadius: "999px",

                textTransform: "none",

                "&:hover": {
                borderColor: "#D4AF37",

                color: "#D4AF37",
                },
            }}
            >
            Download Brochure
            </Button>
        </Box>
        )}
    </>
    );
    }

    export default Navbar;