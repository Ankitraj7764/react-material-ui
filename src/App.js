import React from 'react';
import PostList from './PostList';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Post Viewer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <PostList />
            </Container>
        </ThemeProvider>
    );
};

export default App;
