
import json
import time
import pandas as pd
import numpy as np

f = open("sats-visualise-map/src/personalVisits.json")
dataCenters = json.loads(f.read())
f = open("sats-visualise-map/src/CHECKINS.json")
checkIns = json.loads(f.read())

# print(location.latitude, location.longitude)
arr = []
arr2 = []
arr3 = []

# x is every checkin that came from sats dataset
# i is the final json dataset with all data
for i in dataCenters:
    for x in checkIns:
        if x["CHECKIN_CENTER"] == i["CENTER_ID"]:
            # print(str(i["CENTER_ID"]) + ' ' + i["CENTER_NAME"])
            arr.append(i["CENTER_ID"])
# print(arr)

count = pd.Series(arr).value_counts().to_json()
obt = json.loads(count)
for i in obt.items():
    print(i[0])

with open("sats-visualise-map/src/personalVisits.json", 'r+', encoding='utf-8') as file:
    # First we load existing data into a dict.
    file_data = json.load(file)
    add = 0

    for i in file_data:
        print(i["CENTER_ID"])
        for x in obt.items():
            if i["CENTER_ID"] == int(x[0]):
                i["COUNT_VISITED"] = int(x[1])
                # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent=4)

        # print(locations[1])
        # i[count] = locations[add]
        # Sets file's current position at offset.
        # file.seek(0)
        # convert back to json.
        # json.dump(file_data, file, indent=4)


# print(type(obt))
