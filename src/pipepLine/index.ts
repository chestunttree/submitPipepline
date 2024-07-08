import { PipepUnit } from "../type";
import { SubmitUnit } from "./units/submit";


/**
 * 执行链
 */
export class PipepLine {
  units: PipepUnit[] = [];


  // public submit(index:number=-1, commitMessage: string, ) {
  //   this.units.splice(index, 1, new SubmitUnit(''))
  // }

  /**
   * 操作执行链: 插入、替换、删除
   * @param index 
   * @param deleteCount 
   * @param unit 
   */
  public splice(index: number = -1, deleteCount: number, unit: PipepUnit,) {
    this.units.splice(index, deleteCount, unit);
  }
  /**
   * 执行链排序
   * @param target 
   * @param newIndex 
   */
  public sort(target: PipepUnit, newIndex: number) {
    let _target: PipepUnit | undefined = undefined;
    const line = this.units.map((i) => {
      if (i._uid === target._uid) {
        _target = i;
        return undefined;
      }
      return i;
    });
    line.splice(newIndex, 0, _target);
    this.units = line.filter<PipepUnit>((i): i is PipepUnit => Boolean(i));
  }
  afterEach() {
    console.log('after each');
  }
  beforeEach() {
    console.log('before each');
  }
}