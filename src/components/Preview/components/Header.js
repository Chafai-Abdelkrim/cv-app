import capitalize from 'capitalize';

function Header({ info, image }) {
  const { firstName = '', lastName = '', professionalTitle = '' } = info;
  const { canvas } = image;

  const addImage = (canvas) => {
    if (canvas)
      return <img className="image-placeholder" src={canvas} alt="Avatar" />;
    if (!canvas) return <div className="mage-placeholder"></div>;
  };

  return (
    <header>
      {addImage(canvas)}
      <h1>
        <span className="firstName">{firstName.toUpperCase()}</span>
        {lastName.toUpperCase()}
      </h1>
      <h2>{capitalize.words(professionalTitle)}</h2>
    </header>
  );
}

export default Header;
