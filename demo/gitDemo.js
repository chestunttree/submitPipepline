import execa from 'execa';

const result = git('git status --porcelain');
console.log(typeof result)

function git(execaCommand) {
  const execaReturn = execa.commandSync(execaCommand,{shell:true}).stdout;
  // console.log(execaReturn, `execaCommand: ${execaCommand}`);
  return execaReturn;
}