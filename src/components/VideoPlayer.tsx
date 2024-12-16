const VideoPlayer = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <video controls autoPlay className="w-full h-full max-w-4xl">
        <source src="https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/11i28mz8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
