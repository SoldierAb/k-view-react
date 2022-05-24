/* eslint-disable  import/no-extraneous-dependencies */
import path from 'path';
import { fileURLToPath } from "url";
import { NodePlopAPI } from 'plop';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function (plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: '创建一个新组件',
    prompts: [
      { type: 'input', name: 'name', message: '请输入组件名称（多个单词以中横线命名）' },
      { type: 'input', name: 'CN', message: '请输入组件中文名称' },
      { type: 'input', name: 'description', message: '请输入组件描述' },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/index.ts'),
        templateFile: path.resolve(__dirname, './template/index.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/{{pascalCase name}}.tsx'),
        templateFile: path.resolve(__dirname, './template/comp.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/style/index.less'),
        templateFile: path.resolve(__dirname, './template/style/style.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/style/index.ts'),
        templateFile: path.resolve(__dirname, './template/style/index.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../docs/components/{{kebabCase name}}.md'),
        templateFile: path.resolve(__dirname, './template/doc.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/{{camelCase name}}Types.ts'),
        templateFile: path.resolve(__dirname, './template/types.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/demos/basic.tsx'),
        templateFile: path.resolve(__dirname, './template/demos/basic.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/__tests__/{{pascalCase name}}.spec.tsx'),
        templateFile: path.resolve(__dirname, './template/__tests__/index.spec.hbs'),
      },
      {
        type: 'append',
        path: path.resolve(__dirname, '../src/index.ts'),
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: "export { default as {{pascalCase name}} } from './{{kebabCase name}}'",
      },
      {
        type: 'append',
        path: path.resolve(__dirname, '../.umirc.ts'),
        pattern: '/* PLOP_INJECT_MD */',
        template: "'/components/{{kebabCase name}}.md',",
      },
    ],
  });
}
