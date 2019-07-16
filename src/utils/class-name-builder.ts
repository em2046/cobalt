export default class ClassNameBuilder {
  private classNameSet: Set<string>

  constructor(...x: (string | string[] | object | undefined)[]) {
    this.classNameSet = new Set()
    this.add(...x)
  }

  public add(...x: (string | string[] | object | undefined)[]): void {
    x.forEach(item => {
      if (Array.isArray(item)) {
        this.addClassNameList(item)
      } else if (typeof item === 'object') {
        this.addClassNameObject(item)
      } else if (typeof item === 'string') {
        this.addClassName(item)
      }
    })
  }

  public remove(className: string): void {
    this.classNameSet.delete(className)
  }

  private addClassNameObject(classNameObject: object): void {
    Object.entries(classNameObject).forEach(entry => {
      let [key, value] = entry
      if (value) {
        this.addClassName(key)
      }
    })
  }

  private addClassNameList(classNameList: string[]): void {
    classNameList.forEach(className => {
      this.addClassName(className)
    })
  }

  private addClassName(className?: string): void {
    if (className) {
      this.classNameSet.add(className)
    }
  }

  public toString() {
    let list = Array.from(this.classNameSet.values())
    return list.join(' ')
  }
}
