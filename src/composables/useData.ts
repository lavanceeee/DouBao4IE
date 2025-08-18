import axios from "axios";
import { getResponse } from "./api";
import { reg } from "../utils/regs";

interface selectedPattern {
    selectedLanguage: string
    selectedModel: string
}

interface usersInputForm {
    sentence: string
    rtl?: string
    stl?: string
    otl?: string
    etl?: string
    usersKey?: string
}

export async function getUsersForm(selectedPattern: selectedPattern, usersInputForm:usersInputForm) {
    
    //加载可视化
    document.body.style.cursor = 'wait';

    const {selectedLanguage: language, selectedModel: model} = selectedPattern;

    const file = `prompts/${model}-${language}.prompt`;
    const default_prompt_file = 'prompts/default_prompt.json';

    const response = await axios.get(`${file}`, {
        responseType: 'text'
    });

    if (response.data) {
        var prompt = response.data;

        for (const [key , value] of Object.entries(usersInputForm)) {
            if (value) {
                prompt = prompt.replace(`$${key}`, value);
            }else {
                const default_prompt_response = await axios.get(default_prompt_file);
                if (default_prompt_response.status === 200) {
                    const default_prompt = default_prompt_response.data; //自动转Object
                    prompt = prompt.replace(`$${key}`, JSON.stringify(default_prompt[language][model][key])); //如果字段名是动态的（变量），就必须用方括号
                }
            }   
        }

        const usersKey = usersInputForm.usersKey;
        const text = await getResponse(prompt, usersKey);
        
        //正则化
        const update = reg(text);
        return update;
    }
}