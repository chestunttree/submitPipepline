import execa from 'execa';
import * as vscode from 'vscode';
import { uniqueId } from 'lodash';
/**
 * 基础单元
 */
export class Unit {
  public _uid:string;
  constructor(){ this._uid = uniqueId(); }
  protected async Add(files?: string[]) {
    let execaCommand = 'git add .';
    if (files instanceof Array && files.length) execaCommand = `git add ${files.join(' ')}`;
    try {
      const {stdout, stderr, failed, timedOut, killed} = await this.git(execaCommand);
      console.log(stdout, stderr, failed, timedOut, killed);
    } catch (error) {
      console.log(error, 'error');
    }

  }

  protected async Status(){
    try {
      const {stdout, stderr, failed, timedOut, killed} = await this.git('git status -s');
      console.log('git status' ,stdout, stderr, failed, timedOut, killed);
      if(failed||timedOut||killed) vscode.window.showErrorMessage(`ERR: failed:${failed} timedOut:${timedOut} killed:${killed}`)
      return stdout;
    } catch (error) {
      console.log('error: git status' ,error);
    }
  }

  private git(execaCommand: string) {
    return execa.command(execaCommand, { shell: true });
    // console.log(execaReturn, `execaCommand: ${execaCommand}`);
  }
}