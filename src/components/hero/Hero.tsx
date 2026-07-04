import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import EnquiryForm from "../enquiryForm/EnquiryForm";

import hero1 from "../../assets/hero/hero1.webp";
import hero2 from "../../assets/hero/hero2.webp";
import hero3 from "../../assets/hero/hero3.webp";


function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    const heroImages = [
    hero1,
    hero2,
    hero3,
    ];

    const [fadeImage, setFadeImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {

            setFadeImage(0);

            setTimeout(() => {

                setCurrentImage((prev) =>
                    (prev + 1) % heroImages.length
                );

                requestAnimationFrame(() => {
                    setFadeImage(1);
                });

            }, 700);

        }, 7000);

        return () => clearInterval(interval);

    }, []);
    
    const [showForm, setShowForm] = useState(false);
    
    return (
        <Box
        id="hero"
        sx={{
            width: "100%",
            minHeight: "100vh",
            position: "relative",
            overflow: "hidden",

            display: "flex",
            alignItems: "center",
            "&::after": {
            content: '""',

            position: "absolute",

            left: 0,

            right: 0,

            bottom: 0,

            height: {
                xs: "180px",
                md: "260px",
            },

            background: `
            linear-gradient(
                to bottom,
                rgba(19,25,33,0) 0%,
                rgba(19,25,33,.10) 30%,
                rgba(19,25,33,.35) 55%,
                rgba(19,25,33,.70) 80%,
                rgba(19,25,33,.95) 100%
            )
        `,

            pointerEvents: "none",

            zIndex: 3,
        },
        }}
        >

        {/* Background Slideshow */}

        <Box
            sx={{
                position: "absolute",

                inset: 0,

                zIndex: 0,

                overflow: "hidden",
            }}
        >
            <Box
                component="img"
                src={heroImages[currentImage]}
                alt="Hero"

                sx={{
                    position: "absolute",

                    inset: 0,

                    width: "100%",

                    height: "100%",

                    objectFit: "cover",

                    objectPosition: {
                        xs: "68% center",
                        md: "center center",
                    },

                    transform: fadeImage
                        ? "scale(1.08)"
                        : "scale(1.12)",

                    opacity: fadeImage,

                    transition:
                        "opacity .8s ease-in-out, transform 6s linear",
                }}
            />

            {/* Premium Gradient Overlay */}

            <Box
                sx={{
                    position: "absolute",

                    inset: 0,

                    background: `
                        linear-gradient(
                            to bottom,
                            rgba(19,25,33,.42),
                            rgba(19,25,33,.48)
                        )
                    `,

                    pointerEvents: "none",
                }}
            />
            </Box>

        <Container
            maxWidth="xl"
            sx={{
                position: "relative",

                zIndex: 2,
                py: {
                xs: 15,
                sm: 17,
                md: 6,
            },

                pl: {
                xs: 1,
                sm: 2,
                md: 0,
            },
            }}
        >
            <Box
            sx={{
                width: {
                xs: "100%",
                sm: "92%",
                md: "42%",
                lg: "38%",
                },

                ml: {
                xs: 0,
                md: 6,
                lg: 8,
                },

                color: "#fff",
            }}
            >
            {/* Luxury Label */}

            <Typography
                sx={{
                color: "#D4AF37",
                fontFamily: "Poppins",
                textTransform: "uppercase",
                letterSpacing: "2.8px",
                fontWeight: 600,

                mb: 1.5,

                fontSize: {
                    xs: ".90rem",
                    md: ".92rem",
                },
                }}
            >
                        Luxury Villa Community
            </Typography>

            {/* Heading */}

            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                color: "#FFFFFF",

                lineHeight: 1.08,

                letterSpacing: "-1.4px",

                mb: 5,

                fontSize: {
                    xs: "2.45rem",
                    sm: "3rem",
                    md: "3.9rem",
                    lg: "4.35rem",
                },
                }}
            >
                <Box
                    component="span"
                    sx={{
                        display: "block",
                    }}
                    >
                    LIVE DIVINE.
                    </Box>

                    <Box
                    component="span"
                    sx={{
                        display: "block",
                        whiteSpace: {
                        xs: "normal",
                        md: "nowrap",
                        },
                    }}
                    >
                    LIVE EXTRAORDINARY.
                </Box>
            </Typography>

            {/* Sub Heading */}

            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",
                color: "#FFFFFF",

                lineHeight: 1.55,

                mb: 3,

                maxWidth:"500px",

                fontSize: {
                    xs: "1.15rem",
                    md: "1.45rem",
                },
                }}
            >
                Where Luxury Living Meets the Timeless Serenity of Maa Narmada
            </Typography>

            {/* Description */}

            <Typography
                sx={{
                fontFamily: "Poppins",

                color: "rgba(255,255,255,.90)",

                lineHeight: 1.8,

                maxWidth: "620px",

                mb: 5,

                fontSize: {
                    xs: ".98rem",
                    md: "1.05rem",
                },
                }}
            >
                Welcome to Natraj Retreat, an exclusive villa community near
                Mandaleshwar designed for those who seek more than just a home.
            </Typography>

            {/* Buttons */}

            <Stack
                direction={{
                xs: "column",
                sm: "row",
                }}
                spacing={2}
            >
                <Button
                variant="contained"
                onClick={() => setShowForm(true)}
                sx={{
                    bgcolor: "#58181A",

                    color: "#FFFFFF",

                    px: 5,

                    py: {
                        xs: 2,
                        md: 1.7,
                    },

                    borderRadius: "999px",

                    textTransform: "none",

                    fontFamily: "Poppins",

                    fontWeight: 600,

                    fontSize: "1rem",

                    boxShadow: "none",

                    transition: ".3s ease",

                    "&:hover": {
                        bgcolor: "#441214",

                        transform: "translateY(-2px)",

                        boxShadow: "0 14px 30px rgba(88,24,26,.35)",
                    },
                }}
                >
                Book Site Visit
                </Button>

                <Button
                    component="a"
                    href="/brochure/Natraj-Retreat-Brochure.pdf"
                    
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                        color: "#fff8e7",

                        borderColor: "#fff8e7",

                        px: 5,

                        py: {
                            xs: 2,
                            md: 1.7,
                        },

                        borderRadius: "999px",

                        textTransform: "none",

                        fontFamily: "Poppins",

                        fontWeight: 600,

                        fontSize: "1rem",

                        transition: ".3s ease",

                        "&:hover": {
                            borderColor: "#D4AF37",

                            color: "#D4AF37",

                            backgroundColor: "rgba(212,175,55,.06)",

                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    Download Brochure
                </Button>
            </Stack>
                </Box>
            </Container>

            {/* Floating Enquiry Form */}

            <Box
                sx={{
                    position: "relative",

                    top: "50%",

                    right: showForm ? "5%" : "-120%",

                    display: {
                        xs: "none",
                        lg: "block",
                    },

                    transform: "translateY(-50%)",

                    transition: "right .65s ease",

                    zIndex: 8,
                }}
            >
                <EnquiryForm 
                    onClose={() => setShowForm(false)}
                />
            </Box>

            {/* Mobile Enquiry Form */}

            {showForm && (
                <Box
                    sx={{
                        display: {
                            xs: "flex",
                            lg: "none",
                        },

                        position: "fixed",

                        inset: 0,

                        bgcolor: "rgba(19,25,33,.55)",

                        backdropFilter: "blur(8px)",

                        alignItems: "center",

                        justifyContent: "center",

                        p: 2,

                        zIndex: 3000,

                        overflowY: "auto",
                    }}
                >
                    <EnquiryForm
                        onClose={() => setShowForm(false)}
                    />
                </Box>
            )}

        </Box>
            
    );
}

export default Hero;