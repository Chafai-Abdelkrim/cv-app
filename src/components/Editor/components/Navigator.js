import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Button from '../../Button';

function Navigator(props) {
  const {
    index,
    setIndex,
    items,
    firstButton,
    lastButton,
    useDots = true,
  } = props;

  const spacer = <div className="Spacer" />;
  const prevIndex = index - 1;
  const nextIndex = index + 1;

  return (
    <div className="Navigator">
      {(items[prevIndex] && (
        <Button
          icon={<RiArrowLeftSLine />}
          label={items[prevIndex]?.name || 'Previous'}
          handleClick={() => setIndex(prevIndex)}
          alt
        />
      )) ||
        firstButton ||
        spacer}
      {useDots && (
        <div className="Dots">
          {items.map(({ key }, i) => (
            <div
              key={`${key}-dot`}
              className={`Dot ${index === i ? 'active' : ''}`}
              title={items[i].name}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
      {(items[nextIndex] && (
        <Button
          icon={<RiArrowRightSLine />}
          iconPosition="right"
          label={items[nextIndex]?.name || 'Next'}
          handleClick={() => setIndex(nextIndex)}
          alt
        />
      )) ||
        lastButton ||
        spacer}
    </div>
  );
}

export default Navigator;
