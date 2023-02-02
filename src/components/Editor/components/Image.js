import { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

function Image({ data, setData }) {
  const { image } = data;

  const updateImageState = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setData({
          ...data,
          image: {
            ...data.image,
            imageUrl: e.target.result,
          },
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleZoom = (e) => {
    const scale = e.target.value / 50;
    setData({
      ...data,
      image: {
        ...data.image,
        imageScale: scale,
      },
    });
    
  };

  const handlePositionChange = (position) => {
    setData({
      ...data,
      image: {
        ...data.image,
        imagePosition: position,
      },
    });
  };

  const editorRef = useRef(null);
  const updateImage = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      const dataUrl = canvas.toDataURL();
      setData({
        ...data,
        image: {
          ...data.image,
          canvas: dataUrl,
        },
      });
    }
  };

  const setEditorRef = (editor) => {
    editorRef.current = editor;
  };

  return (
    <form className="image-form">
      <AvatarEditor
        ref={setEditorRef}
        image={image.imageUrl}
        width={250}
        height={250}
        border={0}
        color={[255, 255, 255, 0.6]}
        scale={image.imageScale}
        rotate={0}
        position={image.imagePosition}
        borderRadius={500}
        className={'image-editor'}
        onImageReady={updateImage}
        onPositionChange={handlePositionChange}
      />

      <div className="slider-container">
        <input
          className="slider"
          type="range"
          min="25"
          max="100"
          defaultValue="62"
          onChange={handleZoom}
        />
      </div>

      <input
        className="image-input"
        id="imageInput"
        name="imageInput"
        type="file"
        onChange={updateImageState}
      />

      <label className="image-confirm" htmlFor="imageInput">
        Upload
      </label>
    </form>
  );
}

export default Image;
