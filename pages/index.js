import Link from "next/link";

export default function Home({ results }) {
  return (
    <>
      <div className="bookListMainConatiner">
        <div className="bookListTitle">
          The New York Times Best Seller Explorer
        </div>
        <div className="bookListConatiner">
          {results.map((listData, index) => (
            <Link href={`/list/${listData.list_name_encoded}`} key={index}>
              <div className="bookList">
                {listData.display_name}
                {"  ->"}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .bookListMainConatiner {
          width: 60%;
          border-left: 1px solid rgba(0, 0, 0, 0.2);
          border-right: 1px solid rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bookListConatiner {
          padding: 0px 80px 0px 80px;
        }
        .bookList {
          padding: 15px;
          margin: 20px;
          border: 1px solid salmon;
          width: fit-content;
          display: inline-block;
          font-size: 20px;
        }
        .bookListTitle {
          font-size: 82px;
          padding: 50px;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/getbooklist")
  ).json();
  return {
    props: { results },
  };
}
