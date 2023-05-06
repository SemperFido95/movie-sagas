import { useSelector } from "react-redux";

function Details() {

    const movie = useSelector(store => store.movie);

    return (
        <>
            <h1>{movie.title}</h1>
        </>
    )
}

export default Details;