import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <Box
        sx={{
            bgcolor: "#131921",
            color: "#FFFFFF",
            pt: {
            xs: 8,
            md: 10,
            },
            pb: 4,
        }}
        >
        <Container maxWidth="xl">

            <Grid
            container
            spacing={{
                xs: 5,
                md: 8,
            }}
        >
          {/* Left */}

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: {
                    xs: "2rem",
                    md: "2.5rem",
                    },
                    mb: 2,
                }}
                >
                NATRAJ RETREAT
                </Typography>

                <Typography
                sx={{
                    color: "rgba(255,255,255,.72)",
                    lineHeight: 1.9,
                    maxWidth: "500px",
                }}
                >
                A premium villa community by SMB Infratech,
                thoughtfully crafted around nature, luxury,
                spirituality and long-term investment value.
                </Typography>
            </Grid>

            {/* Right */}

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                sx={{
                    color: "#D4AF37",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontSize: ".82rem",
                    mb: 3,
                }}
                >
                Contact
                </Typography>

                <Typography sx={{ mb: 2 }}>
                📞 7909937484
                </Typography>

                <Typography sx={{ mb: 3 }}>
                ✉ smbinfratechsales01@gmail.com
                </Typography>

                <Button
                variant="outlined"
                href="https://maps.app.goo.gl/DSgjsscXPbQMsWCq7?g_st=aw"
                target="_blank"
                sx={{
                    borderColor: "#D4AF37",
                    color: "#D4AF37",
                    borderRadius: "999px",
                    textTransform: "none",

                    "&:hover": {
                    bgcolor: "#D4AF37",
                    color: "#131921",
                    },
                }}
                >
                View Location
                </Button>
            </Grid>

            </Grid>

            <Box
            sx={{
                mt: {
                xs: 6,
                md: 8,
                },
                pt: 3,
                borderTop: "1px solid rgba(255,255,255,.12)",
                display: "flex",
                flexDirection: {
                xs: "column",
                md: "row",
                },
                justifyContent: "space-between",
                gap: 2,
            }}
            >
            <Typography
                sx={{
                color: "rgba(255,255,255,.6)",
                fontSize: ".9rem",
                }}
            >
                © 2026 SMB Infratech. All Rights Reserved.
            </Typography>

            <Link
                underline="hover"
                color="inherit"
                href="#"
                sx={{
                color: "rgba(255,255,255,.6)",
                fontSize: ".9rem",
                }}
            >
                Privacy Policy
            </Link>
            </Box>

        </Container>
        </Box>
    );
}

export default Footer;