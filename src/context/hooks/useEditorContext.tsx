import { useContext } from 'react';
import { CodeEditorContext } from '../CodeEditorContext';

const useEditorContext = () => {
  const context = useContext(CodeEditorContext);

  if (!context) {
    throw new Error('EditorComponent must be used within a CodeEditorProvider');
  }

  return context;
};

export default useEditorContext;
