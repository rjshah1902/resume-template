import Template1Design from '../components/templates/Template1Design';
import Template2Design from '../components/templates/Template2Design';
import Template3Design from '../components/templates/Template3Design';
import Template4Design from '../components/templates/Template4Design';
import Template5Design from '../components/templates/Template5Design';

export const templatesIds = [1, 2, 3, 4, 5];

export function getTemplateDesign(id: number) {
  switch (id) {
    case 1:
      return Template1Design;
    case 2:
      return Template2Design;
    case 3:
      return Template3Design;
    case 4:
      return Template4Design;
    case 5:
      return Template5Design;
    default:
      return null;
  }
}
