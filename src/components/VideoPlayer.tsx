export default function VideoPlayer() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <video controls autoPlay className="w-full h-full max-w-4xl">
        <source src="https://r2.keircn.com/11i28mz8(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
