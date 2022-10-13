import geopandas
import geopy
import json
import time

locator = geopy.Nominatim(user_agent="geoCoderr")
#location = locator.geocode("Gamle Ringeriksvei 34C, 1357 Bekkestua Oslo")
f = open("data-centers.json")
data = json.loads(f.read())

#print(location.latitude, location.longitude)

with open('geolocations.json', 'w', encoding='utf-8') as f:
    for i in data:
        time.sleep(1)
        print(i["CENTER_ADDRESS"])
        geocodeAddress = locator.geocode(i["CENTER_ADDRESS"])
        if geocodeAddress is None:
            json.dump(i["CENTER_ADDRESS"], f)
        else:
            json.dump((locator.geocode(i["CENTER_ADDRESS"]).latitude, locator.geocode(i["CENTER_ADDRESS"]).longitude),
                      f)
            #print(geocodeAddress.latitude, geocodeAddress.longitude)
        #time.sleep(1)
        #

        #print(locator.geocode(i["CENTER_ADDRESS"]).latitude, locator.geocode(i["CENTER_ADDRESS"]).longitude)


# with open("testFile.json", 'r+', encoding='utf-8') as file:
#     # First we load existing data into a dict.
#     file_data = json.load(file)
#     # print(file_data)
#     for i in file_data:
#         i["GEOLOCATION"] = "X"
#         # Sets file's current position at offset.
#         file.seek(0)
#         # convert back to json.
#         json.dump(file_data, file, indent=4)
#



