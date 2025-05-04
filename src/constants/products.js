import path from 'node:path';
import { fileURLToPath } from 'node:url';

const parthURL = fileURLToPath(import.meta.url);
const dirname = path.dirname(parthURL);
const PATH_DB = path.join(dirname, '..', 'db', 'db.json');
