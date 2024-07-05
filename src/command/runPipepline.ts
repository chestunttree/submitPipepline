import * as vscode from 'vscode';
import { CmdContinue, CmdRun } from '../constance';


export function registerRunPipepLine(context: vscode.ExtensionContext) {
  const disposable:CmdRun = vscode.commands.registerCommand('submitpipepline.run', async() =>{
    console.log('execution sbumitpipepline.run');
  });
  const disposableContinue:CmdContinue = vscode.commands.registerCommand('submitpipepline.continue', async() =>{
    console.log('execution submitpipepline.continue');
  });
  return [disposable, disposableContinue];
}