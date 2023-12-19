from shapely.geometry import shape, Point
import json

# Load GeoJSON data
with open('Rajasthan.geojson', 'r') as geojson_file:
    geojson_data = json.load(geojson_file)

# Specify the path to your JSON file
json_file_path = 'stations.json'

# Load the JSON array from the file
with open(json_file_path, 'r') as json_file:
    your_json_array = json.load(json_file)


# Iterate through each object in your JSON array
for obj in your_json_array:
    point = Point(obj['longitude'], obj['latitude'])

    # Check if the point is within any polygon in the GeoJSON data
    for feature in geojson_data['features']:
        polygon = shape(feature['geometry'])
        if point.within(polygon):
            # Add the district field to the object
            obj['district'] = feature['properties']['Dist_Name']
            break  # Break out of the loop once a match is found
        else:
            obj['district'] = 'invalid'


# Print the updated JSON array
print(json.dumps(your_json_array, indent=2))

# Specify the path to your output JSON file
output_json_file_path = 'geofied_stns.json'

# Save the updated JSON array to a new file
with open(output_json_file_path, 'w') as output_json_file:
    json.dump(your_json_array, output_json_file, indent=2)

print(f"Updated JSON array saved to {output_json_file_path}")
