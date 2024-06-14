// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { registerRunPipepLine } from './command/runPipepline';
import { registerOperation } from './command/operation';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// let disposable = vscode.commands.registerCommand('submitpipepline.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from submitPipepline!');
	// });

	context.subscriptions.push(...registerRunPipepLine(context), registerOperation(context));
}

// This method is called when your extension is deactivated
export function deactivate() {}
