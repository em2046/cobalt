const fsPromises = require('fs').promises;
const path = require('path');
const prettier = require('prettier');
const prettierConfig = {
  parser: 'typescript',
  singleQuote: true,
  endOfLine: 'lf'
};

const endOfLine = `
`;
const commaAndEndOfLine = `,
`;

let iconPath = './src/assets/icon';
let generatedPath = './src/components/icon';
let generatedName = 'icon-sheet-generated';
let generatedListName = 'icon-list-generated';
let generatedExtName = 'ts';
let importGeneratedName = ['./', generatedName].join('');
let generatedNameWithExt = [generatedName, generatedExtName].join('.');
let generatedListNameWithExt = [generatedListName, generatedExtName].join('.');

function camelize(str) {
  return str.replace(/-(\w)/g, (match, chr) => {
    return chr ? chr.toUpperCase() : '';
  });
}

function pascalize(str) {
  let camelized = camelize(str);
  return camelized.substring(0, 1).toUpperCase() + camelized.substring(1);
}

let absoluteSrcPath = path.resolve(iconPath);
let absoluteDistFilePath = path.resolve(generatedPath);

let importPath = path.relative(absoluteDistFilePath, absoluteSrcPath);

importPath = importPath.split(path.sep).join('/');

let fileList = [];
let folderList = [];
let importList = [];
let exportList = [];
let sheetList = [];

const IMPORT_TEMPLATE = `import { ReactComponent as SVGR%REACT_COMPONENT_NAME% } from '%PATH%';`;
const EXPORT_TEMPLATE = `  ['%BASENAME%']: SVGR;`;
const SHEET_TEMPLATE = `  ['%BASENAME%']: SVGR%REACT_COMPONENT_NAME%`;

let date = new Date().toLocaleString();

let template = `/**
 * WARNING
 * THIS FILE WAS AUTO GENERATED FROM Node.js [/scripts/icon-generator.js]
 * DO NOT EDIT THIS FILE BY HAND -- YOUR CHANGES WILL BE OVERWRITTEN
 * Update Time: ${date}
 **/

import { SVGProps, FunctionComponent } from 'react';

%IMPORT_AREA%

type SVGR = FunctionComponent<SVGProps<SVGSVGElement>>;

export interface Sheet {
%EXPORT_AREA%
}

export type IconType = keyof Sheet;

export let iconSheet: Sheet = {
%SHEET_AREA%
};
`;

let listTempalte = `/**
 * WARNING
 * THIS FILE WAS AUTO GENERATED FROM Node.js [/scripts/icon-generator.js]
 * DO NOT EDIT THIS FILE BY HAND -- YOUR CHANGES WILL BE OVERWRITTEN
 * Update Time: ${date}
 **/

import {IconType} from '${importGeneratedName}'

interface IconListType {
  group: string,
  children: IconType[]
}

export let iconList:IconListType[] =
%LIST_AREA%
;
`;

async function createFileList(folder) {
  let absoluteFolderPath = path.join(absoluteSrcPath, folder);
  let fileHandle;
  try {
    fileHandle = await fsPromises.readdir(absoluteFolderPath);

    let folderItem = {
      group: folder,
      children: []
    };

    fileHandle.forEach(filename => {
      let extname = path.extname(filename);
      let basename = path.basename(filename, extname);
      let pascalCaseName = pascalize(basename);

      let item = {
        folder,
        filename,
        basename,
        pascalCaseName,
        extname
      };
      fileList.push(item);
      folderItem.children.push(basename);
    });

    folderList.push(folderItem);
  } catch (e) {
    console.error(e);
  }
}

async function iconGenerator() {
  let filesHandle;
  try {
    filesHandle = await fsPromises.readdir(absoluteSrcPath);

    for (let folder of filesHandle) {
      await createFileList(folder);
    }
  } catch (e) {
    console.log(e);
  }

  fileList
    .sort((firstFile, secondFile) => {
      return firstFile.basename.localeCompare(secondFile.basename);
    })
    .forEach(file => {
      let { basename, pascalCaseName, filename, folder } = file;

      let importHasName = IMPORT_TEMPLATE.replace(
        '%REACT_COMPONENT_NAME%',
        pascalCaseName
      );
      let importHasPath = importHasName.replace(
        '%PATH%',
        path.posix.join(importPath, folder, filename)
      );
      importList.push(importHasPath);

      let exportHasBasename = EXPORT_TEMPLATE.replace('%BASENAME%', basename);
      exportList.push(exportHasBasename);

      let sheetHasName = SHEET_TEMPLATE.replace(
        '%REACT_COMPONENT_NAME%',
        pascalCaseName
      );
      let sheetHasBasename = sheetHasName.replace('%BASENAME%', basename);
      sheetList.push(sheetHasBasename);
    });

  template = template.replace('%IMPORT_AREA%', importList.join(endOfLine));
  template = template.replace('%EXPORT_AREA%', exportList.join(endOfLine));
  template = template.replace(
    '%SHEET_AREA%',
    sheetList.join(commaAndEndOfLine)
  );

  listTempalte = listTempalte.replace(
    '%LIST_AREA%',
    JSON.stringify(folderList)
  );

  await fsPromises.writeFile(
    path.join(absoluteDistFilePath, generatedNameWithExt),
    prettier.format(template, prettierConfig)
  );

  await fsPromises.writeFile(
    path.join(absoluteDistFilePath, generatedListNameWithExt),
    prettier.format(listTempalte, prettierConfig)
  );
}

(async () => {
  await iconGenerator();
})();
