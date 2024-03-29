import { useSelector } from "react-redux";
import { Grid, Container } from "@mui/material";

function Details() {

    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres);

    return (
        <Container>
            {/* <h1>{movie.title}</h1> */}
            <Grid style={{marginTop: '50px'}} container spacing={2}>
                <Grid item xs={12}>
                <h2>{movie.title}</h2>
                </Grid>
                <Grid item sm={6}>
                    <p style={{textAlign: 'left'}} >{movie.description}</p>
                    <h3 style={{ textAlign: 'left' }}>Genres:</h3>
                    <ul style={{ listStyle: 'none', textAlign: 'left', paddingLeft: 0 }}>
                        {
                            genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))
                        }
                    </ul>
                </Grid>
                <Grid item sm={6}>
                    <img style={{ width: 'inherit', height: 'auto' }} src={movie.poster} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Details;