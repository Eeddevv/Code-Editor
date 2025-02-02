import { createContext, Dispatch, SetStateAction } from 'react';
import { CodeEditorConfig } from '../config/editor.config';

export type CodeEditorContextType = {
  editorConfig: CodeEditorConfig;
  setEditorConfig: Dispatch<SetStateAction<CodeEditorConfig>>;
} | null;

export const CodeEditorContext = createContext<CodeEditorContextType>(null);
