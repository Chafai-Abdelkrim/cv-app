import Detail from './Detail';
import { RiCheckFill } from 'react-icons/ri';

function Skills({ skills }) {
  return (
    <section className="Skills">
      <h3>SKILLS</h3>
      {skills.map(({ name, key }) => {
        return <Detail key={key} icon={<RiCheckFill />} label={name} capitalized={true} />;
      })}
    </section>
  );
}

export default Skills;
