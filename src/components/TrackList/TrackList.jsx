const TrackList = (props) => {

    return (
        <div className="sidebar-container">
          <h1>Track List</h1>
          <div className="list-container">
            {!props.tracks.length ? (
              <h2>No tracks Yet!</h2>
            ) : (
              <ul>
                {props.tracks.map((track) => (
                  <li key={track._id}
                  style={{ cursor: 'pointer', color: "#646CFF" }}
                  onClick={() => props.handleSelect(track)}
                  >
                    {track.title} by {track.artist}

                    {/* lab seems to say to put these buttons, but they look a little funny here */}
                    <div className="track-buttons">
                        <button onClick={() => props.handleFormView(track)}>Edit</button>
                        <button onClick={() => props.handleDeleteTrack(track._id)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button onClick={props.handleFormView}>
            {props.isFormOpen ? 'Close Form' : 'New Track'}
          </button>
        </div>
      );

} ;

export default TrackList;