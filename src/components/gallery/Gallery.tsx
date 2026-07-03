import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import galleryHero from "../../assets/gallery/gallery-hero.webp";
import gallery1 from "../../assets/gallery/gallery-1.webp";
import gallery2 from "../../assets/gallery/gallery-2.webp";
import gallery3 from "../../assets/gallery/gallery-3.webp";
import gallery4 from "../../assets/gallery/gallery-4.webp";

function Gallery() {
    const galleryImages = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
    ];

    const investmentPoints = [
        "Premium Location",
        "Tourism Growth",
        "Long-Term Appreciation",
        "Nature Living",
        "High Rental Potential",
        "Secure Community",
    ];

    return (
        <Box
        sx={{
            bgcolor: "#F8F6F2",
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
                textAlign: "center",
                maxWidth: "820px",
                mx: "auto",
                mb: {
                xs: 7,
                md: 10,
                },
            }}
            >
            <Typography
                sx={{
                color: "#D4AF37",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: ".82rem",
                mb: 2,
                }}
            >
                Experience Natraj Retreat
            </Typography>

            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",
                color: "#131921",
                lineHeight: 1.15,
                fontWeight: 500,
                fontSize: {
                    xs: "2.4rem",
                    md: "4rem",
                },
                mb: 3,
                }}
            >
                A Place You'll
                <br />
                Be Proud To Call Home.
            </Typography>

            <Typography
                sx={{
                color: "rgba(19,25,33,.72)",
                lineHeight: 1.9,
                fontSize: {
                    xs: "1rem",
                    md: "1.08rem",
                },
                }}
            >
                Every detail has been thoughtfully crafted to combine timeless
                architecture, natural beauty and lasting investment value into
                one extraordinary lifestyle.
            </Typography>
            </Box>

            {/* Featured Image */}

            <Paper
                elevation={0}
                sx={{
                    position: "relative",

                    overflow: "hidden",

                    borderRadius: "30px",

                    mb: {
                        xs: 6,
                        md: 8,
                    },

                    cursor: "pointer",

                    "&:hover img": {
                        transform: "scale(1.04)",
                    },

                    "&:hover .heroOverlay": {
                        opacity: 1,
                    },
                }}
            >
            <Box
                component="img"
                src={galleryHero}
                alt="Natraj Retreat"
                sx={{
                    width: "100%",

                    height: {
                        xs: 260,
                        md: 620,
                    },

                    objectFit: "cover",

                    display: "block",

                    transition: "transform .8s ease",
                }}
            />

            <Box
                className="heroOverlay"
                sx={{
                    position: "absolute",

                    inset: 0,

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    bgcolor: "rgba(19,25,33,.28)",

                    opacity: 0,

                    transition: ".35s ease",
                }}
            >
                <Typography
                    sx={{
                        color: "#FFFFFF",

                        fontSize: "1.2rem",

                        fontWeight: 600,

                        letterSpacing: "2px",
                    }}
                >
                    Explore Gallery
                </Typography>
            </Box>
            </Paper>

            {/* Gallery Grid */}

            <Grid
            container
            spacing={{
                xs: 2,
                md: 3,
            }}
            >
            {galleryImages.map((image, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                <Paper
                    elevation={0}
                    sx={{
                        position: "relative",

                        overflow: "hidden",

                        borderRadius: "22px",

                        cursor: "pointer",

                        "&:hover img": {
                            transform: "scale(1.08)",
                        },

                        "&:hover .galleryOverlay": {
                            opacity: 1,
                        },
                    }}
                >
                    <Box
                        component="img"
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        sx={{
                            width: "100%",

                            height: {
                                xs: 150,
                                md: 220,
                            },

                            objectFit: "cover",

                            display: "block",

                            transition: "transform .6s ease",
                        }}
                    />

                    <Box
                        className="galleryOverlay"
                        sx={{
                            position: "absolute",

                            inset: 0,

                            display: "flex",

                            alignItems: "center",

                            justifyContent: "center",

                            bgcolor: "rgba(19,25,33,.45)",

                            opacity: 0,

                            transition: ".35s ease",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#FFFFFF",

                                fontWeight: 600,

                                letterSpacing: "1px",

                                fontSize: ".95rem",
                            }}
                        >
                            View Image
                        </Typography>
                    </Box>
                </Paper>
                </Grid>
            ))}
            </Grid>

            {/* Investment Highlights */}

            <Box
            sx={{
                mt: {
                xs: 8,
                md: 10,
                },
                textAlign: "center",
            }}
            >
            <Typography
                sx={{
                color: "#58181A",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: ".82rem",
                mb: 4,
                }}
            >
                Investment Highlights
            </Typography>

            <Box
                sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                }}
            >
                {investmentPoints.map((point) => (
                <Chip
                    key={point}
                    label={point}
                    sx={{
                    px: 1.5,
                    py: 2.8,
                    fontSize: ".95rem",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(19,25,33,.08)",
                    transition: ".3s",

                    "&:hover": {
                        bgcolor: "#58181A",
                        color: "#FFFFFF",
                        borderColor: "#58181A",
                    },
                    }}
                />
                ))}
            </Box>
            </Box>

            {/* Closing Quote */}

            <Box
            sx={{
                mt: {
                xs: 8,
                md: 10,
                },
                textAlign: "center",
                maxWidth: "900px",
                mx: "auto",
            }}
            >
            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#58181A",
                lineHeight: 1.5,
                fontSize: {
                    xs: "1.5rem",
                    md: "2.4rem",
                },
                }}
            >
                "Where Nature, Luxury and Spirituality Become One."
            </Typography>
            </Box>

        </Container>
        </Box>
    );
}

export default Gallery;