import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = 'AIzaSyC_vDSs5FD2mhnyPIhJZivRX-NPz9HWbZY';
console.log(API_KEY)
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const generationConfig = {
	//stopSequences: ["red"],
	//maxOutputTokens: 5,
	//temperature: 0.9,
	//topP: 0.1,
	//topK: 16,
};
// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model