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
  const [activePage, setActivePage] = useState(0);
  const [isPreviewVisible, togglePreviewVisible] = useState(false);

  const autofillBtn = (
    <Button
      icon={<RiEditLine />}
      label="Autofill"
      handleClick={() => {
        autofill();
        setActivePage(editors.length - 1);
      }}
    />
  );
  const saveBtn = (
    <Button icon={<RiSaveLine />} lable="Save" handleClick={saveCV} />
  );

  let editor;
  switch (editors[activePage].name) {
    case 'Info':
      editor = <Info data={data} setData={setData} />;
      break;
    case 'Contact':
      editor = <Contact data={data} setData={setData} />;
      break;
    case 'Education':
      editor = <Education data={data} setData={setData} />;
      break;
    case 'Work':
      editor = <Work data={data} setData={setData} />;
      break;
    case 'Skills':
      editor = <Skills data={data} setData={setData} />;
      break;
  }

  return (
    <div className="Editor">
      <h3>{editors[activePage].name}</h3>
      {editor}
      <Navigator 
        index={activePage}
        setIndex={setActivePage}
        items={editors}
        firstButton={autofillBtn}
        lastButton={saveBtn}
      />
      <GithubButton username='Chafai-Abdelkrim' />
      <Button 
        className='PreviewBtn'
        icon={isPreviewVisible ? <RiCodeLine /> : <RiEyeLine />}
        label={isPreviewVisible ? 'Editor' : 'Preview'}
        handleClick={() => {
          togglePreviewVisible(prevState => !prevState);
          togglePreview();
        }}
      />
    </div>
  );
}


export default Editor;