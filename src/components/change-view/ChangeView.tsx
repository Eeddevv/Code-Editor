import { memo } from 'react';
import styled from 'styled-components';
import useEditorContext from '../../context/hooks/useEditorContext';
import { editorPlacement } from '../../constants/editor';

const Button = styled.button`
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ChangeView = memo(() => {
  const { editorConfig, setEditorConfig } = useEditorContext();

  const handleChangePlacement = () => {
    setEditorConfig({
      ...editorConfig,
      placement:
        editorConfig.placement === editorPlacement.LEFT
          ? editorPlacement.RIGHT
          : editorPlacement.LEFT,
    });
  };

  return (
    <Button onClick={handleChangePlacement}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
      >
        <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm400 0q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600Zm160-640H600v560h160v-560Z' />
      </svg>
    </Button>
  );
});

export default ChangeView;
