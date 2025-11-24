package com.aqi.controller;

import com.aqi.model.CityAQIResponse;
import com.aqi.service.AirQualityService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/air-quality")
@CrossOrigin("*")
public class AirQualityController {

    private final AirQualityService airQualityService;

    public AirQualityController(AirQualityService airQualityService) {
        this.airQualityService = airQualityService;
    }

    @GetMapping("/{city}")
    public CityAQIResponse getAirQuality(@PathVariable String city) {
        return airQualityService.getAirQualityByCity(city);
    }
}
