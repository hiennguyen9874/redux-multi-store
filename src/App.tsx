import { useBooksSelector, useBooksDispatch, addBook } from "./store/books";
import { useThemeSelector, useThemeDispatch, setTheme } from "./store/theme";

const App = (): JSX.Element => {
  const books = useBooksSelector((state) => state.books);
  const theme = useThemeSelector((state) => state.theme);
  const bookDispatch = useBooksDispatch();
  const themeDispatch = useThemeDispatch();

  console.log(books);

  console.log(theme);

  return (
    <>
      <div>
        <button
          onClick={() => {
            bookDispatch(addBook("NewBook"));
          }}
        >
          addBook
        </button>

        <button
          onClick={() => {
            themeDispatch(setTheme("NewTheme"));
          }}
        >
          set Theme
        </button>
      </div>
    </>
  );
};

export default App;
