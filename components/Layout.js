import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="homeContainer">{children}</div>
      <style jsx>
        {`
          .homeContainer {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
