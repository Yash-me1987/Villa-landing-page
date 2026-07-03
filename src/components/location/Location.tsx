import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import locationMap from "../../assets/location/location-map.webp";

function Location() {

    const nearbyLocations = [

        {
            title: "Maa Narmada",
            time: "5 Min",
            description:
                "A peaceful riverfront offering spiritual serenity and beautiful sunrise views.",
        },

        {
            title: "Mandaleshwar",
            time: "5 Min",
            description:
                "Historic town with everyday conveniences, local markets and essential services.",
        },

        {
            title: "Maheshwar",
            time: "20 Min",
            description:
                "Renowned for its heritage forts, temples, handloom culture and riverside charm.",
        },

        {
            title: "Schools & Hospitals",
            time: "Nearby",
            description:
                "Leading educational institutions and healthcare facilities within comfortable reach.",
        },

        {
            title: "Highway Connectivity",
            time: "Easy Access",
            description:
                "Convenient road connectivity ensuring effortless travel to nearby cities.",
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

                        maxWidth: "820px",

                        mx: "auto",

                        mb: {
                            xs: 8,
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
                        Location & Connectivity
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily:
                                "'Playfair Display', serif",

                            color: "#131921",

                            lineHeight: 1.15,

                            fontWeight: 500,

                            fontSize: {
                                xs: "2.4rem",
                                md: "4.3rem",
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

                            lineHeight: 2,

                            fontSize: {
                                xs: "1rem",
                                md: "1.08rem",
                            },

                            maxWidth: "760px",

                            mx: "auto",
                        }}
                    >
                        Nestled near the sacred Maa Narmada,
                        Natraj Retreat offers a lifestyle where
                        tranquillity meets convenience. Every
                        destination that matters is only a short
                        drive away.
                    </Typography>

                </Box>

                {/* Two Column Layout */}

                <Grid
                    container
                    spacing={{
                        xs: 6,
                        md: 8,
                    }}
                    sx={{
                        alignItems: "center",
                    }}
                >

                    {/* Left */}

                    <Grid
                        size={{
                            xs: 12,
                            lg: 7,
                        }}
                    >

                        <Box
                            sx={{
                                position: "relative",

                                overflow: "hidden",

                                borderRadius: "32px",

                                boxShadow: "0 35px 90px rgba(15,23,42,.10)",
                            }}
                        >

                            <Box
                            
                                component="img"
                                

                                src={locationMap}

                                alt="Location Map"

                                sx={{
                                    width: "100%",

                                    display: "block",

                                    height: {
                                        xs: 380,
                                        sm: 500,
                                        md: 980,
                                        lg: 1180,
                                    },

                                    objectFit: "cover",

                                    transition:
                                        "transform 8s ease",

                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            />
                            <Button
                                component="a"
                                href="https://maps.app.goo.gl/DSgjsscXPbQMsWCq7?g_st=aw"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                sx={{
                                    position: "absolute",

                                    right: 32,

                                    bottom: 32,

                                    bgcolor: "#131921",

                                    color: "#FFFFFF",

                                    minWidth: "200px",

                                    height: "60px",

                                    px: 4,

                                    borderRadius: "999px",

                                    textTransform: "none",

                                    fontSize: "1rem",

                                    fontWeight: 600,

                                    letterSpacing: ".3px",

                                    boxShadow: "0 18px 45px rgba(0,0,0,.28)",

                                    transition: ".35s ease",

                                    "&:hover": {
                                        bgcolor: "#D4AF37",

                                        color: "#131921",

                                        transform: "translateY(-3px)",

                                        boxShadow: "0 24px 60px rgba(0,0,0,.32)",
                                    },
                                }}
                            >
                                View on Map
                        </Button>

                        </Box>

                    </Grid>

                    {/* Right */}

                    <Grid
                        size={{
                            xs: 12,
                            lg: 5,
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
                            Nearby Landmarks
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily:
                                    "'Playfair Display', serif",

                                color: "#131921",

                                fontWeight: 500,

                                lineHeight: 1.18,

                                fontSize: {
                                    xs: "2rem",
                                    md: "3rem",
                                },

                                mb: 5,
                            }}
                        >
                            Everything
                            <br />
                            Within Easy Reach.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",

                                flexDirection: "column",

                                gap: 2.5,
                            }}
                        >
                            {nearbyLocations.map((location) => (

                                <Box
                                    key={location.title}

                                    sx={{
                                        p: 3.5,

                                        borderRadius: "22px",

                                        bgcolor: "#FFFFFF",

                                        border:
                                            "1px solid rgba(19,25,33,.08)",

                                        transition: ".35s ease",

                                        cursor: "pointer",

                                        "&:hover": {

                                            transform:
                                                "translateY(-6px)",

                                            borderColor:
                                                "#D4AF37",

                                            boxShadow:
                                                "0 18px 45px rgba(15,23,42,.08)",
                                        },
                                    }}
                                >

                                    <Box
                                        sx={{
                                            display: "flex",

                                            justifyContent:
                                                "space-between",

                                            alignItems: "center",

                                            mb: 2,
                                        }}
                                    >

                                        <Typography
                                            sx={{
                                                fontFamily:
                                                    "'Playfair Display', serif",

                                                color: "#131921",

                                                fontSize: "1.45rem",

                                                fontWeight: 500,
                                            }}
                                        >
                                            {location.title}
                                        </Typography>

                                        <Box
                                            sx={{
                                                px: 2,

                                                py: .7,

                                                borderRadius:
                                                    "999px",

                                                bgcolor:
                                                    "rgba(212,175,55,.12)",

                                                color: "#58181A",

                                                fontWeight: 600,

                                                fontSize: ".82rem",
                                            }}
                                        >
                                            {location.time}
                                        </Box>

                                    </Box>

                                    <Typography
                                        sx={{
                                            color:
                                                "rgba(19,25,33,.70)",

                                            lineHeight: 1.9,

                                            fontSize: ".95rem",
                                        }}
                                    >
                                        {location.description}
                                    </Typography>

                                </Box>

                            ))}
                        </Box>

                    </Grid>

                </Grid>
                {/* Closing Quote */}

                <Box
                    sx={{
                        mt: {
                            xs: 10,
                            md: 14,
                        },

                        textAlign: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily:
                                "'Playfair Display', serif",

                            color: "#58181A",

                            fontStyle: "italic",

                            lineHeight: 1.6,

                            fontSize: {
                                xs: "1.6rem",
                                md: "2.5rem",
                            },

                            maxWidth: "850px",

                            mx: "auto",

                            mb: 7,
                        }}
                    >
                        "Luxury isn't only about where you live—
                        it's about everything that's within reach."
                    </Typography>

                    {/* Connectivity Strip */}

                    <Box
                        sx={{
                            display: "flex",

                            justifyContent: "center",

                            flexWrap: "wrap",

                            gap: 2,

                            maxWidth: "1000px",

                            mx: "auto",
                        }}
                    >
                        {[
                            "Maa Narmada",
                            "Mandaleshwar",
                            "Maheshwar",
                            "Schools",
                            "Hospitals",
                            "Markets",
                            "Highway Connectivity",
                        ].map((item) => (

                            <Box
                                key={item}

                                sx={{
                                    px: 3,

                                    py: 1.4,

                                    borderRadius: "999px",

                                    bgcolor: "#F8F8F8",

                                    border:
                                        "1px solid rgba(19,25,33,.08)",

                                    transition: ".35s ease",

                                    "&:hover": {

                                        transform:
                                            "translateY(-3px)",

                                        borderColor:
                                            "#D4AF37",

                                        bgcolor: "#FFFDF8",

                                        boxShadow:
                                            "0 12px 30px rgba(15,23,42,.06)",
                                    },
                                }}
                            >

                                <Typography
                                    sx={{
                                        color: "#131921",

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

            </Container>

        </Box>

    );
}

export default Location;