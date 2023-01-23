import Form from './Form';
import uniqid from 'uniqid';

const inputFields = [
  {
    label: 'Website',
    placeholder: 'something.com',
  },
  {
    label: 'Email',
    placeholder: 'something@gmail.com',
  },
  {
    label: 'Location',
    placeholder: 'New York, NY',
  },
  {
    label: 'Phone',
    placeholder: '000-000-0000',
  },
];
inputFields.forEach((field) => (field.key = uniqid()));

function Contact({ data, setData }) {
  const { contact } = data;
  const handleInput = (key, value) => {
    setData({ ...data, contact: { ...contact, [key]: value } });
  };

  return (
    <Form
      className="Contact"
      inputFields={inputFields}
      data={contact}
      handleInput={handleInput}
    />
  );
}

export default Contact;
