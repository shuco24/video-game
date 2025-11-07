import { useState } from "react";
import GenresList from "./components/GenresList";
import useGenres from "./hooks/useGenres";
import useGames from "./hooks/useGames";
import GameCard from "./components/GameCard";
import "./App.css";
import usePlatforms from "./hooks/usePlatforms";
import DarkModeSwitch from "./components/DarkModeSwitch";
import OrderBySelect from "./components/OrderBySelect";
import type Game from "./models/Game";
import { sort } from "./utils/sortGames";
import { Button, HStack } from "@chakra-ui/react";

function App() {
  const [genreSelected, setGenreSelected] = useState<number>(0);
  const [sortedBy, setSortedBy] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const sortOptions: { id: string; text: string }[] = [
    { id: "name", text: "Name" },
    { id: "score", text: "Score" },
  ];

  const {
    elements: games,
    error: errorInGames,
    isLoading: isLoadingGames,
  } = useGames();

  const {
    elements: platforms,
    error: errorInPlatforms,
    isLoading: isLoadingPlatforms,
  } = usePlatforms();

  const {
    elements: genres,
    error: errorInGenres,
    isLoading: isLoadingGenres,
  } = useGenres();

  var filteredGames =
    genreSelected === 0
      ? games
      : games.filter((game) =>
          game.genres?.some((genre) => genre.id === genreSelected)
        );

  filteredGames =
    sortedBy === ""
      ? filteredGames
      : sort<Game>(filteredGames, sortedBy as keyof Game);

  document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "");

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col">logos</div>
        <div className="col-auto">
          <DarkModeSwitch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <GenresList
            title="Genres"
            genresList={genres}
            onSelect={setGenreSelected}
          />
        </div>
        <div className="col">
          <div  className="row mb-3">
            <h2>Games</h2>
                <HStack>
                   <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
          </div>
          <div className="row mb-3">
            <OrderBySelect
              onChange={(option) => setSortedBy(option)}
              options={sortOptions}
            />
          </div>
          <div className="row">
            <div className="games-grid">
              {filteredGames &&
                filteredGames.map((game) => (
                  <GameCard game={game} key={game.id} platforms={platforms} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
