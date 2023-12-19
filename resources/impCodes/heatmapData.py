import json
import pandas as pd
import numpy as np
import requests
import io
import csv

response= requests.get("https://rakshakrita0.vercel.app/api/authority/feedback")
jsondata = response.json()
data = json.loads(json.dumps(jsondata.get('feedbacks')))

csv_file_in_memory = io.StringIO()

csv_writer = csv.writer(csv_file_in_memory)

header = data[0].keys()
csv_writer.writerow(header)

for row in data:
    csv_writer.writerow(row.values())

csv_file_in_memory.seek(0)

df = pd.read_csv(csv_file_in_memory)

df = pd.DataFrame(df)

dfx = df.T

id_neg = {}
for key in dfx:
    row = dfx[key]
    if list(id_neg.keys()).count(row.stationId)==0:
        id_neg[row.stationId] = [0,1] if row.type=="Negative Feedback" else [1,0]
    else:
        if row.type=="Negative Feedback":
            id_neg[row.stationId][1]+=1
        else:
            id_neg[row.stationId][0]+=1

data = pd.DataFrame(id_neg).T

data.reset_index(inplace=True)

data.columns = ["stationId","Positive","Negative"]

for col in ["Positive","Negative"]:
    mn = float(np.min(data[col]))
    mx = float(np.max(data[col]))
    for i in range(len(data)):
        data.loc[i,col] = float(float(data.loc[i,col]-mn)/float(mx-mn))
        
        
jsondata = data.to_json(orient='records')

print(jsondata)