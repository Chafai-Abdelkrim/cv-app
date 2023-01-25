import capitalize from 'capitalize';

function Info({ info }) {
  const { firstName = '', lastName = '', professionalTitle = '' } = info;

  return (
    <header>
      <h1>
        <span className="firstName">{firstName.toUpperCase()}</span>
        {lastName.toUpperCase()}
      </h1>
      <h2>{capitalize.words(professionalTitle)}</h2>
    </header>
  );
}

export default Info;
