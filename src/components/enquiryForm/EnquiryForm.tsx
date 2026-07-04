import {
    Box,
    Button,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

interface EnquiryFormProps {
    onClose?: () => void;
}

function EnquiryForm({ onClose }: EnquiryFormProps) {   
    return (
        <Paper
            
        elevation={0}
        sx={{
            width: "100%",
            maxWidth: 390,

            borderRadius: "32px",

            overflow: "hidden",

            p: {
            xs: 3,
            md: 3,
            },

            bgcolor: "#FFFFFF",

            border: "1px solid rgba(212,175,55,.15)",

            boxShadow: "0 30px 70px rgba(0,0,0,.18)",

            transition: ".35s",

            "&:hover": {
            transform: "translateY(-6px)",

            boxShadow: "0 45px 90px rgba(0,0,0,.22)",
            },
        }}
        >
            <form
                action="https://formsubmit.co/jatinrana0044@gmail.com"
                method="POST"
            >

            <input
                type="hidden"
                name="_subject"
                value="New Natraj Retreat Site Visit Enquiry"
            />

            <input
                type="hidden"
                name="_captcha"
                value="false"
            />

            <input
                type="hidden"
                name="_template"
                value="table"
            />

            <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting Natraj Retreat. We have successfully received your enquiry. Our team will get in touch with you shortly to schedule your visit."
            />

            <input
                type="hidden"
                name="_next"
                value="http://localhost:5173"
            />


        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: 0.5,
            }}
        >
            <Typography
                onClick={onClose}
                sx={{
                    
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    lineHeight: 1,
                    color: "#777",

                    "&:hover": {
                        color: "#131921",
                    },
                }}
            >
                ×
            </Typography>
        </Box>

        {/* Header */}

        <Typography
            sx={{
            color: "#D4AF37",

            textTransform: "uppercase",

            letterSpacing: "3px",

            fontWeight: 700,

            fontSize: ".82rem",

            mb: 1.2,
            }}
        >
            Schedule A Visit
        </Typography>

        <Typography
            sx={{
            fontFamily: "'Playfair Display', serif",

            color: "#131921",

            fontWeight: 500,

            lineHeight: 1.15,

            fontSize: {
                xs: "2rem",
                md: "2.15rem",
            },

            mb: 1,
            }}
        >
            Schedule Your
            <br />
            Exclusive Visit
        </Typography>

        <Typography
            sx={{
            color: "rgba(19,25,33,.68)",

            fontSize: ".98rem",

            lineHeight: 1.7,

            mb: 2,
            }}
        >
            Reserve a private guided tour and
            experience the timeless elegance of
            Natraj Retreat firsthand.
        </Typography>

        <Stack spacing={1.6}>
            <TextField
            fullWidth
            name="Full Name"
            label="Full Name"
            variant="outlined"
            required
            sx={{
                "& .MuiOutlinedInput-root": {
                height: 50,

                borderRadius: "14px",

                bgcolor: "#FAFAFA",

                transition: ".3s",

                "& input": {
                    fontSize: ".95rem",
                },

                "& fieldset": {
                    borderColor: "rgba(19,25,33,.08)",
                },

                "&:hover fieldset": {
                    borderColor: "#D4AF37",
                },

                "&.Mui-focused fieldset": {
                    borderWidth: "2px",

                    borderColor: "#58181A",
                },
                },
            }}
            />

            <TextField
            fullWidth
            name="Mobile Number"
            label="Mobile Number"
            variant="outlined"
            required
            sx={{
                "& .MuiOutlinedInput-root": {
                height: 50,

                borderRadius: "14px",

                bgcolor: "#FAFAFA",

                transition: ".3s",

                "& input": {
                    fontSize: ".95rem",
                },

                "& fieldset": {
                    borderColor: "rgba(19,25,33,.08)",
                },

                "&:hover fieldset": {
                    borderColor: "#D4AF37",
                },

                "&.Mui-focused fieldset": {
                    borderWidth: "2px",

                    borderColor: "#58181A",
                },
                },
            }}
            />

            <TextField
            fullWidth
            name="Email Address"
            type="email"
            label="Email Address"
            variant="outlined"
            required
            sx={{
                "& .MuiOutlinedInput-root": {
                height: 50,

                borderRadius: "14px",

                bgcolor: "#FAFAFA",

                transition: ".3s",

                "& input": {
                    fontSize: ".95rem",
                },

                "& fieldset": {
                    borderColor: "rgba(19,25,33,.08)",
                },

                "&:hover fieldset": {
                    borderColor: "#D4AF37",
                },

                "&.Mui-focused fieldset": {
                    borderWidth: "2px",

                    borderColor: "#58181A",
                },
                },
            }}
            />
            <FormControl fullWidth>
            <InputLabel>Purpose of Buying</InputLabel>

            <Select
                name="Purpose of Buying"
                label="Purpose of Buying"
                required
                defaultValue=""
                MenuProps={{
                    disablePortal: true,
                    slotProps: {
                        paper: {
                            sx: {
                                zIndex: 9999,
                                maxHeight: 250,
                            },
                        },
                    },
                }}
                sx={{
                    height: 50,

                    borderRadius: "14px",

                    bgcolor: "#FAFAFA",

                    "& fieldset": {
                        borderColor: "rgba(19,25,33,.08)",
                    },

                    "&:hover fieldset": {
                        borderColor: "#D4AF37",
                    },

                    "&.Mui-focused fieldset": {
                        borderWidth: "2px",

                        borderColor: "#58181A",
                    },
                }}
            >
            
                <MenuItem value="">
                Select Purpose
                </MenuItem>

                <MenuItem value="investment">
                Investment
                </MenuItem>

                <MenuItem value="retirement">
                Retirement Home
                </MenuItem>

                <MenuItem value="weekend">
                Weekend Home
                </MenuItem>

                <MenuItem value="self">
                Self Use
                </MenuItem>
            </Select>
            </FormControl>

            <Divider
            sx={{
                borderColor: "rgba(19,25,33,.08)",

                my: 0.5,
            }}
            />

            <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
                py: 1.5,

                borderRadius: "999px",

                background:
                "linear-gradient(135deg,#6A1B1D,#58181A)",

                color: "#FFFFFF",

                textTransform: "none",

                fontWeight: 600,

                fontSize: "1rem",

                letterSpacing: ".4px",

                boxShadow:
                "0 18px 40px rgba(88,24,26,.30)",

                transition: "all .35s ease",

                "&:hover": {
                background:
                    "linear-gradient(135deg,#7A2023,#58181A)",

                transform: "translateY(-3px)",

                boxShadow:
                    "0 24px 50px rgba(88,24,26,.40)",
                },
            }}
            >
            Reserve Your Visit →
            </Button>

            <Typography
            sx={{
                textAlign: "center",

                fontSize: ".78rem",

                color: "rgba(19,25,33,.55)",

                lineHeight: 1.8,

                mt: 0,
            }}
            >
            No spam. Your information remains private and
            will only be used to schedule your visit.
            </Typography>

        </Stack>
            </form>
        </Paper>
    );
}

export default EnquiryForm;