package com.hackathon.work.CatalogHackathon;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CheckMe {

    @RequestMapping("/")
    public String index(){
        return "hello my dear";
    }
}
