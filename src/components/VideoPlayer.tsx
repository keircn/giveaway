const VideoPlayer = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <video controls autoPlay className="w-full h-full max-w-4xl">
        <source src="/rickroll.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;