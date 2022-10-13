import requests
from bs4 import BeautifulSoup
import json

URL = "https://www.sats.no/treningssenter?clubId=166"
headers = {"User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"}

page = requests.get(URL, headers=headers)
soup = BeautifulSoup(page.content, "html.parser")
name = soup.find_all("h2", {"class": "location-list-item__title"})
id = soup.find_all(attrs={"data-id": True})
address = soup.find_all("div", {"class": "locations-page__popup"})
arr1 = []
arr2 = []
obj = {}

for tag in name:
    #print(tag.text.strip())
    arr1.append(tag.text.strip())


for tag in id:
    #print(tag['data-id'])
    arr2.append(int(tag['data-id']))



# print(arr1)
# print(arr2)
# print(len(arr2))
#
#
print("[")
for tag in range(85):
    print("{\n" f'"CENTER_NAME": "{arr1[tag]}", \n"CENTER_ID": {arr2[tag]}, \n"CENTER_ADDRESS": ""'"\n},")
print("]")
