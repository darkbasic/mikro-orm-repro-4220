import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { MikroORM } from '@mikro-orm/sqlite';
import { Chat } from './entities/Chat';

void (async () => {
  const orm = await MikroORM.init({
    metadataProvider: TsMorphMetadataProvider,
    debug: true,
    entities: ['./dist/entities/**/*.js'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/entities/**/*.ts'], // path to our TS entities (source), relative to `baseDir`
    dbName: 'repro-4220',
  });
  
  orm.em.fork().find(Chat, [{ owner: 1, recipient: 3 }, { owner: 2 }]);
  orm.em.fork().find(Chat, [{ owner: 1, recipient: [3, 6] }, { owner: 1, recipient: [4, 5] }]);
})();
