import { useEffect } from 'react';
import { useWindowSize } from '@react-hook/window-size';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Zoom from './components/Zoom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import clamp from '../../utils/clamp';
import '../../styles/Preview.css';

const previewWidthPercent = 0.55;
const resumeWidth = 950;
const resumeHeight = 1300;
const minScale = 0.35;
const maxScale = 1.5;

function Preview(props) {
  const { data, screenshotRef, transformRef, state } = props;
  const { info, contact, education, work, skills } = data;

  const [windowWidth, windowHeight] = useWindowSize();

  const getScale = () => {
    const isBigScreen = windowWidth > 1000;
    const scaleBasedOnWidth =
      (windowWidth * (isBigScreen ? previewWidthPercent : 1)) / resumeWidth;
    const scaleBasedOnHeight = windowHeight / resumeHeight;
    const scale = Math.min(scaleBasedOnWidth, scaleBasedOnHeight);

    return clamp(minScale, scale, maxScale);
  };

  useEffect(() => {
    transformRef.current?.centerView(getScale());
  }, [windowWidth, windowHeight]);

  return (
    <div className={`Preview ${state}`}>
      <Zoom transformRef={transformRef} />
      <TransformWrapper
        ref={transformRef}
        minScale={minScale}
        maxScale={maxScale}
        initialScale={getScale()}
        wheel={{ step: 0.1 }}
        centerOnInit
      >
        <TransformComponent
          wrapperClass={`PreviewContainer`}
          contentClass="PreviewContent"
        >
          <div className="Resume" ref={screenshotRef}>
              
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default Preview;
