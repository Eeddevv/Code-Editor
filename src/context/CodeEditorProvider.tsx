import { useState, ReactNode, useEffect } from 'react';
import { CodeEditorContext } from './CodeEditorContext';
import { LOCAL_STORAGE_EDITOR_CONFIG } from '../constants/localStorage';
import { CodeEditorConfig, DEFAULT_EDITOR_CONFIG } from '../config/editor.config';

interface CodeEditorProviderProps {
  children: ReactNode;
}

export const CodeEditorProvider = ({ children }: CodeEditorProviderProps) => {
  const savedEditorConfig = localStorage.getItem(LOCAL_STORAGE_EDITOR_CONFIG);
  const currentEditorConfig = savedEditorConfig
    ? JSON.parse(savedEditorConfig)
    : DEFAULT_EDITOR_CONFIG;

  const [editorConfig, setEditorConfig] = useState<CodeEditorConfig>(currentEditorConfig);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_EDITOR_CONFIG, JSON.stringify(editorConfig));
  }, [editorConfig]);

  return (
    <CodeEditorContext.Provider value={{ editorConfig, setEditorConfig }}>
      {children}
    </CodeEditorContext.Provider>
  );
};
