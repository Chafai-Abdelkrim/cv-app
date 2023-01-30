import Form from './Form';
import uniqid from 'uniqid';

const inputFields = [
  {
    label: 'First Name',
    placeholder: 'Your First Name',
  },
  {
    label: 'Last Name',
    placeholder: 'Your Last Name',
  },
  {
    label: 'Professional Title',
    placeholder: 'Your Profession',
  },
  {
    label: 'Profile',
    placeholder: 'I am a Web Developer with special love to React...',
    type: 'textarea',
  },
];
inputFields.forEach((field) => (field.key = uniqid()));

function Info({ data, setData }) {
  const { info } = data;
  const handleInput = (key, value) => {
    setData({ ...data, info: { ...info, [key]: value } });
  };

  return (
    <Form
      className="Info"
      inputFields={inputFields}
      data={info}
      handleInput={handleInput}
    />
  );
}

export default Info;
