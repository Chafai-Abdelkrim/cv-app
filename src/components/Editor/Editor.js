import { useState } from 'react';
import uniqid from 'uniqid';
import Info from './components/Info';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Navigator from './components/Navigator';
import Button from '../Button';
import GithubButton from './components/GithubButton';
import { RiEditLine, RiSaveLine, RiCodeLine, RiEyeLine } from 'react-icons/ri';
import '../../styles/Editor.css';

const formPages = [
  { name: 'Info' },
  { name: 'Contact' },
  { name: 'Education' },
  { name: 'Work' },
  { name: 'Skills' },
  { name: 'Image' },
];
formPages.forEach((formPage) => (formPage.key = uniqid()));

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
        setActivePage(formPages.length - 1);
      }}
    />
  );
  const saveBtn = (
    <Button icon={<RiSaveLine />} lable="Save" handleClick={saveCV} />
  );

  let formPage;
  switch (formPages[activePage].name) {
    case 'Info':
      formPage = <Info data={data} setData={setData} />;
      break;
    case 'Contact':
      formPage = <Contact data={data} setData={setData} />;
      break;
    case 'Education':
      formPage = <Education data={data} setData={setData} />;
      break;
    case 'Work':
      formPage = <Work data={data} setData={setData} />;
      break;
    case 'Skills':
      formPage = <Skills data={data} setData={setData} />;
      break;
    default:
      formPage = <h1>Something went wrong</h1>;
  }

  return (
    <div className="Editor">
      <h3>{formPages[activePage].name}</h3>
      {formPage}
      <Navigator
        index={activePage}
        setIndex={setActivePage}
        items={formPages}
        firstButton={autofillBtn}
        lastButton={saveBtn}
      />
      <GithubButton username="Chafai-Abdelkrim" />
      <Button
        className="PreviewBtn"
        icon={isPreviewVisible ? <RiCodeLine /> : <RiEyeLine />}
        label={isPreviewVisible ? 'Editor' : 'Preview'}
        handleClick={() => {
          togglePreviewVisible((prevState) => !prevState);
          togglePreview();
        }}
      />
    </div>
  );
}

export default Editor;
