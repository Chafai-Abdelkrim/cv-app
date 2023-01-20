import { useState } from 'react';
import uniqid from 'uniqid';
import Info from './components/Info';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skill';
import Navigator from './components/Navigator';
import Button from '../Button';
import GithubButton from './components/GithubButton';
import { RiEditLine, RiSaveLine, RiCodeLine, RiEyeLine } from 'react-icons/ri';
import '../../styles/Editor.css';

const editors = [
  { name: 'Info' },
  { name: 'Contact' },
  { name: 'Education' },
  { name: 'Work' },
  { name: 'Skills' },
];
editors.forEach((editor) => (editor.key = uniqid()));

function Editor(props) {
  const { data, setData, autofill, saveCV, togglePreview } = props;
  const [activeEditor, setActiveEditor] = useState(0);
  const [isPreviewVisible, togglePreviewVisible] = useState(false);

  const autofillBtn = (
    <Button
      icon={<RiEditLine />}
      lable="Autofill"
      handleClick={() => {
        autofill();
        setActiveEditor(editors.length - 1);
      }}
    />
  );
  const saveBtn = (
    <Button icon={<RiSaveLine />} lable="Save" handleClick={saveCV} />
  );
}
