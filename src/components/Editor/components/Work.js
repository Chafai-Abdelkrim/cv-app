import Experience from './Experience';
import uniqid from 'uniqid';

const inputFields = [
  {
    label: 'Title',
    placeholder: 'Web Developer',
  },
  {
    label: 'Company',
    placeholder: 'AirBnB',
  },
  {
    label: 'From',
    placeholder: '2019',
  },
  {
    label: 'To',
    placeholder: 'Present',
  },
  {
    label: 'Description',
    placeholder: 'I used to work as a web developer in AirBnB...',
    type: 'textarea',
  },
];
inputFields.forEach((field) => (field.key = uniqid()));

function Work({ data, setData }) {
  const setItems = (items) => {
    setData({ ...data, work: items });
  };

  return (
    <Experience
      className="Work"
      items={data.work}
      setItems={setItems}
      inputFields={inputFields}
    />
  );
}

export default Work;