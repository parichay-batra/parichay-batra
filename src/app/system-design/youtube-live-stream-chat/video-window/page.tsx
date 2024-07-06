const VideoWindow = () => {
  return (
    <div className="p-4">
      <iframe
        width="800"
        height="600"
        src="https://www.youtube.com/embed/16y1AkoZkmQ?si=dlg-zolROz7Xh6fF"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoWindow;
