import Template3Editor from '../components/editors/Template3Editor';
import Template5Editor from '../components/editors/Template5Editor';

export const templatesIds = [1, 2, 3, 4, 5];

export function getTemplateEditor(id: number) {
  switch (id) {
    case 1:
      return Template5Editor;
    case 3:
      return Template3Editor;
    default:
      return null;
  }
}
