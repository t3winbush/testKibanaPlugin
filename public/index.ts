import './index.scss';

import { TestPlugin3Plugin } from './plugin';

// This exports static code and TypeScript types, 
// as well as, Kibana Platform `plugin()` initializer. 
export function plugin() {
  return new TestPlugin3Plugin();
}
