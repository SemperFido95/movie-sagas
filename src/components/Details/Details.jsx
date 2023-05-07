import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

function Details() {

    const movie = useSelector(store => store.movie);

    return (
        <>
            {/* <h1>{movie.title}</h1> */}
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <h2>{movie.title}</h2>
                    <p style={{textAlign: 'left'}} >{movie.description}</p>
                </Grid>
                <Grid item sm={6}>
                    <img style={{ width: 'inherit', height: 'auto' }} src={movie.poster} />
                </Grid>
            </Grid>
        </>
    )
}

export default Details;