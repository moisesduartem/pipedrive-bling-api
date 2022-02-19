import { getPipedriveApi } from './api.service';
import { PipedriveService } from './pipedrive.service';

const createPipedriveService = () => new PipedriveService(getPipedriveApi());

export { createPipedriveService };
