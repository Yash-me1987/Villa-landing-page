import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function FinalCTA() {
    return (
        <Box
        sx={{
            position: "relative",
            overflow: "hidden",
            py: {
            xs: 10,
            md: 14,
            },
        }}
        >
        {/* Background */}

        <Box
            sx={{
            position: "absolute",
            inset: 0,

            backgroundImage:
                "linear-gradient(rgba(19,25,33,.82), rgba(19,25,33,.82)), url('https://res.cloudinary.com/dgdqeidxb/image/upload/v1782362598/WhatsApp_Image_2026-06-22_at_12.53.12_egi5gb.jpg')",

            backgroundPosition: "center",

            backgroundSize: "cover",

            zIndex: -1,
            }}
        />

        <Container maxWidth="md">

            <Stack
            spacing={4}
            sx={{
                alignItems: "center",
                textAlign: "center",
            }}
            >
            <Typography
                sx={{
                color: "#D4AF37",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: ".82rem",
                }}
            >
                Begin Your Extraordinary Life
            </Typography>

            <Typography
                sx={{
                fontFamily: "'Playfair Display', serif",
                color: "#FFFFFF",
                lineHeight: 1.1,
                fontWeight: 500,
                fontSize: {
                    xs: "2.7rem",
                    md: "4.8rem",
                },
                }}
            >
                Live Beside
                <br />
                Maa Narmada.
            </Typography>

            <Typography
                sx={{
                color: "rgba(255,255,255,.80)",
                maxWidth: "650px",
                lineHeight: 1.9,
                fontSize: {
                    xs: "1rem",
                    md: "1.08rem",
                },
                }}
            >
                Premium 3 BHK villas designed for families seeking
                luxury, nature and a timeless lifestyle in one
                extraordinary destination.
            </Typography>

            <Stack
                direction={{
                xs: "column",
                sm: "row",
                }}
                spacing={2}
                sx={{
                width: "100%",
                justifyContent: "center",
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
                    borderColor: "#FFFFFF",
                    color: "#FFFFFF",
                    px: 5,
                    py: 1.6,
                    borderRadius: "999px",
                    textTransform: "none",

                    "&:hover": {
                    borderColor: "#D4AF37",
                    color: "#D4AF37",
                    },
                }}
                >
                Download Brochure
                </Button>
            </Stack>

            <Divider
                sx={{
                width: "100%",
                borderColor: "rgba(255,255,255,.12)",
                mt: 3,
                }}
            />
          {/* Mini Footer */}

            <Stack
                direction={{
                xs: "column",
                md: "row",
                }}
                spacing={{
                xs: 3,
                md: 6,
                }}
                sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                }}
            >
                <Typography
                sx={{
                    color: "rgba(255,255,255,.78)",
                    fontSize: ".95rem",
                }}
                >
                📞 7909937484
                </Typography>

                <Typography
                sx={{
                    color: "rgba(255,255,255,.78)",
                    fontSize: ".95rem",
                    textAlign: "center",
                }}
                >
                ✉ smbinfratechsales01@gmail.com
                </Typography>

                <Button
                variant="text"
                href="https://maps.app.goo.gl/DSgjsscXPbQMsWCq7?g_st=aw"
                target="_blank"
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
                📍 View Location
                </Button>
            </Stack>

            <Divider
                sx={{
                width: "100%",
                borderColor: "rgba(255,255,255,.10)",
                }}
            />

            <Box
                sx={{
                width: "100%",
                pt: 3,
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                }}
            >
                <Box
                sx={{
                    textAlign: {
                    xs: "center",
                    md: "left",
                    },
                }}
                >
                <Typography
                    sx={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#FFFFFF",
                    fontSize: {
                        xs: "1.4rem",
                        md: "1.7rem",
                    },
                    mb: .5,
                    }}
                >
                    NATRAJ RETREAT
                </Typography>

                <Typography
                    sx={{
                    color: "#D4AF37",
                    fontSize: ".78rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    }}
                >
                    Luxury • Nature • Spirituality
                </Typography>
                </Box>

                <Typography
                sx={{
                    color: "rgba(255,255,255,.55)",
                    fontSize: ".88rem",
                    textAlign: {
                    xs: "center",
                    md: "right",
                    },
                }}
                >
                © 2026 SMB Infratech. All Rights Reserved.
                </Typography>
            </Box>

            </Stack>

        </Container>
        </Box>
    );
}

export default FinalCTA;