import { createPortal } from 'react-dom';

function Portal({ children, ...rest }) {
  return createPortal(
    <div data-react-portal-host {...rest} >
      {children}
    </div >,
    document.body
  );
}

export default Portal;