import { useState } from 'react';

const TrackForm = (props) => {
    const initialState = {
        title: '',
        artist: '',
        coverArtUrl: '',
        soundClipUrl:'',
    };

const [formData, setFormData] = useState(
    props.selected ? { 
        title: props.selected.title, 
        artist: props.selected.artist,
        coverArtUrl: props.selected.coverArtUrl || '',
        soundClipUrl: props.selected.soundClipUrl || '', 
    } 
    : initialState
    );
    
const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value });
};

const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.selected) {
        props.handleUpdateTrack(formData, props.selected._id);
    } else {
    props.handleAddTrack(formData);
    }
};

return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            />
            <label htmlFor="artist">Artist</label>
            <input
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
            />
            <label htmlFor="coverArtUrl">Cover Art URL</label>
            <input
            id="coverArtUrl"
            name="coverArtUrl"
            value={formData.coverArtUrl}
            onChange={handleChange}
            />
            <label htmlFor="soundClipUrl">Sound Clip URL</label>
            <input
            id="soundClipUrl"
            name="soundClipUrl"
            value={formData.soundClipUrl}
            onChange={handleChange}
            />
            <button type="submit">
                {props.selected ? 'Update Track' : 'Add New Track'}
            </button>
        </form>
    </div>
    );
};

export default TrackForm;