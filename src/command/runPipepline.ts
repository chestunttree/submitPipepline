import * as vscode from 'vscode';


export function registerRunPipepLine(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('submitpipepline.run', async() =>{
    console.log('execution submitpipepline.run');
  });
  const disposableContinue = vscode.commands.registerCommand('submitpipepline.continue', async() =>{
    console.log('execution submitpipepline.continue');
  });
  return [disposable, disposableContinue];
}