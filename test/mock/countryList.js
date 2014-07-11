'use strict';

angular.module('mockCountryList', [])
  .value('defaultJSON', {
    "geonames": [
      {
        "continent": "EU",
        "capital": "Andorra la Vella",
        "languages": "ca",
        "geonameId": 3041565,
        "south": 42.42849259876837,
        "isoAlpha3": "AND",
        "north": 42.65604389629997,
        "fipsCode": "AN",
        "population": "84000",
        "east": 1.7865427778319827,
        "isoNumeric": "020",
        "areaInSqKm": "468.0",
        "countryCode": "AD",
        "west": 1.4071867141112762,
        "countryName": "Andorra",
        "continentName": "Europe",
        "currencyCode": "EUR"
      },
      {
        "continent": "AS",
        "capital": "Abu Dhabi",
        "languages": "ar-AE,fa,en,hi,ur",
        "geonameId": 290557,
        "south": 22.633329391479492,
        "isoAlpha3": "ARE",
        "north": 26.08415985107422,
        "fipsCode": "AE",
        "population": "4975593",
        "east": 56.38166046142578,
        "isoNumeric": "784",
        "areaInSqKm": "82880.0",
        "countryCode": "AE",
        "west": 51.58332824707031,
        "countryName": "United Arab Emirates",
        "continentName": "Asia",
        "currencyCode": "AED"
      },
      {
        "continent": "AS",
        "capital": "Kabul",
        "languages": "fa-AF,ps,uz-AF,tk",
        "geonameId": 1149361,
        "south": 29.377472,
        "isoAlpha3": "AFG",
        "north": 38.483418,
        "fipsCode": "AF",
        "population": "29121286",
        "east": 74.879448,
        "isoNumeric": "004",
        "areaInSqKm": "647500.0",
        "countryCode": "AF",
        "west": 60.478443,
        "countryName": "Afghanistan",
        "continentName": "Asia",
        "currencyCode": "AFN"
      }
    ]
  });