import Editor from '@monaco-editor/react';
import { HEADER_HEIGHT } from '../../constants/sizes';
import useEditorContext from '../../context/hooks/useEditorContext';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { RESIZE_WIDTH } from '../../constants/editor';
import { editorPlacement } from '../../config/editor.config';

const EditorWrapper = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  position: relative;
  z-index: 1000;
`;

const ResizeHandle = styled.div<{ placement: editorPlacement }>`
  width: ${RESIZE_WIDTH}px;
  background: gray;
  cursor: ew-resize;
  position: absolute;
  right: ${(props) => (props.placement === editorPlacement.RIGHT ? 'auto' : 0)};
  left: ${(props) => (props.placement === editorPlacement.LEFT ? 'auto' : 0)};
  top: 0;
  z-index: 100;
  bottom: 0;
`;

const CodeEditor = () => {
  const { editorConfig, setEditorConfig } = useEditorContext();

  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizing) return;

    if (editorConfig.placement === editorPlacement.LEFT) {
      setEditorConfig({
        ...editorConfig,
        width: event.clientX,
        isResizeNow: true,
      });
    } else {
      setEditorConfig({
        ...editorConfig,
        width: window.innerWidth - event.clientX,
        isResizeNow: true,
      });
    }
  };

  const handleMouseUp = (event: MouseEvent) => {
    const correctWidth =
      editorConfig.placement === editorPlacement.LEFT
        ? event.clientX
        : window.innerWidth - event.clientX;

    setEditorConfig({
      ...editorConfig,
      width: correctWidth,
      isResizeNow: false,
    });
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <EditorWrapper width={editorConfig.width}>
      <Editor
        theme={editorConfig.theme}
        language={'html'}
        keepCurrentModel={false}
        height={`calc(100vh - ${HEADER_HEIGHT}px)`}
        options={{
          cursorStyle: 'line',
          minimap: { enabled: false },
          fontSize: editorConfig.fontSize,
          renderLineHighlight: 'gutter',
        }}
      />
      <ResizeHandle
        placement={editorConfig.placement}
        onMouseDown={handleMouseDown}
      />
    </EditorWrapper>
  );
};

export default CodeEditor;
