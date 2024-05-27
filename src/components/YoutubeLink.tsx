interface YoutubeLinkProps {
  height: string;
  width: string;
  videoId: string;
}

const YoutubeLink = ({ height, width, videoId }: YoutubeLinkProps) => {
  return (
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        height={height}
        width={width}
        title="youtube video shortcut"
      />
    </div>
  );
};

export default YoutubeLink;
