import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Story() {
    return (
        <Box
        sx={{
            bgcolor: "#F9F8F4",
            py: {
            xs: 8,
            md: 14,
            },
        }}
        >
        <Container maxWidth="xl">
            <Grid
                container
                spacing={{
                    xs: 6,
                    md: 10,
                }}
                >
                {/* Left Image */}

                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                    sx={{
                        overflow: "hidden",
                        borderRadius: "28px",
                    }}
                    >
                    <Box
                        component="img"
                        src="https://res.cloudinary.com/dgdqeidxb/image/upload/v1782362591/WhatsApp_Image_2026-06-22_at_12.53.03_wfrgtw.jpg"
                        alt="Natraj Retreat"

                        sx={{
                        width: "100%",
                        height: {
                            xs: "320px",
                            md: "620px",
                        },

                        objectFit: "cover",

                        display: "block",
                        }}
                    />
                    </Box>
                </Grid>

                {/* Right Content */}

                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                    sx={{
                        color: "#D4AF37",

                        textTransform: "uppercase",

                        letterSpacing: "2px",

                        fontFamily: "Poppins",

                        fontSize: ".82rem",

                        fontWeight: 600,

                        mb: 2,
                    }}
                    >
                    About Natraj Retreat
                    </Typography>

                    <Typography
                    sx={{
                        color: "#131921",

                        fontFamily: "'Playfair Display', serif",

                        fontWeight: 500,

                        lineHeight: 1.2,

                        mb: 3,

                        fontSize: {
                        xs: "2rem",
                        md: "3rem",
                        },
                    }}
                    >
                    Crafted Around
                    <br />
                    Nature & Serenity
                    </Typography>

                    <Typography
                    sx={{
                        color: "rgba(19,25,33,.78)",

                        fontFamily: "Poppins",

                        lineHeight: 1.9,

                        mb: 5,

                        fontSize: {
                        xs: ".95rem",
                        md: "1rem",
                        },
                    }}
                    >
                    Natraj Retreat is designed for families seeking peace,
                    premium living and a deeper connection with nature.
                    Inspired by timeless architecture and surrounded by
                    tranquil landscapes, it offers a lifestyle where every
                    day feels like a retreat.
                    </Typography>

                    <Grid
                    container
                    spacing={2.5}
                    >
                                    {[
                    {
                        title: "Luxury Community",
                        description:
                            "Carefully planned premium villa development.",
                        },
                        {
                        title: "Nature First",
                        description:
                            "Surrounded by peaceful landscapes and greenery.",
                        },
                        {
                        title: "Prime Location",
                        description:
                            "Excellent connectivity with serene surroundings.",
                        },
                        {
                        title: "Future Ready",
                        description:
                            "Designed for both living and long-term investment.",
                        },
                    ].map((item) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                        <Paper
                            elevation={0}
                            sx={{
                            height: "100%",
                            p: 3,
                            borderRadius: "20px",
                            border: "1px solid rgba(19,25,33,0.08)",
                            transition: "0.3s ease",

                            "&:hover": {
                                transform: "translateY(-4px)",
                                borderColor: "#D4AF37",
                            },
                            }}
                        >
                            <Stack spacing={1.2}>
                            <Typography
                                sx={{
                                fontFamily: "'Playfair Display', serif",
                                color: "#131921",
                                fontSize: "1.2rem",
                                fontWeight: 600,
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                sx={{
                                fontFamily: "Poppins",
                                color: "rgba(19,25,33,0.72)",
                                fontSize: ".92rem",
                                lineHeight: 1.7,
                                }}
                            >
                                {item.description}
                            </Typography>
                            </Stack>
                        </Paper>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </Box>
    );
}

export default Story;