import { spawnSync } from 'node:child_process';

const pattern = 'foo/bar/**/*';

const lsFiles = spawnSync(
    `git`,
    ['ls-files', pattern],
    {
        encoding: 'utf8',
    },
).stdout;

console.log(lsFiles);