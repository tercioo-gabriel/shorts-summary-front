import axios from "axios"

export const server = axios.create({
  baseURL: "http://localhost:3333",
})

const port = process.env.PORT || 3333;