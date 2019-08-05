import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { tittle: "No Scrubs", duration: "4:05" },
    { tittle: "Allo", duration: "2:05" },
    { tittle: "chal chaiya", duration: "3:05" },
    { tittle: "Sanam", duration: "1:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
