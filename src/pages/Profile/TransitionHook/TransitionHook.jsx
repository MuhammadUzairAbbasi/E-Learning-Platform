import * as React from 'react';
import PropTypes from 'prop-types';
import {
  TransitionContext,
  useTransitionStateManager,
  useTransitionTrigger,
} from '@mui/base/useTransition';
import { styled } from '@mui/system';

const grey = {
  200: '#F5F5F5',
  300: '#EEEEEE',
  400: '#E0E0E0',
  500: '#9E9E9E',
  600: '#757575',
  700: '#616161',
};

const ToggleButton = styled('button')(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${grey[300]};
    padding: 8px 16px;
    border-radius: 8px;
    color: ${grey[700]};
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid ${grey[300]};
    box-shadow: 0 2px 1px ${
      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${grey[400]}, inset 0 -2px 1px ${grey[500]};
    display: block;
    width: 100%; // Ensures button takes full width of its container

    &:hover {
      background-color: ${grey[400]};
      color: ${grey[700]};
    }

    &:active {
      background-color: ${grey[500]};
      box-shadow: none;
      transform: scale(0.99);
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? grey[200] : grey[300]};
      outline: none;
    }

    @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 6px 12px;
    }
`,
);

const Content = styled('div')`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
`;

const Root = styled('div')`
  max-width: 700px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default function TransitionHooks({ title, content }) {
  return (
    <Trivia label={title}>
      <SlideDown>{content}</SlideDown>
    </Trivia>
  );
}

TransitionHooks.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

function Trivia(props) {
  const { label, children } = props;
  const [open, setOpen] = React.useState(false);
  const { contextValue } = useTransitionTrigger(open);
  const containerId = React.useId();

  return (
    <Root>
      <ToggleButton
        type="button"
        aria-controls={containerId}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
      </ToggleButton>
      <TransitionContext.Provider value={contextValue}>
        <Content id={containerId} aria-hidden={!open}>
          {children}
        </Content>
      </TransitionContext.Provider>
    </Root>
  );
}

const SlideDownOuterWrapper = styled('div')`
  display: grid;
  transition: grid-template-rows 200ms ease-in-out;
  grid-template-rows: 0fr;

  &.expanded {
    grid-template-rows: 1fr;
  }
`;

const SlideDownInnerWrapper = styled('div')`
  overflow: hidden;
`;

function SlideDown(props) {
  const { children } = props;
  const { requestedEnter, onExited } = useTransitionStateManager();

  return (
    <SlideDownOuterWrapper
      className={requestedEnter ? 'expanded' : ''}
      onTransitionEnd={(event) => {
        if (event.propertyName === 'grid-template-rows') {
          if (!requestedEnter) {
            onExited();
          }
        }
      }}
    >
      <SlideDownInnerWrapper>{children}</SlideDownInnerWrapper>
    </SlideDownOuterWrapper>
  );
}

SlideDown.propTypes = {
  children: PropTypes.node.isRequired,
};
