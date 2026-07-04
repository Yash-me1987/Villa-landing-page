import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import logo from "../../assets/logos/logo-full.png";
import footerBg from "../../assets/gallery/gallery-hero.webp";

import Divider from "@mui/material/Divider";

function Footer() {

    const quickLinks = [
        "Home",
        "Story",
        "Lifestyle",
        "Signature Villas",
        "Location",
        "Gallery",
    ];

    return (

        <Box
            id="footer"
            sx={{
                position: "relative",

                overflow: "hidden",

                bgcolor: "#131921",

                color: "#FFFFFF",

                pt: {
                    xs: 10,
                    md: 14,
                },
            }}
        >

            {/* Background Image */}

            <Box
                component="img"
                src={footerBg}
                alt="Footer Background"

                sx={{
                    position: "absolute",

                    inset: 0,

                    width: "100%",

                    height: "100%",

                    objectFit: "cover",

                    opacity: .28,

                    pointerEvents: "none",
                }}
            />

            {/* Dark Overlay */}

            <Box
                sx={{
                    position: "absolute",

                    inset: 0,

                    bgcolor: "rgba(19,25,33,.32)",
                }}
            />

            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 2,
                }}
            >

            {/* CTA */}

                <Box
                    sx={{
                        mt: {
                            xs: 14,
                            md: 0,
                        },

                        pt: {
                            xs: 8,
                            md: 0,
                        },

                        
                        textAlign: "center",
                    }}
                >

                    <Typography
                        sx={{
                            fontFamily:
                                "'Playfair Display', serif",

                            color: "#FFFFFF",

                            lineHeight: 1.2,

                            fontWeight: 500,

                            fontSize: {
                                xs: "2.2rem",
                                md: "4rem",
                            },

                            mb: 3,
                        }}
                    >
                        Ready To Experience
                        <br />
                        Natraj Retreat?
                    </Typography>

                    <Typography
                        sx={{
                            color:
                                "rgba(255,255,255,.72)",

                            maxWidth: "720px",

                            mx: "auto",

                            lineHeight: 1.9,

                            mb: 5,
                        }}
                    >
                        Schedule your private site visit and
                        discover a lifestyle where luxury,
                        nature and timeless architecture
                        come together.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",

                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },

                            justifyContent: "center",

                            gap: 5,

                            mb: {
                                xs: 8,
                                md: 10,
                            },
                        }}
                    >

                        <Button
                            variant="contained"

                            sx={{
                                bgcolor: "#D4AF37",

                                color: "#131921",

                                px: 5,

                                py: 1.8,

                                borderRadius: "999px",

                                textTransform: "none",

                                fontWeight: 600,

                                fontSize: "1rem",

                                

                                "&:hover": {
                                    bgcolor: "#E2BC48",

                                    boxShadow:
                                        "0 10px 20px rgba(212,175,55,.25)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            Schedule Site Visit
                        </Button>

                        <Button
                            variant="outlined"

                            sx={{
                                
                                borderColor:
                                    "#D4AF37",

                                px: 5,

                                py: 1.8,

                                borderRadius: "999px",

                                textTransform: "none",

                                fontWeight: 600,

                                fontSize: "1rem",

                                color: "#D4AF37",

                                "&:hover": {
                                    borderColor: "#D4AF37",

                                    color: "#D4AF37",

                                    background:
                                        "rgba(212,175,55,.05)",

                                    boxShadow:
                                        "0 10px 20px rgba(212,175,55,.25)",
                                    
                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            Call Now
                        </Button>

                    </Box>

                    <Divider
                        sx={{
                            mt: {
                                xs: 8,
                                md: 10,
                            },

                            mb: {
                                xs: 8,
                                md: 10,
                            },

                            borderColor: "rgba(255,255,255,.08)",
                        }}
                    />

                </Box>
                

                
                {/* Brand and Quick Links */}

                <Grid
                    container
                    spacing={{
                        xs: 20,
                        md: 20,
                    }}
                >

                    

                    {/* Brand */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 5,
                        }}
                    >

                        <Box
                            component="img"
                            src={logo}
                            alt="Natraj Retreat"

                            sx={{
                                width: 190,

                                mb: 4,
                            }}
                        />

                        <Typography
                            sx={{
                                fontFamily:
                                    "'Playfair Display', serif",

                                fontSize: {
                                    xs: "2.2rem",
                                    md: "3rem",
                                },

                                lineHeight: 1.15,

                                mb: 3,
                            }}
                        >
                            Luxury Villas
                            <br />
                            Inspired By Nature.
                        </Typography>

                        

                    </Grid>

                    {/* Quick Links */}

                    <Grid
                        size={{
                            xs: 6,
                            md: 3,
                        }}
                    >

                        <Typography
                            sx={{
                                color: "#D4AF37",

                                textTransform: "uppercase",

                                letterSpacing: "3px",

                                fontWeight: 600,

                                fontSize: ".82rem",

                                mb: 3,
                            }}
                        >
                            Quick Links
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",

                                flexDirection: "column",

                                gap: 2,
                            }}
                        >

                            {quickLinks.map((item) => (

                                <Link
                                    key={item}

                                    underline="none"

                                    href="#"

                                    color="inherit"

                                    sx={{

                                        color:
                                            "rgba(255,255,255,.72)",

                                        transition: ".3s",

                                        width: "fit-content",

                                        "&:hover": {

                                            color: "#D4AF37",

                                            transform:
                                                "translateX(6px)",
                                        },
                                    }}
                                >
                                    {item}
                                </Link>

                            ))}

                        </Box>

                    </Grid>


                    {/* Contact */}

                    <Grid
                        size={{
                            xs: 6,
                            md: 4,
                        }}
                    >

                        <Typography
                            sx={{
                                color: "#D4AF37",

                                textTransform: "uppercase",

                                letterSpacing: "3px",

                                fontWeight: 600,

                                fontSize: ".82rem",

                                mb: 3,
                            }}
                        >
                            Contact
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",

                                flexDirection: "column",

                                gap: 3,

                                color: "rgba(255,255,255,.72)",
                            }}
                        >

                            <Box>

                                <Typography
                                    sx={{
                                        color: "#FFFFFF",

                                        fontWeight: 600,

                                        mb: .7,
                                    }}
                                >
                                    Phone
                                </Typography>

                                <Typography>
                                    +91 7909937484
                                </Typography>

                            </Box>

                            <Box>

                                <Typography
                                    sx={{
                                        color: "#FFFFFF",

                                        fontWeight: 600,

                                        mb: .7,
                                    }}
                                >
                                    Email
                                </Typography>

                                <Typography>
                                    smbinfratechsales01@gmail.com
                                </Typography>

                            </Box>

                            <Box>

                                <Typography
                                    sx={{
                                        color: "#FFFFFF",

                                        fontWeight: 600,

                                        mb: .7,
                                    }}
                                >
                                    Address
                                </Typography>

                                <Typography>
                                    Mandaleshwar,
                                    Madhya Pradesh,
                                    India
                                </Typography>

                            </Box>

                        </Box>

                    </Grid>



                </Grid>


                {/* Bottom Bar */}

                <Box
                    sx={{
                        mt: {
                            xs: 8,
                            md: 10,
                        },

                        py: 4,

                        borderTop:
                            "1px solid rgba(255,255,255,.08)",

                        display: "flex",

                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },

                        alignItems: "center",

                        justifyContent: "space-between",

                        gap: 3,
                    }}
                >

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,.60)",

                            fontSize: ".92rem",

                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                        }}
                    >
                        © 2026 Natraj Retreat. All Rights Reserved.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",

                            flexWrap: "wrap",

                            justifyContent: "center",

                            gap: 3,
                        }}
                    >

                        <Link
                            href="#"

                            underline="none"

                            sx={{
                                color:
                                    "rgba(255,255,255,.60)",

                                fontSize: ".92rem",

                                transition: ".3s",

                                "&:hover": {
                                    color: "#D4AF37",
                                },
                            }}
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"

                            underline="none"

                            sx={{
                                color:
                                    "rgba(255,255,255,.60)",

                                fontSize: ".92rem",

                                transition: ".3s",

                                "&:hover": {
                                    color: "#D4AF37",
                                },
                            }}
                        >
                            Terms & Conditions
                        </Link>

                    </Box>

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,.60)",

                            fontSize: ".92rem",

                            textAlign: {
                                xs: "center",
                                md: "right",
                            },
                        }}
                    >
                        Developed by
                        <Box
                            component="span"
                            sx={{
                                color: "#D4AF37",

                                fontWeight: 600,

                                ml: .8,
                            }}
                        >
                            SMB Infratech
                        </Box>
                    </Typography>

                </Box>

            </Container>

        </Box>

    );
}

export default Footer;