import Editor from '@monaco-editor/react';
import { HEADER_HEIGHT } from '../../constants/sizes';
import useEditorContext from '../../context/hooks/useEditorContext';

const CodeEditor = () => {
  const { editorConfig } = useEditorContext();

  return (
    <Editor
      theme={editorConfig.theme}
      language={'html'}
      className='editor'
      keepCurrentModel={false}
      width={editorConfig.width}
      height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      options={{
        cursorStyle: 'line',
        minimap: { enabled: false },
        fontSize: editorConfig.fontSize,
        renderLineHighlight: 'gutter',
      }}
    />
  );
};

export default CodeEditor;
