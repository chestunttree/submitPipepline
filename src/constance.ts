import * as vscode from 'vscode';

/**
 * 继续执行被中断的执行链
 *  当执行链中的小单元报错会中断执行链, 或是git冲突之类的问题需要用户手动操作后再继续运行执行链.
 */
export interface CmdContinue extends vscode.Disposable {};

/**
 * 运行选中的执行链
 */
export interface CmdRun extends vscode.Disposable {};

/**
 * 打开操作面板
 */
export interface CmdOperation extends vscode.Disposable {};


export type Unit = {};