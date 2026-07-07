import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import villaHero from "../../assets/villas/villa-hero.webp";

import groundFloor from "../../assets/villas/ground-floor.webp";
import firstFloor from "../../assets/villas/first-floor.webp";

function Villa() {

    const [selectedFloor, setSelectedFloor] =
        useState<"ground" | "first">("ground");

    const floorPlans = {
        ground: {
            image: groundFloor,

            title: "Ground Floor",

            description:
                "Designed for everyday family living with generous open spaces, seamless circulation and elegant entertaining areas.",

            highlights: [
                "Grand Living Room",
                "Dining Area",
                "Modern Kitchen",
                "Guest Bedroom",
                "Private Garden",
                "Covered Parking",
            ],
        },

        first: {
            image: firstFloor,

            title: "First Floor",

            description:
                "A private sanctuary featuring spacious bedrooms, balconies and carefully planned personal spaces.",

            highlights: [
                "Master Suite",
                "Walk-in Wardrobe",
                "Private Balcony",
                "Bedroom 2",
                "Bedroom 3",
                "Family Lounge",
            ],
        },
    };

    return (

        <Box
            id ="villa"
            sx={{
                bgcolor: "#131921",

                py: {
                    xs: 10,
                    md: 16,
                },
            }}
        >

            <Container maxWidth="xl">

                {/* Heading */}

                <Box
                    sx={{
                        maxWidth: "760px",

                        mb: {
                            xs: 8,
                            md: 10,
                        },
                    }}
                >

                    <Typography
                        sx={{
                            color: "#D4AF37",

                            textTransform: "uppercase",

                            letterSpacing: "3px",

                            fontWeight: 600,

                            fontSize: ".82rem",

                            mb: 2,
                        }}
                    >
                        Signature Villas
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily:
                                "'Playfair Display', serif",

                            color: "#FFFFFF",

                            lineHeight: 1.12,

                            fontWeight: 500,

                            fontSize: {
                                xs: "2.5rem",
                                md: "4.6rem",
                            },

                            mb: 3,
                        }}
                    >
                        Crafted For
                        <br />
                        Extraordinary Living.
                    </Typography>

                    <Typography
                        sx={{
                            color:
                                "rgba(255,255,255,.78)",

                            lineHeight: 2,

                            maxWidth: "700px",

                            fontSize: {
                                xs: "1rem",
                                md: "1.1rem",
                            },
                        }}
                    >
                        Every residence has been thoughtfully
                        crafted to balance timeless architecture,
                        generous living spaces and an effortless
                        connection with nature—creating a home
                        designed to be enjoyed for generations.
                    </Typography>

                </Box>

                {/* Hero Villa Image */}

                <Box
                    sx={{
                        overflow: "hidden",

                        borderRadius: "36px",

                        boxShadow:
                            "0 40px 90px rgba(0,0,0,.28)",

                        mb: {
                            xs: 8,
                            md: 10,
                        },
                    }}
                >

                    <Box
                        component="img"

                        src={villaHero}

                        alt="Signature Villa"

                        sx={{
                            width: "100%",

                            height: {
                                xs: 280,
                                sm: 420,
                                md: 700,
                            },

                            objectFit: "cover",

                            display: "block",

                            transition:
                                "transform 8s ease",

                            "&:hover": {
                                transform: "scale(1.05)",
                            },
                        }}
                    />

                </Box>

                {/* Explore Floor Plans */}

                <Box
                    sx={{
                        textAlign: "center",

                        mb: {
                            xs: 5,
                            md: 6,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            color: "#D4AF37",

                            textTransform: "uppercase",

                            letterSpacing: "3px",

                            fontWeight: 600,

                            fontSize: ".82rem",

                            mb: 3,
                        }}
                    >
                        Explore Floor Plans
                    </Typography>

                    {/* Floor Switch */}

                    <Box
                        sx={{
                            display: "inline-flex",

                            bgcolor: "rgba(255,255,255,.05)",

                            border: "1px solid rgba(255,255,255,.08)",

                            borderRadius: "999px",

                            p: .8,

                            gap: 1,
                        }}
                    >
                        <Button
                            disableElevation

                            onClick={() =>
                                setSelectedFloor("ground")
                            }

                            sx={{
                                px: 4,

                                py: 1.4,

                                borderRadius: "999px",

                                textTransform: "none",

                                fontWeight: 600,

                                color:
                                    selectedFloor === "ground"
                                        ? "#131921"
                                        : "#FFFFFF",

                                bgcolor:
                                    selectedFloor === "ground"
                                        ? "#D4AF37"
                                        : "transparent",

                                "&:hover": {
                                    bgcolor:
                                        selectedFloor === "ground"
                                            ? "#D4AF37"
                                            : "rgba(255,255,255,.08)",
                                },
                            }}
                        >
                            Ground Floor
                        </Button>

                        <Button
                            disableElevation

                            onClick={() =>
                                setSelectedFloor("first")
                            }

                            sx={{
                                px: 4,

                                py: 1.4,

                                borderRadius: "999px",

                                textTransform: "none",

                                fontWeight: 600,

                                color:
                                    selectedFloor === "first"
                                        ? "#131921"
                                        : "#FFFFFF",

                                bgcolor:
                                    selectedFloor === "first"
                                        ? "#D4AF37"
                                        : "transparent",

                                "&:hover": {
                                    bgcolor:
                                        selectedFloor === "first"
                                            ? "#D4AF37"
                                            : "rgba(255,255,255,.08)",
                                },
                            }}
                        >
                            First Floor
                        </Button>

                    </Box>

                </Box>

                {/* Floor Plan */}

                <Box
                    sx={{
                        overflow: "hidden",

                        borderRadius: "30px",

                        bgcolor: "#FFFFFF",

                        p: {
                            xs: 2,
                            md: 4,
                        },

                        boxShadow:
                            "0 35px 90px rgba(0,0,0,.20)",

                        mb: {
                            xs: 7,
                            md: 8,
                        },
                    }}
                >
                    <Box
                        component="img"

                        src={
                            floorPlans[selectedFloor].image
                        }

                        alt={
                            floorPlans[selectedFloor].title
                        }

                        sx={{
                            width: "100%",

                            display: "block",

                            borderRadius: "18px",

                            transition:
                                ".45s ease",
                        }}
                    />
                </Box>

                {/* Floor Highlights */}

                <Stack
                    spacing={4}

                    sx={{
                        mb: {
                            xs: 8,
                            md: 10,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily:
                                "'Playfair Display', serif",

                            color: "#FFFFFF",

                            fontSize: {
                                xs: "2rem",
                                md: "2.8rem",
                            },

                            fontWeight: 500,
                        }}
                    >
                        {
                            floorPlans[selectedFloor]
                                .title
                        }
                    </Typography>

                    <Typography
                        sx={{
                            color:
                                "rgba(255,255,255,.75)",

                            lineHeight: 2,

                            maxWidth: "760px",
                        }}
                    >
                        {
                            floorPlans[selectedFloor]
                                .description
                        }
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",

                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2,1fr)",
                                md: "repeat(3,1fr)",
                            },

                            gap: 2.5,
                        }}
                    >
                        {floorPlans[
                            selectedFloor
                        ].highlights.map(
                            (item) => (
                                <Box
                                    key={item}

                                    sx={{
                                        display: "flex",

                                        alignItems: "center",

                                        gap: 2,

                                        p: 2.5,

                                        borderRadius:
                                            "18px",

                                        bgcolor:
                                            "rgba(255,255,255,.05)",

                                        border:
                                            "1px solid rgba(255,255,255,.08)",

                                        transition:
                                            ".35s ease",

                                        "&:hover": {
                                            borderColor:
                                                "#D4AF37",

                                            transform:
                                                "translateY(-4px)",

                                            bgcolor:
                                                "rgba(255,255,255,.08)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 8,

                                            height: 8,

                                            borderRadius:
                                                "50%",

                                            bgcolor:
                                                "#D4AF37",

                                            flexShrink: 0,
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            color:
                                                "#FFFFFF",

                                            fontWeight: 500,
                                        }}
                                    >
                                        {item}
                                    </Typography>

                                </Box>
                            )
                        )}
                    </Box>

                </Stack>
                {/* CTA */}

                <Box
                    sx={{
                        textAlign: "center",

                        py: {
                            xs: 6,
                            md: 8,
                        },

                        borderTop:
                            "1px solid rgba(255,255,255,.08)",
                    }}
                >

                    <Typography
                        sx={{
                            fontFamily:
                                "'Playfair Display', serif",

                            color: "#FFFFFF",

                            fontWeight: 500,

                            fontSize: {
                                xs: "2rem",
                                md: "3rem",
                            },

                            lineHeight: 1.2,

                            mb: 2,
                        }}
                    >
                        Experience Every Detail
                        <br />
                        Before You Visit.
                    </Typography>

                    <Typography
                        sx={{
                            color:
                                "rgba(255,255,255,.72)",

                            maxWidth: "700px",

                            mx: "auto",

                            lineHeight: 1.9,

                            mb: 5,
                        }}
                    >
                        Download the complete floor plans and
                        brochure to explore every thoughtfully
                        designed space before your site visit.
                    </Typography>

                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}

                        spacing={2}
                        sx={{
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="contained"

                            sx={{
                                bgcolor: "#D4AF37",

                                color: "#0a1929",

                                px: 5,

                                py: 1.7,

                                borderRadius: "999px",

                                textTransform: "none",

                                fontWeight: 600,

                                fontSize: "1rem",

                                

                                transition: ".35s ease",

                                "&:hover": {
                                    bgcolor: "#E2BC48",

                                    boxShadow:
                                        "0 20px 45px rgba(212,175,55,.28)",

                                    transform:
                                        "translateY(-3px)",

                                    
                                },
                            }}
                        >
                            Download Floor Plan
                        </Button>

                        <Button
                            component="a"
                            href="https://drive.google.com/file/d/1-0mrNE70qfgedieeHXBOG-a2JwxAIVLj/view"
                            
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

        </Box>

    );
}

export default Villa;