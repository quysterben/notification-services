/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-expect-error 7016
import shell from 'shelljs';

const shx: any = shell;

shx.cp('-R', 'src/emails', 'build/src/');
