
const NowPlaying = (props) => {
    if (!props.selected) {
        return (
            <div className="details-container">
                <h1>No Track Playing</h1>
            </div>
        );
    }

return (
    <div className="details-container">
        <h1>Now Playing:</h1>
        <h2>{props.selected.title}</h2>
        <h3>Artist: {props.selected.artist}</h3>
        <div className="button-container">
            <button onClick={() => props.handleFormView(props.selected)}>
                Edit Track</button>
            <button onClick={() => props.handleDeleteTrack(props.selected._id)}>
                Delete Track</button>

        </div>
    </div>
    );
};

export default NowPlaying;