export interface TUser {
    login: string,
    node_id: string,
    following: [],
    followers: [],
    repos: [],
    avatar_url: string
}

export interface TUsersData {
    "total_count": number,
    "incomplete_results": boolean,
    "items": TUser[]
}