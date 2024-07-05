import * as vscode from 'vscode';
import { CmdOperation } from '../constance';


export function registerOperation(context: vscode.ExtensionContext) {
  const disposable:CmdOperation = vscode.commands.registerCommand('submitpipepline.operation', async() =>{
    console.log('execution submitpipepline.operation');
  });
  return disposable;
}