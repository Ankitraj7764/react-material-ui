import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container,
    TextField,
    Card,
    CardContent,
    Typography,
    Grid,
    CardMedia,
    CircularProgress,
    CardActions,
    Button
} from '@mui/material';
import { Box } from '@mui/system';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the posts', error);
                setLoading(false);
            });
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center" style={{ margin: '20px 0' }}>
                Posts
            </Typography>
            <TextField
                label="Search Posts"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '30px' }}
            />
            <Grid container spacing={3}>
                {filteredPosts.map(post => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <Card style={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`https://source.unsplash.com/random?sig=${post.id}`}
                                alt={post.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {post.body}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PostList;
