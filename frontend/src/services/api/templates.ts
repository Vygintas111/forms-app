import { ApiCore } from './core';
import {Template} from "../../components/templates/TemplatesList.tsx";

class TemplateApi extends ApiCore {
    getAll = (): Promise<Template[]> => this.get('/templates');
    getById = (id: number): Promise<Template> => this.get(`/templates/${id}`);
    create = (data: Template): Promise<Template> => this.post('/templates', data);
    update = (id: number, data: Partial<Template>): Promise<Template> => this.put(`/templates/${id}`, data);
    deleteTemplate = (id: number): Promise<void> => this.delete(`${id}`);
}

export const templateApi = new TemplateApi();