import ChangeView from '../change-view/ChangeView';
import LanguageTabs from '../language-tabs/LanguageTabs';
import useEditorContext from '../../context/hooks/useEditorContext';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants/sizes';
import EditorSettings from '../editor-settings/EditorSettings';
import { Theme } from '@monaco-editor/react';

const HeaderWrapper = styled.header<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.theme === 'vs-dark' ? '#232323' : '#f7f7f7')};
  transition: background-color 0.3s ease;
  padding: 20px;
  height: ${HEADER_HEIGHT}px;
  & * {
    color: ${(props) => (props.theme === 'vs-dark' ? '#ffffff' : '#232323')};
    fill: ${(props) => (props.theme === 'vs-dark' ? '#232323' : '#ffffff')};
  }
`;

const Flex = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  & * {
    background-color: ${(props) => (props.theme === 'vs-dark' ? '#ffffff' : '#3e3e3e')};
  }
`;

const Header = () => {
  const { editorConfig } = useEditorContext();

  return (
    <HeaderWrapper theme={editorConfig.theme}>
      <LanguageTabs />
      <Flex theme={editorConfig.theme}>
        <ChangeView />
        <EditorSettings />
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
