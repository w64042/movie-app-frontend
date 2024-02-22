
const Element = (...props: any) => {
  const el = props[0].movie;

  return (
        <div>
            <h2>{el.name}</h2>
        </div>
  );
};

export default Element;
