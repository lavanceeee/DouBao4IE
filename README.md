# GPT4IE

**NOTE: It's a rebuilt version of [GPT4IE](https://github.com/cocacola-lab/GPT4IE) from [cocacola-lab](https://github.com/cocacola-lab) BJTU.**

This project updated some **engineering improvements** of original project and **simplified code**, making it a pure and understandable version.

This version of GPT4IE is also a double-language IE extraction tool, powered by [DouBao](https://www.volcengine.com/) API.

## What I have done

Original project has a lot of **repetitive function**, making it bloated and not elegant enough. I simplified the core code and combined them into one function:

![simplified_code](./src/show/simplified_code.png)

Orginal version made **all the code coupled** into one file, making the project structure difficult to understand. I made the code clearer by layering the structure:

![project_str](./src/show/project_str.png)

Orginal version **hard-coded default prompt** in the code, I extractd them into `/prompts/default_prompt.json`, making it more pure and clean:

![structured_json](./src/show/structured_json.png)

## Tests

NOTE: tested IE result is based on `doubao-lite-32k-240828`, the complate test suite is located at `/test`.

### RE

#### Ch

![re-ch](/tests/RE/en/RE-en.jpg)

#### En

![re-en](/tests/RE/en/RE-en.jpg)

### NER

#### Ch

![ner-ch](/tests/NER/ch/NER-ch-01.png)

#### En

![ner-en](/tests/NER/en/NER-en-01.png)

### EE

#### Ch

![ee-ch](/tests/EE/ch/EE-ch-01.png)

#### En

![ee-en](/tests/EE/en/EE-en-01.png)

## Deploy

NOTE: It's a Vue project so make sure you have installed nodejs on your device.

+ run `npm install` 

+ register a [DouBao API account](https://www.volcengine.com/) and get your API key

+ run `npm run dev` to start



