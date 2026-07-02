import { useState } from "react";

import {
    Box,
    Container,
    Typography,
    Stack,
    Paper,
} from "@mui/material";

import defaultImage from "../../assets/story/story-default.webp";
import villasImage from "../../assets/story/story-villas.webp";
import natureImage from "../../assets/story/story-nature.webp";
import resortImage from "../../assets/story/story-resort.webp";
import investmentImage from "../../assets/story/story-investment.webp";

import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const features = [
    {
        title: "Spacious Luxury Villas",
        image: villasImage,
        icon: <VillaOutlinedIcon />,
        description:
            "Thoughtfully designed villas featuring expansive layouts, timeless architecture and premium finishes crafted for luxurious everyday living.",
    },

    {
        title: "Nature-Centric Living",
        image: natureImage,
        icon: <ParkOutlinedIcon />,
        description:
            "Wake up surrounded by lush landscapes, peaceful walking trails and the calming beauty of Maa Narmada every single day.",
    },

    {
        title: "Resort Lifestyle",
        image: resortImage,
        icon: <DeckOutlinedIcon />,
        description:
            "Premium clubhouse, wellness spaces, leisure amenities and curated experiences that make every day feel like a luxurious getaway.",
    },

    {
        title: "Future Ready Investment",
        image: investmentImage,
        icon: <TrendingUpOutlinedIcon />,
        description:
            "An address created for lasting appreciation, combining premium living with exceptional long-term investment potential.",
    },
];

function Story() {

    const [activeFeature, setActiveFeature] = useState(0);
    const [imageVisible, setImageVisible] = useState(true);


    const currentImage =
        activeFeature === -1
            ? defaultImage
            : features[activeFeature].image;
        
    const changeFeature = (index: number) => {

        if (index === activeFeature) return;

        setImageVisible(false);



        setTimeout(() => {

            setActiveFeature(index);

            requestAnimationFrame(() => {

                setImageVisible(true);


            });

        },180);

    };

    return (

        <Box
            id="story"
            sx={{
                bgcolor: "#ffffff",

                py: {
                    xs: 10,
                    md: 16,
                },

                position: "relative",
            }}
        >
            <Container maxWidth="xl">

                {/* ========================= */}
                {/* TOP SECTION */}
                {/* ========================= */}

                <Box
                    sx={{
                        display: "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            lg: "1fr 1fr",
                        },

                        gap: {
                            xs: 6,
                            lg: 10,
                        },

                        alignItems: "center",
                    }}
                >

                    {/* LEFT IMAGE */}

                    <Box
                        sx={{
                            borderRadius: "30px",

                            overflow: "hidden",

                            boxShadow:
                                "0 35px 80px rgba(15,23,42,.12)",

                            background: "#454242",

                            height: {
                                xs: 340,
                                md: 500,
                            },
                        }}
                    >

                        <Box
                            component="img"
                            src={currentImage}
                            alt="Natraj Retreat"

                            sx={{
                                width: "100%",

                                height: "100%",

                                objectFit: "cover",

                                opacity: imageVisible ? 1 : 0,

                                transition:
                                    "opacity .45s ease, transform .7s ease",

                                "&:hover": {
                                    transform: "scale(1.04)",
                                },
                            }}
                        />

                    </Box>

                    {/* RIGHT CONTENT */}

                    <Stack spacing={3}>

                        <Typography
                            sx={{
                                color: "#D4AF37",

                                textTransform: "uppercase",

                                letterSpacing: "3px",

                                fontWeight: 600,

                                fontSize: ".82rem",
                            }}
                        >
                            About Natraj Retreat
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily:
                                    "'Playfair Display', serif",

                                color: "#131921",

                                lineHeight: 1.08,

                                fontWeight: 500,

                                fontSize: {
                                    xs: "2.7rem",
                                    md: "4rem",
                                },
                            }}
                        >
                            Crafted Around
                            <br />
                            Nature &
                            <br />
                            Serenity
                        </Typography>

                        <Box
                            sx={{
                                width: 70,

                                height: 3,

                                bgcolor: "#D4AF37",

                                borderRadius: 5,
                            }}
                        />

                        <Typography
                            sx={{
                                color: "#4E5562",

                                lineHeight: 2,

                                fontSize: "1.05rem",

                                maxWidth: 620,
                            }}
                        >
                            Natraj Retreat is thoughtfully designed
                            for those who seek more than just a home.
                            Blending timeless architecture with
                            nature-inspired planning, every space
                            creates an atmosphere of peace,
                            privacy and enduring luxury while
                            remaining deeply connected to the
                            sacred serenity of Maa Narmada.
                        </Typography>

                    </Stack>

                </Box>

                {/* ========================= */}
                {/* FEATURE CARDS */}
                {/* ========================= */}

                <Box
                    sx={{
                        mt: {
                            xs: 8,
                            md: 10,
                        },

                        display: "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2,1fr)",
                            lg: "repeat(4,1fr)",
                        },

                        gap: 3,
                    }}
                >
                    {features.map((feature, index) => (
                        <Paper
                            key={feature.title}
                            elevation={0}
                            onMouseEnter={() =>
                                changeFeature(index)
                            }

                            onClick={() =>
                                changeFeature(index)
                            }
                            sx={{
                                p: 3,

                                cursor: "pointer",

                                borderRadius: "20px",

                                background: "#FFFFFF",

                                border:
                                    activeFeature === index
                                        ? "1px solid rgba(212,175,55,.45)"
                                        : "1px solid rgba(0,0,0,.08)",

                                boxShadow:
                                    activeFeature === index
                                        ? "0 18px 45px rgba(212,175,55,.16)"
                                        : "0 8px 25px rgba(15,23,42,.05)",

                                transition: ".35s ease",

                                "&:hover": {
                                    transform: "translateY(-8px)",

                                    borderColor: "#D4AF37",

                                    boxShadow:
                                        "0 22px 55px rgba(212,175,55,.20)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 42,

                                    height: 3,

                                    bgcolor: "#D4AF37",

                                    borderRadius: 10,

                                    mb: 3,
                                }}
                            />

                            <Box
                                sx={{
                                    color: "#D4AF37",

                                    display: "flex",

                                    alignItems: "center",

                                    fontSize: "2rem",

                                    mb: 2,

                                    "& svg": {
                                        fontSize: 34,
                                    },
                                }}
                            >
                                {feature.icon}
                            </Box>

                            <Typography
                                sx={{
                                    fontFamily:
                                        "'Playfair Display', serif",

                                    color: "#131921",

                                    fontWeight: 600,

                                    fontSize: "1.4rem",

                                    lineHeight: 1.25,

                                    mb: 2,
                                }}
                            >
                                {feature.title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#636B76",

                                    lineHeight: 1.9,

                                    fontSize: ".96rem",

                                    display: "-webkit-box",

                                    overflow: "hidden",

                                    WebkitLineClamp: 2,

                                    WebkitBoxOrient: "vertical",
                                }}
                            >
                                {feature.description}
                            </Typography>
                        </Paper>
                    ))}
                </Box>

                {/* ========================= */}
                {/* ACTIVE FEATURE PANEL */}
                {/* ========================= */}

                <Paper
                    elevation={0}
                    sx={{
                        mt: {
                            xs: 5,
                            md: 6,
                        },

                        p: {
                            xs: 3,
                            md: 4,
                        },

                        borderRadius: "24px",

                        background: "#FFFFFF",

                        border: "1px solid rgba(0,0,0,.06)",

                        boxShadow:
                            "0 18px 45px rgba(15,23,42,.06)",

                        transition: ".35s ease",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={3}
                        sx ={{
                            alignItems: "center",
                        }}
                    >
                        {/* Gold Icon */}

                        <Box
                            sx={{
                                width: 58,

                                height: 58,

                                borderRadius: "50%",

                                background:
                                    "rgba(212,175,55,.12)",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                flexShrink: 0,

                                fontSize: "1.7rem",

                                color: "#D4AF37",
                            }}
                        >
                            {features[activeFeature].icon}
                        </Box>

                        {/* Text */}

                        <Box>

                            <Typography
                                sx={{
                                    fontFamily:
                                        "'Playfair Display', serif",

                                    color: "#131921",

                                    fontWeight: 600,

                                    fontSize: {
                                        xs: "1.4rem",
                                        md: "1.8rem",
                                    },

                                    mb: 1,

                                    transition: ".35s ease",
                                }}
                            >
                                {features[activeFeature].title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#5F6772",

                                    lineHeight: 1.9,

                                    maxWidth: "900px",

                                    transition: ".35s ease",
                                }}
                            >
                                {features[activeFeature].description}
                            </Typography>

                        </Box>

                    </Stack>
                </Paper>

            </Container>

        </Box>

    );
}

export default Story;