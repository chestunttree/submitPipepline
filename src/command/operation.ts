import * as vscode from 'vscode';


export function registerOperation(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('submitpipepline.operation', async() =>{
    console.log('execution submitpipepline.operation');
  });
  return disposable;
}