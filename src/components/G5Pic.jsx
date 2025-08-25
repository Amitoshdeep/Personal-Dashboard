import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function G5Pic() {
  const [ytLink] = useLocalStorage("yt-play", ""); // raw link stored in LS

  // Function to extract playlistId or videoId
  const getEmbedUrl = (link) => {
    if (!link) return "";

    try {
      const url = new URL(link);

      // 🎵 Check if it's a playlist
      if (url.searchParams.get("list")) {
        const playlistId = url.searchParams.get("list");
        return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
      }

      // 🎵 Otherwise treat as single video
      if (url.searchParams.get("v")) {
        const videoId = url.searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // 🎵 If link is already embed format or shortened (youtu.be/VIDEOID)
      if (url.hostname.includes("youtu.be")) {
        const videoId = url.pathname.split("/")[1];
        return `https://www.youtube.com/embed/${videoId}`;
      }

      return "";
    } catch (e) {
      console.error("Invalid YouTube URL:", link);
      return "";
    }
  };

  const embedUrl = getEmbedUrl(ytLink);

  return (
    <div className="bg-white rounded-4xl w-full h-full flex items-center justify-center overflow-hidden">
      {embedUrl ? (
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-gray-500">No YouTube link saved</p>
      )}
    </div>
  );
}

export default G5Pic;
