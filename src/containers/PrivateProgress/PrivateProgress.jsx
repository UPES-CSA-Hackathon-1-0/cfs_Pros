import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrivateSidebar from '../PrivateHeader/PrivateSidebar';
import { TextField } from '@mui/material';

const theme = createTheme();

export default function PrivateProgress() {
    const [desc, setDesc] = React.useState("")
    const [heading, setHeading] = React.useState("")

    const cards = [];

    const addProgress = () => {

    }

    console.log(cards)

    return (
        <div style={{ display: "flex" }}>
            <PrivateSidebar />
            <div style={{ width: "100%" }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="header">
                        <img src="photos/homebox.png" alt="homebox-logo" style={{ width: "50px" }} />
                        <h3>Homebox</h3>
                    </div>
                    <div style={{ width: "100%" }}>
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                pb: 6,
                            }}
                        >
                            <Container maxWidth="sm">
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    align="center"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    Your Progress Tracker
                                </Typography>
                                <TextField id="outlined-basic" label="Add Heading" variant="outlined" style={{ marginBottom: "20px" }} value={heading} onChange={(e) => setHeading(e.target.value)} />
                                <TextField id="outlined-basic" label="Add Description" variant="outlined" fullWidth value={desc} onChange={(e) => setDesc(e.target.value)} />
                                <Stack
                                    sx={{ pt: 4 }}
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button variant="contained" onClick={addProgress}>Add Progress</Button>
                                </Stack>
                            </Container>
                        </Box>
                        <Container sx={{ py: 8 }} maxWidth="md">
                            {/* End hero unit */}
                            <Grid container spacing={4}>
                                {cards.map((card) => (
                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                        <Card
                                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                        >
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    asdasd
                                                </Typography>
                                                <Typography>
                                                    asd
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">View</Button>
                                                <Button size="small">Edit</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>
                </ThemeProvider>
            </div>
        </div>
    );
}