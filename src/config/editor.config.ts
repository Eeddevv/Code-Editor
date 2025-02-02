import { Theme } from '@monaco-editor/react';

export interface CodeEditorConfig {
  fontSize: number;
  theme: Theme;
  width: string;
  placement: editorPlacement;
  language: editorLanguages;
}

export enum editorPlacement {
  RIGHT = 'right',
  LEFT = 'left',
}

export enum editorLanguages {
  JAVASCRIPT = 'javascript',
  HTML = 'html',
  CSS = 'css',
}

export const DEFAULT_EDITOR_CONFIG: CodeEditorConfig = {
  fontSize: 14,
  theme: 'vs-dark',
  width: '50%',
  language: editorLanguages.JAVASCRIPT,
  placement: editorPlacement.LEFT,
};
