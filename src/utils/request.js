import axios from 'axios'

const service = axios.create({
  timeout: 10000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(null,
  error => {
    return Promise.reject(error)
  }
)

export default service
