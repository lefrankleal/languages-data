import { Language } from './index.d';
import langs from './languages.json'

class LanguagesData {
  public getAll(): Language[] {
    return langs
  }

  public getByCode(code: string): Language | {} {
    let codex = langs.findIndex((v: any) => {
      return v.code === code
    })
    return (codex !== -1 ) ? langs[codex] : {}
  }
}

export default new LanguagesData()