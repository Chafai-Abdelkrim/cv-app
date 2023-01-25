import { RiZoomOutLine, RiZoomInLine } from 'react-icons/ri';
import Button from '../../Button';

function Zoom({ transformRef }) {
  return (
    <div className="Zoom">
      <Button
        icon={<RiZoomOutLine />}
        title="Zoom Out"
        handleClick={() => transformRef.current?.zoomOut(0.25, 0)}
        alt
      />
      <Button
        icon={<RiZoomInLine />}
        title="Zoom In"
        handleClick={() => transformRef.current?.zoomIn(0.25, 0)}
        alt
      />
    </div>
  );
}

export default Zoom;
