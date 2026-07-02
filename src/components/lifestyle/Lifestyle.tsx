import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

function Lifestyle() {
    const lifestyleCards = [
        {
        title: "Morning Serenity",
        description:
            "Wake up surrounded by nature, fresh air and peaceful landscapes that make every morning feel refreshing.",
        },
        {
        title: "Community Living",
        description:
            "Beautifully planned shared spaces create opportunities to connect, celebrate and grow together.",
        },
        {
        title: "Nature & Wellness",
        description:
            "Walking trails, green surroundings and open spaces encourage a healthier and balanced lifestyle.",
        },
    ];

    const amenities = [
        "Premium Clubhouse",
        "Walking Trails",
        "Landscaped Gardens",
        "Children's Play Area",
        "Open Green Spaces",
        "Yoga & Meditation",
        "Security",
        "Community Events",
    ];

    return (
        <Box
        sx={{
            bgcolor: "#F9F9F9",
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
                maxWidth: "900px",
                mx: "auto",
                mb: {
                xs: 7,
                md: 9,
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
                NATRAJ RETREAT
            </Typography>

            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",
                color: "#131921",
                lineHeight: 1.18,
                fontWeight: 500,
                fontSize: {
                    xs: "2.3rem",
                    md: "4rem",
                },
                mb: 3,
                }}
            >
                More Than A Home.
                <br />
                A Way Of Living.
            </Typography>
            
            {/* Quote */}

            <Box
            sx={{
                mt: {
                xs: 5,
                md: 6,
                },
                maxWidth: "760px",
                mx: "auto",
                textAlign: "center",
            }}
            >
            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",
                color: "#58181A",
                fontStyle: "italic",
                lineHeight: 1.6,
                fontSize: {
                    xs: "1.5rem",
                    md: "2.2rem",
                },
                }}
            >
                "Luxury isn't measured by square feet. It's measured by how every day feels."
            </Typography>
            </Box>


            </Box>

            {/* Hero Image */}

            <Box
            sx={{
                overflow: "hidden",
                borderRadius: "32px",
                mb: {
                xs: 8,
                md: 10,
                },
            }}
            >
            <Box
                component="img"
                src="https://res.cloudinary.com/dgdqeidxb/image/upload/v1782362591/WhatsApp_Image_2026-06-22_at_12.53.03_wfrgtw.jpg"
                alt="Lifestyle"

                sx={{
                width: "100%",
                height: {
                    xs: 280,
                    sm: 420,
                    md: 620,
                },
                objectFit: "cover",
                display: "block",
                }}
            />
            </Box>

            {/* Lifestyle Cards */}

            <Grid
            container
            spacing={{
                xs: 3,
                md: 4,
            }}
            >
            {lifestyleCards.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <Paper
                    elevation={0}
                    sx={{
                    height: "100%",
                    p: {
                        xs: 3,
                        md: 4,
                    },
                    borderRadius: "24px",
                    border: "1px solid rgba(19,25,33,.08)",
                    bgcolor: "#FFFFFF",
                    transition: ".3s ease",

                    "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "#D4AF37",
                        boxShadow: "0 18px 40px rgba(0,0,0,.08)",
                    },
                    }}
                >
                    <Typography
                    sx={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#131921",
                        fontSize: {
                        xs: "1.8rem",
                        md: "2rem",
                        },
                        mb: 2,
                    }}
                    >
                    {item.title}
                    </Typography>

                    <Typography
                    sx={{
                        color: "rgba(19,25,33,.72)",
                        lineHeight: 1.9,
                    }}
                    >
                    {item.description}
                    </Typography>
                </Paper>
                </Grid>
            ))}
            </Grid>

            {/* Amenities */}

            <Box
            sx={{
                mt: {
                xs: 9,
                md: 12,
                },
                textAlign: "center",
            }}
            >
            <Typography
                sx={{
                color: "#58181A",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: ".82rem",
                mb: 5,
                }}
            >
                Premium Amenities
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 2,
                }}
                >
                {amenities.map((item) => (
                <Box
                    key={item}
                    sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: "40px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(19,25,33,.08)",
                    transition: ".3s",

                    "&:hover": {
                        bgcolor: "#58181A",
                        color: "#FFFFFF",
                        borderColor: "#58181A",
                    },
                    }}
                >
                    <Typography
                    sx={{
                        fontSize: ".92rem",
                        fontWeight: 500,
                    }}
                    >
                    {item}
                    </Typography>
                </Box>
                ))}
            </Box>
            </Box>
            {/* Closing Statement */}
                <Typography
                sx={{
                    maxWidth: "760px",
                    mx: "auto",
                    mt: {
                    xs: 6,
                    md: 8,
                    },
                    textAlign: "center",
                    color: "rgba(19,25,33,.72)",
                    lineHeight: 1.9,
                    fontSize: {
                    xs: "1rem",
                    md: "1.08rem",
                    },
                }}
                >
                Designed around nature, luxury and meaningful community
                experiences, every corner of Natraj Retreat encourages a
                peaceful and fulfilling lifestyle.
                </Typography>
        </Container>
        </Box>
    );
}

export default Lifestyle;