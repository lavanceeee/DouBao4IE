import axios from "axios";

//火山引擎API文档：https://www.volcengine.com/docs/82379/1298459

const DEFAULT_APIKey = "1e7831be-0b31-4f62-94b0-e3202bcef1c9"; 
const BASE_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions"; 

export async function getResponse(prompt: string, usersKey?: string) {
  const apiKey = usersKey || DEFAULT_APIKey;
  
  try {
    const response = await axios.post(
      BASE_URL,
      {
        model: "doubao-lite-32k-240828",
        messages: [ 
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    const aiResponse = response.data.choices[0]?.message?.content || "";
    console.log(aiResponse);
    alert(aiResponse);
    
  } catch (error) {
    console.error("API请求失败:", error);
    throw new Error("获取AI响应时发生错误");
  }
}