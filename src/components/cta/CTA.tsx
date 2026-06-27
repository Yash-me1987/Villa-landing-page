import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function CTA() {
    return (
        <Box
        sx={{
            position: "relative",
            py: {
            xs: 10,
            md: 18,
            },
            overflow: "hidden",
        }}
        >
        {/* Background */}

        <Box
            sx={{
            position: "absolute",
            inset: 0,

            backgroundImage:
                "linear-gradient(rgba(19,25,33,.72), rgba(19,25,33,.72)), url('https://res.cloudinary.com/dgdqeidxb/image/upload/v1782362598/WhatsApp_Image_2026-06-22_at_12.53.12_egi5gb.jpg')",

            backgroundSize: "cover",

            backgroundPosition: "center",

            zIndex: -1,
            }}
        />

        <Container maxWidth="md">

            <Box
            sx={{
                textAlign: "center",
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
                Luxury • Nature • Spirituality
            </Typography>

            <Typography
                sx={{
                color: "#FFFFFF",
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.15,
                fontWeight: 500,
                fontSize: {
                    xs: "2.6rem",
                    md: "4.8rem",
                },
                mb: 4,
                }}
            >
                YOUR EXTRAORDINARY
                <br />
                LIFE BEGINS HERE
            </Typography>

            <Typography
                sx={{
                color: "rgba(255,255,255,.82)",
                lineHeight: 1.9,
                mb: 6,
                }}
            >
                Premium 3 BHK Villas • 1500 Sq Ft Built-Up Area
                <br />
                Spacious 2500 Sq Ft Plots • Starting From ₹1.11 Cr*
            </Typography>

            <Stack
                spacing={2}
                sx={{
                alignItems: "center",
                }}
            >
                <Button
                variant="contained"
                sx={{
                    bgcolor: "#58181A",
                    px: 5,
                    py: 1.6,
                    borderRadius: "999px",
                    textTransform: "none",
                    fontSize: "1rem",
                    width: {
                    xs: "100%",
                    sm: "280px",
                    },

                    "&:hover": {
                    bgcolor: "#431214",
                    },
                }}
                >
                Book Site Visit
                </Button>

                <Button
                variant="outlined"
                sx={{
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    px: 5,
                    py: 1.6,
                    borderRadius: "999px",
                    textTransform: "none",
                    width: {
                    xs: "100%",
                    sm: "280px",
                    },

                    "&:hover": {
                    borderColor: "#D4AF37",
                    color: "#D4AF37",
                    },
                }}
                >
                Download Brochure
                </Button>

                <Button
                variant="text"
                sx={{
                    color: "#D4AF37",
                    textTransform: "none",
                    fontWeight: 600,

                    "&:hover": {
                    bgcolor: "transparent",
                    color: "#FFFFFF",
                    },
                }}
                >
                Call Now → 7909937484
                </Button>
            </Stack>

            <Box
                sx={{
                mt: {
                    xs: 6,
                    md: 8,
                },
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
                }}
            >
                {[
                "Luxury Living",
                "Nature",
                "Investment",
                "Spiritual Lifestyle",
                ].map((item) => (
                <Box
                    key={item}
                    sx={{
                    px: 3,
                    py: 1,
                    border: "1px solid rgba(255,255,255,.18)",
                    borderRadius: "999px",
                    bgcolor: "rgba(255,255,255,.06)",
                    }}
                >
                    <Typography
                    sx={{
                        color: "#FFFFFF",
                        fontSize: ".9rem",
                    }}
                    >
                    {item}
                    </Typography>
                </Box>
                ))}
            </Box>

            </Box>

        </Container>
        </Box>
    );
}

export default CTA;