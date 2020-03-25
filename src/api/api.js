import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7099b740-e8c5-45c1-9acb-124c841c1fd7"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  getProfile(userId = 2) {
    return instance.get(`/profile/${userId}`)
      .then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => response.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  }
}

