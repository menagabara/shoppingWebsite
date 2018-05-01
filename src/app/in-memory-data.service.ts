// this script Simulates a data server
// will be removed after node is configured successfully
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: 'Mr. Nice', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 12, name: 'Narco', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 13, name: 'Bombasto', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 14, name: 'Celeritas', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 15, name: 'Magneta', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 16, name: 'RubberMan', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 17, name: 'Dynama', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 18, name: 'Dr IQ', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 19, name: 'Magma', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' },
      { id: 20, name: 'Tornado', email: 'mrNice@gmail.com', password: '******', address: 'cairooooo', naionalID: '123' }
    ];
    return {users};
  }
}
