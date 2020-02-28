import React, { useState, FC } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      margin: '0 auto',
      overflow: 'hidden'
    }
  })
);
type StateType = {
  translate: number;
  transition: number;
  activeIndex: number;
};

interface IProps {
  slides: string[];
  autoPlay: boolean;
}

const Slider: FC<IProps> = ({ slides, autoPlay }) => {
  const classes = useStyles();
  const [state, setState] = useState<StateType>({
    translate: 0,
    transition: 1,
    activeIndex: 0
  });

  const getWidth = () => window.innerWidth;

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    });
  };
  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    });
  };

  return (
    <div className={classes.root}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide: string, i: number) => (
          <Slide key={slide} content={slide} width={getWidth()} />
        ))}
      </SliderContent>
      {autoPlay ? null : (
        <>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </>
      )}
    </div>
  );
};

export default Slider;
