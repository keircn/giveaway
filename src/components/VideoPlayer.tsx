const VideoPlayer = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <video controls autoPlay className="w-full h-full max-w-4xl">
        <source src="https://r2.slop.sh/11i28mz8.mp4" type="video/mp4" />
        your browser sucks :c
      </video>
    </div>
  );
};

export default VideoPlayer;
