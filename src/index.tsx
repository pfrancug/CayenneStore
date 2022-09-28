/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';

import { AppWrapper } from 'app';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<AppWrapper />);
