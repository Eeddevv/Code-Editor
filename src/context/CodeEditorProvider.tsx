import { useState, ReactNode } from 'react';
import { CodeEditorContext, defaultCodeEditorConfig, CodeEditorConfig } from './CodeEditorContext';

interface CodeEditorProviderProps {
  children: ReactNode;
}

export const CodeEditorProvider = ({ children }: CodeEditorProviderProps) => {
  const [editorConfig, setEditorConfig] = useState<CodeEditorConfig>(defaultCodeEditorConfig);

  return (
    <CodeEditorContext.Provider value={{ editorConfig, setEditorConfig }}>
      {children}
    </CodeEditorContext.Provider>
  );
};
