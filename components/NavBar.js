import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="NavContainer">
          <Link href="/">
            <div className="Home">HOME</div>
          </Link>
          <Link href="/about">
            <div className="About">ABOUT</div>
          </Link>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            width: 100vw;
            height: 70px;
          }
          .NavContainer {
            padding: 0px 20px 0px 20px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: solid 1px rgba(0, 0, 0, 0.2);
          }
          .Home,
          .About {
            padding: 10px;
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            color: rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </>
  );
}
