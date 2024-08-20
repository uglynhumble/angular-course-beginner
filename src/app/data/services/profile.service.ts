import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Profile } from "../interfaces/profile.interface";
import { Pageble } from "../interfaces/pageble.interface";

@Injectable({
    providedIn: 'root'
})

export class ProfileService{
    http = inject(HttpClient)
    baseUrl ='https://icherniakov.ru/yt-course/'
    constructor(){}

    getTestAccounts(){
       return this.http.get<Profile[]>(`${this.baseUrl}account/test_accounts`)
    }

    getSubscribersShortList(){
        return this.http.get<Pageble<Profile>>(`${this.baseUrl}account/subscribers/`)
    }
}