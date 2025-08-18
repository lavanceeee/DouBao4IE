export function reg(text:string):string[]  {
    const reg = /\(.*?\)/g;
    let update = text.match(reg); //string[] || null

    if (!update) {
        update = [text];
    }

    return update;
}

