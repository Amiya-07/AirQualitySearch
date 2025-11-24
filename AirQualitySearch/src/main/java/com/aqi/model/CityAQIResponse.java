package com.aqi.model;

import lombok.Data;

@Data
public class CityAQIResponse {

    private String cityName;
    private int aqi;
    private String dominantPollutant;
    private String airQualityStatus;
    private String lastUpdated;
}