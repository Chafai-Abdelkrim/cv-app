import Input from './Input';
import Button from '../../Button';
import { RiAddLine, RiDeleteBin6Line } from 'react-icons/ri';
import uniqid from 'uniqid';

const maxSkills = 10;
const placeholders = [
  'Teamwork',
  'Time management',
  'Critical thinking',
  'Problem solving',
  'Comunication',
  'Adaptability',
];

function Skills({ data, setData }) {
  const { skills } = data;
  const setSkills = (items) => {
    setData({ ...data, skills: items });
  };

  const createItem = () => {
    const newSkills = [...skills];
    newSkills.push({ key: uniqid() });
    setSkills(newSkills);
  };

  const deleteItem = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleInput = (index, value) => {
    const newSkills = [...skills];
    newSkills[index].name = value;
    setSkills(newSkills);
  };

  return (
    <div className="Container">
      {skills.length < maxSkills && (
        <Button
          className="New"
          icon={<RiAddLine />}
          label="New"
          handleClick={createItem}
          alt
        />
      )}
      <form className="Skills">
        {skills.map(({ key }, i) => {
          return (
            <div className="Skill" key={key}>
              <Input
                id={i}
                placeholder={placeholders[i % placeholders.length]}
                value={skills[i].name}
                handleInput={handleInput}
              />
              <Button
                className="Delete"
                icon={<RiDeleteBin6Line />}
                title="Delete"
                handleClick={() => deleteItem(i)}
                alt
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Skills;
