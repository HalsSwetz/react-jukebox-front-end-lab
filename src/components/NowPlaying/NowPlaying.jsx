
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

    {props.selected.coverArtUrl && (
    <div className="cover-art-container">
        <img
        src={props.selected.coverArtUrl}
        alt={`Cover art for ${props.selected.title}`}
        style={{ maxWidth: '200px', marginBottom: '10px' }}
        />
    </div>
    )}
    {props.selected.soundClipUrl && (
    <div className="audio-clip">
        <audio controls>
            <source src={props.selected.soundClipUrl} type="audio/mpeg" />
            Your browser doesn't support the audio element.
        </audio>
    </div>
    )}

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