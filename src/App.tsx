import Header from './components/header/Header';
import CodeEditor from './components/code-editor/CodeEditor';
import CodeRender from './components/code-render/CodeRender';
import styled from 'styled-components';
import { HEADER_HEIGHT } from './constants/sizes';
import useEditorContext from './context/hooks/useEditorContext';
import { editorPlacement } from './constants/editor';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div<{ placement: editorPlacement }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.placement === editorPlacement.LEFT ? 'row' : 'row-reverse')};
  height: calc(100vh - ${HEADER_HEIGHT}px);
`;

const App = () => {
  const { editorConfig } = useEditorContext();

  return (
    <AppWrapper>
      <Header />
      <Wrapper placement={editorConfig.placement}>
        <CodeEditor />
        <CodeRender />
      </Wrapper>
    </AppWrapper>
  );
};

export default App;
