import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between bg-slate-900 px-8 py-8 text-white">
    <div className="flex items-center gap-5">
      <img
        src="./img/netflix.png"
        alt=""
        className="w-10 cursor-pointer sm:w-12"
      />
      <a href="">Phim </a>
      <a href="">Truyền Hình</a>
    </div>
    <div>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="cursor-pointer"
      />
    </div>
  </header>
  )
}
