import { useState } from 'react';
import useEditorContext from '../../context/hooks/useEditorContext';
import { HEADER_HEIGHT } from '../../constants/sizes';
import styled from 'styled-components';

const IframeWrapper = styled.div<{ isResizeNow: boolean }>`
  pointer-events: ${(props) => (props.isResizeNow ? 'none' : 'auto')};
`;

const CodeRender = () => {
  const { editorConfig } = useEditorContext();
  const [html, setHtml] = useState('<h1>Hello</h1>');

  const srcDoc = `
  <html>
    <head>
    </head>
    <body>
      ${html}
    </body>
  </html>
`;

  return (
    <IframeWrapper isResizeNow={editorConfig.isResizeNow}>
      <iframe
        height={window.innerHeight - HEADER_HEIGHT}
        width={window.innerWidth - editorConfig.width}
        srcDoc={srcDoc}
        sandbox='allow-scripts'
      />
    </IframeWrapper>
  );
};

export default CodeRender;
