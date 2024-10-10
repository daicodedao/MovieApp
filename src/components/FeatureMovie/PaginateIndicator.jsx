// import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Tìm vị trí của phim hiện tại
  //     const currentIndex = movies.findIndex((movie) => movie.id === activeMovieId);
  //     // Xác định phim tiếp theo, quay lại phim đầu tiên nếu đến cuối danh sách
  //     const nextIndex = (currentIndex + 1) % movies.length;
  //     setActiveMovieId(movies[nextIndex].id);
  //   }, 3000); // 5000ms = 5 giây

  //   return () => clearInterval(interval); // Dọn dẹp khi component unmount
  // }, [movies, activeMovieId, setActiveMovieId]);

  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            onClick={() => setActiveMovieId(movie.id)}
            key={movie.id}
            className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
