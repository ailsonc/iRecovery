import { InMemoryDbService } from 'angular-in-memory-web-api';
import { System } from './pages/systems/models/System.model';
import { Image } from './pages/images/models/image.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const systems: System[] = [
      { id: 1, name: 'Windows 10', description: 'Atualização de maio de 2019' },
      { id: 2, name: 'Windows 10', description: 'Atualização de janeiro de 2019' }
    ];
    const images: Image[] = [
      { id: 1, name: 'Imagem 1', description: 'Notebook 1', profile: null, systemId: systems[0].id, system: systems[0] } as Image,
      { id: 2, name: 'Imagem 2', description: 'Notebook 2', profile: null, systemId: systems[0].id, system: systems[0] } as Image
    ];
    return { systems, images };
  }
}
