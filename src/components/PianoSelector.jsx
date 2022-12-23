import { useState } from "react";
import './styles.css';

const PIANO_SELECTOR_STYLE_MAP = {
    small: {
        width: '100px',
        height: '50px'
    },
    medium: {
        width: '150px',
        height: '50px'
    },
    large: {
        width: '200px',
        height: '50px'
    }
};

const PianoSelectorItem = (props) => {
  const { size, sizeLabel, pianoImage, onClick, selectedPiano
} = props

  const isSelected = size === selectedPiano;
  const styleObject = PIANO_SELECTOR_STYLE_MAP[size];
  const [isHovering, setIsHovering] = useState(false);

  const hoverClassName = isHovering ? 'is-hovering' : 'is-not-hovering';
  const hoverTextClassName = isHovering ? 'is-hovering-text' : 'is-not-hovering-text';
  const selectedClassName = isSelected ? 'is-selected' : '';

  return (
    <div 
      className={`${hoverClassName} ${selectedClassName}`}
      style={styleObject}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onClick={() => onClick(size)}
    >
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <label className={`${hoverTextClassName} ${selectedClassName}`}>{sizeLabel}</label>
      </div>
    </div>
  );
};

const toIsSelectedFn = (selectedPiano) => (pianoToCheck) => {
  return !!(selectedPiano === pianoToCheck);
};

export const PianoSelector = (props) => {
  const { onChange } = props;
  const [selectedPiano, setSelectedPiano] = useState();

  const onPianoSelection = (pianoSize) => {
    setSelectedPiano(pianoSize);
    onChange(pianoSize);
  }

  const toIsSelected = toIsSelectedFn(selectedPiano);

  return (
    <div 
      style={{
        display: 'flex', 
        height: '50px', 
        justifyContent: 'space-around',
        marginBottom: '25px'
      }}
      className="piano-selection-wrapper"
    >
      <PianoSelectorItem

        size="small"
        sizeLabel="Small"
        onClick={onPianoSelection}
        selectedPiano={selectedPiano}
      />
      <PianoSelectorItem
        size="medium"
        sizeLabel="Medium"
        onClick={onPianoSelection}
        selectedPiano={selectedPiano}
      />
      <PianoSelectorItem
        size="large"
        sizeLabel="Large"
        onClick={onPianoSelection}
        selectedPiano={selectedPiano}
      />
    </div>
  );
};

export default PianoSelector;
