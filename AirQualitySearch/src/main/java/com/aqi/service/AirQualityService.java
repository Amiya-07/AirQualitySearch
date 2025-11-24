package com.aqi.service;
import com.aqi.model.CityAQIResponse;

public interface AirQualityService {

    CityAQIResponse getAirQualityByCity(String cityName);
}
