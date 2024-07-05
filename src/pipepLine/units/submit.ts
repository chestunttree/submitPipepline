import { Unit } from "./base";


/**
 * 提交单元
 */
export class SubmitUnit extends Unit {
  private commands: (() => Promise<any>)[] = [];
  constructor(
    /** 提交备注 */
    public commitMessage: string,
    /** 是否push */
    public isGitPush: boolean = false,
    /** 提交文件路径 */
    public files?:string,
  ){
    super();
    this.initExecutionUnit();
  }
  /**
   * 执行单元 执行链装载
   */
  private initExecutionUnit(){
    this.commands.push(this.Status);
  }

}