// employees module — Client want to create a hris app
import { Router } from '../lib/router.mjs';
export const employeesRouter = new Router('/employees');
employeesRouter.get('/', () => ({ ok: true, resource: 'employees' }));
