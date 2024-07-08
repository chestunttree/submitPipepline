import execa from 'execa';

const result = git('git status --porcelain');
console.log(typeof result)

function git(execaCommand) {
  const execaReturn = execa.commandSync(execaCommand,{shell:true}).stdout;
  // console.log(execaReturn, `execaCommand: ${execaCommand}`);
  return execaReturn;
}

/**
 * 当git 合并出现冲突时， 可以通过 `git diff --name-only --diff-filter=U` 获取出现冲突的文件,再通过下述代码获取出现冲突的代码块(行数),
  const fs = require('fs');
  const util = require('util');
  const readFile = util.promisify(fs.readFile);

  async function getConflicts(fileName) {
    const data = await readFile(fileName, 'utf8');
    const conflictBlocks = [];
    const conflictRegex = /<<<<<<<[\s\S]*?=======[\s\S]*?>>>>>>>/g;
    let match;
    while ((match = conflictRegex.exec(data)) !== null) {
      conflictBlocks.push(match[0]);
    }
    return conflictBlocks;
  }

  // 使用
  getConflicts('path-to-your-conflict-file').then(blocks => {
    console.log(blocks);  // 打印所有冲突代码块
  });
 */

  /**
   * 通过执行 git diff --name-only --diff-filter=U 命令来获取存在合并冲突的文件列表。然后你可以使用 VS Code 的 API 来打开这些文件。下面是一些示例代码：
    const cp = require('child_process');
    const vscode = require('vscode');
    const path = require('path');

    // 执行 git diff 命令获取冲突文件列表
    cp.exec('git diff --name-only --diff-filter=U', (error, stdout, stderr) => {
      if (error) {
        console.log(`exec error: ${error}`);
        return;
      }

      // 获取文件路径数组
      const files = stdout.split('\n').filter((file) => !!file);

      // 将冲突文件在 VS Code 中打开
      for (const file of files) {
        const openPath = vscode.Uri.file(path.join(__dirname, file)); // 替换 __dirname 为你的工作区目录路径
        vscode.workspace.openTextDocument(openPath).then(doc => {
          vscode.window.showTextDocument(doc);
        });
      }
    });
   */