import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Villa() {
    const villas = [
        {
        title: "Premium Villas",
        subtitle: "Luxury Living",
        description:
            "Thoughtfully designed residences combining timeless architecture with modern comfort and open green surroundings.",
        },
        {
        title: "Nature Facing Homes",
        subtitle: "Peaceful Lifestyle",
        description:
            "Wake up to landscaped gardens, fresh air and beautiful outdoor spaces designed for everyday serenity.",
        },
        {
        title: "Investment Value",
        subtitle: "Future Ready",
        description:
            "A premium address offering an exceptional lifestyle while creating long-term value for homeowners.",
        },
    ];

    return (
        <Box
        sx={{
            bgcolor: "#131921",
            color: "#FFFFFF",
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
                maxWidth: "850px",
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
                Signature Villas
            </Typography>

            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.15,
                fontWeight: 500,
                color: "#FFFFFF",
                fontSize: {
                    xs: "2.3rem",
                    md: "4rem",
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
                color: "rgba(255,255,255,.75)",
                lineHeight: 1.9,
                maxWidth: "650px",
                fontSize: {
                    xs: "1rem",
                    md: "1.08rem",
                },
                }}
            >
                Every villa blends elegant architecture, spacious interiors
                and natural surroundings to create a timeless living
                experience for generations.
            </Typography>
            </Box>

            {/* Villa Cards */}

            <Grid
            container
            spacing={{
                xs: 3,
                md: 4,
            }}
            >
            {villas.map((villa) => (
                <Grid key={villa.title} size={{ xs: 12, md: 4 }}>
                <Paper
                    elevation={0}
                    sx={{
                    overflow: "hidden",
                    borderRadius: "28px",
                    bgcolor: "#1C2430",
                    height: "100%",
                    border: "1px solid rgba(255,255,255,.08)",
                    transition: ".35s ease",

                    "&:hover": {
                        transform: "translateY(-8px)",
                        borderColor: "#D4AF37",
                        boxShadow: "0 20px 50px rgba(0,0,0,.35)",
                    },
                    }}
                >
                    <Box
                    component="img"
                    src="https://res.cloudinary.com/dgdqeidxb/image/upload/v1782362591/WhatsApp_Image_2026-06-22_at_12.53.03_wfrgtw.jpg"
                    alt={villa.title}
                    sx={{
                        width: "100%",
                        height: {
                        xs: 240,
                        md: 280,
                        },
                        objectFit: "cover",
                        display: "block",
                    }}
                    />

                    <Box
                    sx={{
                        p: {
                        xs: 3,
                        md: 4,
                        },
                    }}
                    >
                    <Typography
                        sx={{
                        color: "#D4AF37",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        fontSize: ".75rem",
                        fontWeight: 600,
                        mb: 1,
                        }}
                    >
                        {villa.subtitle}
                    </Typography>

                    <Typography
                        sx={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#FFFFFF",
                        fontSize: {
                            xs: "1.8rem",
                            md: "2rem",
                        },
                        mb: 2,
                        }}
                    >
                        {villa.title}
                    </Typography>

                    <Typography
                        sx={{
                        color: "rgba(255,255,255,.72)",
                        lineHeight: 1.9,
                        mb: 4,
                        minHeight: {
                            md: "120px",
                        },
                        }}
                    >
                        {villa.description}
                    </Typography>

                    <Button
                        variant="outlined"
                        sx={{
                        borderColor: "#D4AF37",
                        color: "#D4AF37",
                        borderRadius: "999px",
                        px: 3,
                        py: 1.2,
                        textTransform: "none",
                        fontWeight: 600,

                        "&:hover": {
                            bgcolor: "#D4AF37",
                            color: "#131921",
                            borderColor: "#D4AF37",
                        },
                        }}
                    >
                        Explore Villa
                    </Button>
                    </Box>
                </Paper>
                </Grid>
            ))}
            </Grid>

        </Container>
        </Box>
    );
}

export default Villa;