export default function BookList({ results }) {
  const categoriesData = results;
  console.log(categoriesData);
  return (
    <>
      <div className="bookListMainContainer">
        <h2>{categoriesData.display_name}</h2>
        <div className="bookContainer">
          {categoriesData.books.map((book) => (
            <div className="book" key={book.rank}>
              {book.title}
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .bookListMainContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100vh;
          }
          .bookContainer {
            width: 50%;
            height: 100vh;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 20px;
          }
          .book {
            width: 200px;
            height: 300px;
            border: 1px solid black;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
}

export async function getServerSideProps(context) {
  const booklist = context.params.booklist;
  const { results } = await (
    await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${booklist}`
    )
  ).json();
  return {
    props: { results },
  };
}
