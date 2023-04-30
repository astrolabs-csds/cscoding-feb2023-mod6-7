import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from '@mui/material/Grid';
import FeaturedPost from './FeaturedPost';

function HomeScreen() {
    const featuredPosts = [
        {
            title: 'Featured post',
            date: 'Nov 12',
            description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
    ];

    const footers = [
        {
          title: 'Company',
          description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
          title: 'Features',
          description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
          ],
        },
        {
          title: 'Resources',
          description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
          title: 'Legal',
          description: ['Privacy policy', 'Terms of use'],
        },
    ];
        
    return (
    <React.Fragment>
      {/*AppBar*/}


      {/** Hero */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
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
            Album layout
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>

      {/** Features */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
            {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
            ))}
        </Grid>
       </Container>

      {/** Footer */}

    </React.Fragment>
  );
}

export default HomeScreen;
