import test from 'ava';
import { Neutrino } from 'neutrino';

const mw = () => require('..');
const options = { limit: 1024, woff: { limit: 2048 }, ttf: { limit: 4096 }, eot: { limit: 8192 } };

test('loads middleware', t => {
  t.notThrows(mw);
});

test('uses middleware', t => {
  const api = Neutrino();

  t.notThrows(() => api.use(mw()));
});

test('uses with options', t => {
  const api = Neutrino();

  t.notThrows(() => api.use(mw(), options));
});

test('instantiates', t => {
  const api = Neutrino();

  api.use(mw());

  t.notThrows(() => api.config.toConfig());
});

test('instantiates with options', t => {
  const api = Neutrino();

  api.use(mw(), options);

  t.notThrows(() => api.config.toConfig());
});
