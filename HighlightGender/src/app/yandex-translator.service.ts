import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YandexTranslatorService implements OnInit{
  results = '';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
  
  }

  getGender(wort) { 
    const key = 'dict.1.1.20170629T085718Z.820991b77d24faf6.c3c6ba5737266fe338e5702872cf10ba34c55b6e';
    const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${key}&lang=de-ru&text=${wort}`;

    return this.http.get(url);
  }
}