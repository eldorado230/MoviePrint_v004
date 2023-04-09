import path from 'path';
import log from 'electron-log';
import shell from 'shelljs';

log.info('Running includeInDist script to copy necessary files to dist folder for packaging.');

// Set paths to relevant directories
const moviePrintDir = shell.pwd().stdout;
const distDir = path.resolve(moviePrintDir, 'app', 'dist');
const resourcesDir = path.resolve(moviePrintDir, 'resources');

// Ensure that dist directory exists
shell.mkdir('-p', distDir);

// Copy necessary files to dist directory
const filesToCopy = [
  'font/Franchise-Bold.woff',
  'weights/',
];
filesToCopy.forEach(file => {
  const source = path.resolve(resourcesDir, file);
  shell.cp('-nfr', source, distDir);
});

// Set shell verbosity to "verbose"
shell.config.verbose = true;
