export default function Menu({ onSelectVideo, videoValues }) {
  return (
    <form onClick={(event) => onSelectVideo(event.target.value)}>
      {videoValues.map((value, id) => (
        <div className="video-inputs">
          <input type="radio" key={id} name="src" value={value} />
          {value}
        </div>
      ))}
    </form>
  );
}
