import { Theme } from '@monaco-editor/react';
import { createContext, Dispatch, SetStateAction } from 'react';
import { editorLanguages, editorPlacement } from '../constants/editor';

export interface CodeEditorConfig {
  fontSize: number;
  theme: Theme;
  width: string;
  placement: editorPlacement;
  language: editorLanguages;
}

export const defaultCodeEditorConfig: CodeEditorConfig = {
  fontSize: 14,
  theme: 'vs-dark',
  width: '50%',
  language: editorLanguages.JAVASCRIPT,
  placement: editorPlacement.LEFT,
};

export type CodeEditorContextType = {
  editorConfig: CodeEditorConfig;
  setEditorConfig: Dispatch<SetStateAction<CodeEditorConfig>>;
} | null;

export const CodeEditorContext = createContext<CodeEditorContextType>(null);
