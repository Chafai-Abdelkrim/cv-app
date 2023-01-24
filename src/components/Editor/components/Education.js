import uniqid from 'uniqid';
import Experience from './Experience';

const inputFields = [
  {
    label: 'Degree',
    placeholder: 'Bachelor of CS',
  },
  {
    label: 'University',
    placeholder: 'Massachusetts Institute of Technology',
  },
  {
    label: 'From',
    placeholder: '2014',
  },
  {
    label: 'To',
    placeholder: '2018',
  },
];
inputFields.forEach((field) => (field.key = uniqid()));

function Education({ data, setData }) {
  const setItems = (items) => {
    setData({ ...data, education: items });
  };

  return (
    <Experience
      className="Education"
      inputFields={inputFields}
      items={data.education}
      setItems={setItems}
    />
  );
}

export default Education;
