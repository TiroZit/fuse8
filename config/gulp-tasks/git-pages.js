import ghPages from "gh-pages";
import * as path from 'path';

export const gitPages = (cb) => {
  ghPages.publish(path.join(process.cwd(), './dist'), cb)
};