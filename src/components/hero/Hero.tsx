import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

function Hero() {
    return (
        <Box
        sx={{
            minHeight: "100vh",
            position: "relative",
            overflow: "hidden",

            backgroundImage: `
            linear-gradient(
                rgba(19,25,33,0.58),
                rgba(19,25,33,0.58)
            ),
            url("https://res.cloudinary.com/dgdqeidxb/image/upload/v1782362591/WhatsApp_Image_2026-06-22_at_12.53.03_wfrgtw.jpg")
            `,

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            display: "flex",
            alignItems: "center",
        }}
        >
        <Container
            maxWidth="xl"
            sx={{
            py: {
                xs: 14,
                sm: 16,
                md: 0,
            },
            }}
        >
            <Box
            sx={{
                width: {
                xs: "100%",
                sm: "92%",
                md: "46%",
                lg: "42%",
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
                fontWeight: 500,

                mb: 2,

                fontSize: {
                    xs: ".72rem",
                    md: ".82rem",
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

                letterSpacing: "-1px",

                mb: 4,

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

                lineHeight: 1.45,

                mb: 3,

                maxWidth: "620px",

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

                lineHeight: 2,

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
                spacing={2.5}
            >
                <Button
                variant="contained"
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

                    "&:hover": {
                    bgcolor: "#441214",
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

                    py: {
                        xs: 2,
                        md: 1.7,
                    },

                    borderRadius: "999px",

                    textTransform: "none",

                    fontFamily: "Poppins",

                    fontWeight: 600,

                    fontSize: "1rem",

                    "&:hover": {
                    borderColor: "#D4AF37",

                    color: "#D4AF37",
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

export default Hero;