import { ElementStyled } from "./views/moviesAndSeries/ElementStyled";

const Element = (...props: any) => {
  const el = props[0].movie;

  return (
    <ElementStyled href={`#/movies/${el.title}`}>
      <img src='/imgs/no-image.png' alt={`okładka filmu ${el.title}`} />
      <h2>{el.title}</h2>
      <p>{el.description}</p>
      {el.year && <p>Rok produkcji: {el.year}</p>}
      {el.runtime && <p>Długość: {Math.round(el.runtime / 60)} min</p>
      }
    </ElementStyled>
  );
};

export default Element;
