import captilize from 'capitalize';

function Detail(props) {
  const { icon, label, capitalized = true } = props;

  if (!label) return;

  return (
    <div className="Detail">
      {icon || <span>*</span>}
      {capitalized ? captilize.words(label) : label}
    </div>
  );
}

export default Detail;
