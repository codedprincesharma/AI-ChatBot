// generateResponse.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCQh1XL2TaoXDw5T3gQjVmK8Vj15a02eS8");

async function generateResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default generateResponse;
