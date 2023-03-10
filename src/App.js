import { createRef, useState } from 'react';
import { useTransition } from 'react-transition-state';
import { useScreenshot } from 'use-react-screenshot';
import { saveAs } from 'file-saver';
import uniqid from 'uniqid';
import Editor from './components/Editor';
import Preview from './components/Preview';
import generateData from './utils/generateData';
import './styles/App.css';

function App() {
  const createItems = (count) => {
    return Array(count)
      .fill()
      .map(() => ({ key: uniqid() }));
  };

  const [data, setData] = useState({
    info: {},
    contact: {},
    education: createItems(1),
    work: createItems(1),
    skills: createItems(3),
    image: {
      imageUrl:
        'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
      imagePosition: { x: 0.5, y: 0.5 },
      imageScale: 1,
      canvas: '',
    },
  });

  const screenshotRef = createRef(null);
  const transformRef = createRef(null);
  const [, takeScreenshot] = useScreenshot({ type: 'image/png', quality: 1.0 });
  const [previewState, togglePreview] = useTransition({ timeout: 300 });
  const saveCV = () => {
    transformRef.current?.centerView(1, 0);
    takeScreenshot(screenshotRef.current).then(saveAs);
  };

  return (
    <div className="App">
      <Editor
        data={data}
        setData={setData}
        autofill={() => setData(generateData())}
        saveCV={saveCV}
        togglePreview={togglePreview}
      />
      <Preview
        data={data}
        screenshotRef={screenshotRef}
        transformRef={transformRef}
        state={previewState.status}
      />
    </div>
  );
}

export default App;
