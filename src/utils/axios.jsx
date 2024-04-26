import axios from "axios"
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzE3YzczYjk3NDU0Zjg1OGY2NzliNzUxNjJmODMzOCIsInN1YiI6IjY2Mjc0OTkzY2I1YzhlMDE4NzQyZDI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uF0Lag-WQOHxT1iG1eWRIZgsgY5XM2_QaUCTks7ZyoE'
    }
})
export default instance;