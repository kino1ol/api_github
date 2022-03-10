import {makeAutoObservable} from 'mobx'
import axios from "axios";
import {TUsersData, TUser} from "../types/types";
import {ChangeEvent} from "react";

class DataUsers {

    users: TUsersData = {
        "total_count": 0,
        "incomplete_results": false,
        "items": []
    }

    constructor() {
        makeAutoObservable(this)
    }

    getUsers = (e: ChangeEvent<HTMLInputElement>) => {

        axios.get(`https://api.github.com/search/users?q=${e.target.value}&per_page=20&page=1`)
            .then((resMain ) => {

                this.users = resMain.data
                this.users.items.forEach( (item: TUser) => {

                    axios.get(`https://api.github.com/users/${item.login}/following`)
                        .then(res => item.following = res.data)
                    axios.get(`https://api.github.com/users/${item.login}/followers`)
                        .then(res => item.followers = res.data)
                    axios.get(`https://api.github.com/users/${item.login}/repos`)
                        .then(res => item.repos = res.data)

                })
            })
    }
}

export default new DataUsers