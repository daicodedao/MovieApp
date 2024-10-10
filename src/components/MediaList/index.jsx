import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TABS = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "movie",
    name: "Movie",
  },
  {
    id: "tv",
    name: "TV Show",
  },
];

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState("all");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/${activeTabId}/day`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjBkOGFjZWVmMDM4MjE0MmRkOTE2ZWY5ZDc0Zjc2ZCIsIm5iZiI6MTcyODM0NjM2OC43NTA5OTMsInN1YiI6IjY2ZGQ1ODJjMjRjNDNjNzM4MTlhOWM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s06Yt2M4P6eSTZat2v4XAjvVKQlBGdstktkbRcDKxzA",
      },
    })
      .then(async (response) => {
        const data = await response.json();
        setMediaList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [activeTabId]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex gap-4 rounded border">
          {TABS.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${
                tab.id === activeTabId ? "text-black bg-white" : ""
              }`} // Sửa cú pháp className
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            title={media.title || media.name} // Một số media có `name` thay vì `title`
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
