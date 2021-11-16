import csv
from shutil import copyfile

csv_file = open('metadata.csv')
csv_reader = csv.reader(csv_file)
header = next(csv_reader)

i = 0
for row in csv_reader:
    i = i + 1
    file_name = row[1]
    disease = row[2]
    copyfile("undescribed_images/" + file_name + '.jpg', "described_images/" + disease + "_" + str(i) + ".jpg")

csv_file.close()
