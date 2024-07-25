const HomePage: React.FC = () => {
  return (
    <>
      <div className="homePageBlock">
        <div className="titleBlock">
          <img className="bigLogo" src="img/logo.svg" alt="Logo du blindtest" />
          <h1 className="primaryTitle">
            Plateforme <br />
            de blindtest
          </h1>
        </div>
        <div className="contentBlock">
          <p className="presentation presentationContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            molestias vitae in excepturi ex porro, eius veniam dolorem labore ab
            quos, laboriosam tempore consectetur alias sunt, omnis quo officiis
            quasi!
          </p>
          <button className="goBlindtest buttonText bold">En avant !</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
