import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Location() {
    const highlights = [
        {
        title: "Maa Narmada",
        description: "Spiritual riverside destination just minutes away.",
        },
        {
        title: "Mandaleshwar",
        description: "Historic town surrounded by heritage and nature.",
        },
        {
        title: "Maheshwar",
        description: "Famous for temples, culture and riverside beauty.",
        },
        {
        title: "Spiritual Destinations",
        description: "Experience a peaceful lifestyle close to sacred places.",
        },
        {
        title: "Riverside Attractions",
        description: "Enjoy beautiful landscapes and weekend experiences.",
        },
    ];

    return (
        <Box
        sx={{
            bgcolor: "#FFFFFF",
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
                maxWidth: "850px",
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
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontWeight: 600,
                fontSize: ".82rem",
                mb: 2,
                }}
            >
                Location Advantage
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
                Perfectly Connected.
                <br />
                Peacefully Located.
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
                Nestled near Mandaleshwar and the sacred Maa Narmada,
                Natraj Retreat offers a rare balance of peaceful living,
                spiritual surroundings and excellent connectivity.
            </Typography>
            </Box>

            {/* Content */}

            <Grid
            container
            spacing={{
                xs: 5,
                md: 6,
            }}
            >
            {/* Map */}

            <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                elevation={0}
                sx={{
                    overflow: "hidden",
                    borderRadius: "28px",
                    border: "1px solid rgba(19,25,33,.08)",
                }}
                >
                <Box
                    component="img"
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Mandaleshwar,Madhya+Pradesh&zoom=13&size=900x700&scale=2"
                    alt="Location Map"
                    sx={{
                    width: "100%",
                    height: {
                        xs: 320,
                        md: 520,
                    },
                    objectFit: "cover",
                    display: "block",
                    }}
                />

                <Box
                    sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    }}
                >
                    <Button
                    variant="contained"
                    href="https://maps.app.goo.gl/DSgjsscXPbQMsWCq7?g_st=aw"
                    target="_blank"
                    sx={{
                        bgcolor: "#58181A",
                        px: 4,
                        py: 1.4,
                        borderRadius: "40px",
                        textTransform: "none",

                        "&:hover": {
                        bgcolor: "#431214",
                        },
                    }}
                    >
                    View On Google Maps
                    </Button>
                </Box>
                </Paper>
            </Grid>

            {/* Highlights */}

            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
                >
                {highlights.map((item) => (
                    <Paper
                    key={item.title}
                    elevation={0}
                    sx={{
                        p: 3,
                        borderRadius: "20px",
                        border: "1px solid rgba(19,25,33,.08)",
                        transition: ".3s",

                        "&:hover": {
                        borderColor: "#D4AF37",
                        transform: "translateY(-3px)",
                        },
                    }}
                    >
                    <Typography
                        sx={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#131921",
                        fontSize: "1.4rem",
                        mb: 1,
                        }}
                    >
                        {item.title}
                    </Typography>

                    <Typography
                        sx={{
                        color: "rgba(19,25,33,.72)",
                        lineHeight: 1.8,
                        }}
                    >
                        {item.description}
                    </Typography>
                    </Paper>
                ))}
                </Box>
            </Grid>

            </Grid>

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
                fontFamily: "'Playfair Display', serif",
                color: "#58181A",
                fontStyle: "italic",
                fontSize: {
                    xs: "1.4rem",
                    md: "2rem",
                },
                lineHeight: 1.6,
                }}
            >
                Nature Around You. Convenience Beside You.
            </Typography>
            </Box>

        </Container>
        </Box>
    );
}

export default Location;